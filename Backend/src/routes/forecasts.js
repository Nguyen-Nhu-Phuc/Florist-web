import express from 'express';
import multer from 'multer';
import forecast from '../controllers/forecast.controller.js';

const upload = multer();

const router = express.Router();

router.post('/upload', upload.single('image_file'), forecast.predict);

export default router;
