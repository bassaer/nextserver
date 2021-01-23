import { Router } from 'express';
import middleware from './middleware';

const router = Router();

router.use(middleware);

export default router;
