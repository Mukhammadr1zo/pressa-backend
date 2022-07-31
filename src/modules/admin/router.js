import { Router } from "express";
import controller from './controller.js'

const router = Router();

router.get('/await', controller.AWAIT)
router.get('/accepted', controller.ACCEPTED)
router.get('/rejected', controller.REJECTED)



export default router

