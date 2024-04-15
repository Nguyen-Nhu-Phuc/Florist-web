<template>
    <div class="container">
        <div class="row">
            <div class="col-5">
                <label for="file">
                    <div class="file-upload-design">
                        <span class="browse-button">Browse file</span>
                    </div>
                    <input id="file" type="file" @change="handleFileChange" />
                </label>
            </div>
        </div>
        <div class="row">
            <div class="col-5">
                <div class="show__file">
                    <img id="uploaded-image" src="" alt="Uploaded Image">
                </div>
            </div>
            <div class="col-2">
                <button class="btn-class-name" @click="postimage">
                    <span class="back"></span>
                    <span class="front"></span>
                </button>

            </div>
            <div class="col-5 ">
                <!-- <div class="show__file"> -->
                <canvas class="show__file"></canvas>
            </div>
            <!-- </div> -->

        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            uploadedImageUrl: ''
        };
    },
    methods: {
        handleFileChange(event) {
            const imgElement = document.getElementById('uploaded-image');
            const file = event.target.files[0];
            if (file) {

                imgElement.src = URL.createObjectURL(file)
            }
        },
        async postimage() {
            const fileInput = document.getElementById('file');
            const file = await fileInput.files[0];

            const data = new FormData();
            data.append("image_file", file, "image_file");
            const response = await fetch("http://localhost:3000/api/forecast/upload", {
                method: "post",
                body: data
            });
            const boxes = await response.json();
            console.log(boxes);
            this.draw_image_and_boxes(file, boxes);

        },
        // async draw_image_and_boxes(file, boxes) {
        //     const img = new Image()
        //     img.src = URL.createObjectURL(file);
        //     img.onload = () => {
        //         const canvas = document.querySelector("canvas");
        //         canvas.width = img.width;
        //         canvas.height = img.height;
        //         const ctx = canvas.getContext("2d");
        //         ctx.drawImage(img, 0, 0);
        //         ctx.strokeStyle = "#00FF00";
        //         ctx.lineWidth = 3;
        //         ctx.font = "18px serif";
        //         boxes.forEach(([x1, y1, x2, y2, label]) => {
        //             ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
        //             ctx.fillStyle = "#00ff00";
        //             const width = ctx.measureText(label).width;
        //             ctx.fillRect(x1, y1, width + 10, 25);
        //             ctx.fillStyle = "#000000";
        //             ctx.fillText(label, x1, y1 + 18);
        //         });
        //     }
        // },

        async draw_image_and_boxes(file, boxes) {
            const img = new Image()
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                const canvas = document.querySelector("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                ctx.strokeStyle = "#00FF00";
                ctx.lineWidth = 3;
                ctx.font = "18px serif";

                boxes.forEach(box => {
                    const [x1, y1, x2, y2, label] = box;
                    ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
                    ctx.fillStyle = "#00ff00";
                    const width = ctx.measureText(label).width;
                    ctx.fillRect(x1, y1, width + 10, 25);
                    ctx.fillStyle = "#000000";
                    ctx.fillText(label, x1, y1 + 18);
                });
            }
        }



    }
};
</script>

<style scope="">
/* ======================================= */
.btn-class-name {
    --primary: 255, 90, 120;
    --secondary: 150, 50, 60;
    width: 60px;
    top: 140px;
    height: 50px;
    border: none;
    outline: none;
    cursor: pointer;
    user-select: none;
    touch-action: manipulation;
    outline: 10px solid rgb(var(--primary), .5);
    border-radius: 100%;
    position: relative;
    transition: .3s;
}

.btn-class-name .back {
    background: rgb(var(--secondary));
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.btn-class-name .front {
    background: linear-gradient(0deg, rgba(var(--primary), .6) 20%, rgba(var(--primary)) 50%);
    box-shadow: 0 .5em 1em -0.2em rgba(var(--secondary), .5);
    border-radius: 100%;
    position: absolute;
    border: 1px solid rgb(var(--secondary));
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: inherit;
    transform: translateY(-15%);
    transition: .15s;
    color: rgb(var(--secondary));
}

.btn-class-name:active .front {
    transform: translateY(0%);
    box-shadow: 0 0;
}

/* ======================================= */
.bnt__iden {
    padding-top: 150px;
}

button {
    max-width: 320px;
    display: flex;
    padding: 0.5rem 1.4rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
    align-items: center;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.25);
    gap: 0.75rem;
    color: rgb(65, 63, 63);
    background-color: #fff;
    cursor: pointer;
    transition: all .6s ease;
}

.button svg {
    height: 24px;
}

button:hover {
    transform: scale(1.02);
}

.show__file {

    /* padding: 10px; */
    text-align: center;
    height: 350px;
    width: 350px;
    /* border-radius: 25px; */
    /* background-image: url('../assets/images/hoa_cat.jpg'); */
    border: 3px solid #353535;
    z-index: 100;
}


.file-upload-form {

    padding: 50px;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
}

.file-upload-label input {
    display: none;
}

.file-upload-label svg {
    height: 50px;
    fill: rgb(82, 82, 82);
    margin-bottom: 20px;
}

.file-upload-label {
    cursor: pointer;
    background-color: #ddd;
    padding: 30px 70px;
    border-radius: 40px;
    border: 2px dashed rgb(82, 82, 82);
    box-shadow: 0px 0px 200px -50px rgba(0, 0, 0, 0.719);
}

.file-upload-design {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.browse-button {
    background-color: rgb(82, 82, 82);
    padding: 5px 15px;
    border-radius: 10px;
    color: white;
    transition: all 0.3s;
}

.browse-button:hover {
    background-color: rgb(14, 14, 14);
}
</style>