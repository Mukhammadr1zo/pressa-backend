import { Router } from "express";
import controller from './controller.js'
import {upload} from '../../libs/multer.js'

const router = Router();

router.post('/publish', upload.single('img'), controller.CREATE)
router.put('/publish/:publishId', controller.PUT)
router.delete('/publish/:publishId', controller.DELETE)
router.get('/publish/:publishId', controller.GET)

export default router

