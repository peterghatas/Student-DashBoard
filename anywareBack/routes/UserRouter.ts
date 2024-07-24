import express from 'express';
const router = express.Router();

import { register, verifyToken } from '../controllers/UserCon';
import { login } from '../controllers/UserCon';

router.post('/register', register);
router.post('/login', login);
router.post('/verifyToken', verifyToken);


export default router;