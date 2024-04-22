import sharp from 'sharp';
import multer from 'multer';
import fs from 'fs';
import ort from 'onnxruntime-node';
import express from 'express';

const yolo_classes = [
    'lily', 'lotus', 'tulip', 'rose', 'sunflower', 'carnation', 'orchid', 'hydrangea'
];

const forecastController = {

    prepare: async (buffer) => {
        const img = sharp(buffer);
        const md = await img.metadata();
        const [img_width, img_height] = [md.width, md.height];
        const pixels = await img.removeAlpha()
            .resize({ width: 640, height: 640, fit: 'fill' })
            .raw()
            .toBuffer();

        const red = [], green = [], blue = [];
        for (let index = 0; index < pixels.length; index += 3) {
            red.push(pixels[index] / 255.0);
            green.push(pixels[index + 1] / 255.0);
            blue.push(pixels[index + 2] / 255.0);
        }

        const input = [...red, ...green, ...blue];
        return [input, img_width, img_height];
    },
    
    run_model: async (input) => {
        const model = await ort.InferenceSession.create("E:/florist_web/Backend/src/controllers/best.onnx");
        input = new ort.Tensor(Float32Array.from(input), [1, 3, 640, 640]);
        const outputs = await model.run({ images: input });
        console.log(outputs["output0"].data);
        return outputs["output0"].data;
    },

    // process_output: async (output, img_width, img_height) => {
    //     let boxes = [];
    //     for (let index=0;index<8400;index++) {
    //         const [class_id,prob] = [...Array(80).keys()]
    //             .map(col => [col, output[8400*(col+4)+index]])
    //             .reduce((accum, item) => item[1]>accum[1] ? item : accum,[0,0]);
    //         if (prob < 0.5) {
    //             continue;
    //         }
    //         const label = yolo_classes[class_id];
    //         const xc = output[index];
    //         const yc = output[8400+index];
    //         const w = output[2*8400+index];
    //         const h = output[3*8400+index];
    //         const x1 = (xc-w/2)/640*img_width;
    //         const y1 = (yc-h/2)/640*img_height;
    //         const x2 = (xc+w/2)/640*img_width;
    //         const y2 = (yc+h/2)/640*img_height;
    //         boxes.push([x1,y1,x2,y2,label,prob]);
    //     }

    //     boxes = boxes.sort((box1,box2) => box2[5]-box1[5])
    //     const result = [];
    //     while (boxes.length>0) {
    //         result.push(boxes[0]);
    //         boxes = boxes.filter(box => forecastController.iou(boxes[0],box)<0.7);
    //     }
    //     return result;
    // },

    process_output: async (output, img_width, img_height) => {
        let boxes = [];
        for (let index = 0; index < 8400; index++) {
            // Xử lý các đối tượng có xác suất lớn hơn ngưỡng 0.5
            for (let class_id = 0; class_id < 80; class_id++) {
                const prob = output[8400 * (class_id + 4) + index];
                if (prob >= 0.5) {
                    const label = yolo_classes[class_id];
                    const xc = output[index];
                    const yc = output[8400 + index];
                    const w = output[2 * 8400 + index];
                    const h = output[3 * 8400 + index];
                    const x1 = (xc - w / 2) / 640 * img_width;
                    const y1 = (yc - h / 2) / 640 * img_height;
                    const x2 = (xc + w / 2) / 640 * img_width;
                    const y2 = (yc + h / 2) / 640 * img_height;
                    boxes.push([x1, y1, x2, y2, label, prob]);
                }
            }
        }
        return boxes;
    },


    // detect: async (buf) => {
    //     const [input,img_width,img_height] = await forecastController.prepare(buf);
    //     const output = await forecastController.run_model(input);
    //     return forecastController.process_output(output,img_width,img_height);
    // },

    detect: async (buf) => {
        const [input, img_width, img_height] = await forecastController.prepare(buf);
        const output = await forecastController.run_model(input);
        return forecastController.process_output(output, img_width, img_height);
    },

    iou: async (box1, box2) => {
        return forecastController.intersection(box1, box2) / forecastController.union(box1, box2);
    },

    union: async (box1, box2) => {
        const [box1_x1, box1_y1, box1_x2, box1_y2] = box1;
        const [box2_x1, box2_y1, box2_x2, box2_y2] = box2;
        const box1_area = (box1_x2 - box1_x1) * (box1_y2 - box1_y1)
        const box2_area = (box2_x2 - box2_x1) * (box2_y2 - box2_y1)
        return box1_area + box2_area - forecastController.intersection(box1, box2)
    },

    intersection: async (box1, box2) => {
        const [box1_x1, box1_y1, box1_x2, box1_y2] = box1;
        const [box2_x1, box2_y1, box2_x2, box2_y2] = box2;
        const x1 = Math.max(box1_x1, box2_x1);
        const y1 = Math.max(box1_y1, box2_y1);
        const x2 = Math.min(box1_x2, box2_x2);
        const y2 = Math.min(box1_y2, box2_y2);
        return (x2 - x1) * (y2 - y1)
    },


    predict: async (req, res) => {
        try {

            const tmp = await req.file.buffer
            console.log(tmp);
            const boxes = await forecastController.detect(tmp);

            res.status(200).json(boxes);
        }
        catch (error) {
            console.error('Error preparing input:', error);
            res.status(500).send('Internal server error');
        }
    },
};

export default forecastController;
