import express, { Express, Request, Response, Router } from 'express';
const router = express.Router();
import { getQuizzes, createQuizzes, deleteQuizzes, updateQuizzes } from '../controllers/quizCon';

router.get('/GetQuizzes', getQuizzes);
router.post('/CreatQuizzes', createQuizzes);
router.delete('/DeleteQuizzes/:id', deleteQuizzes);
router.put('/UpdateQuizzes/:id', updateQuizzes);


export default  router;