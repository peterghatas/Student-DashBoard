import express, { Express, Request, Response } from 'express';
import Quiz from '../models/quiz';


export const getQuizzes = async (req :Request, res:Response) => {
    try {
      const quizzes = await Quiz.find();
      res.json(quizzes);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving quizzes', error });
    }
  };

  export const createQuizzes = async (req :Request, res:Response) => {
    try {
      const quiz = new Quiz(
        {
          title: req.body.title,
          course: req.body.course,
          topic: req.body.topic,
          date: req.body.date,
      }
      );

     await quiz.save();

      res.status(201).json(Quiz);
    } catch (error) {
      console.error('Error creating Quiz:', error);
      res.status(500).json({ message: 'Error creating Quiz', error });
    }
  };


 export const deleteQuizzes = async (req :Request, res:Response) => {
    try {
      const { id } = req.params;
      const quiz = await Quiz.findByIdAndDelete(id);
      
      if (!quiz) {
        return res.status(404).json({ message: 'Announcement not found' });
      }
      res.status(204).send();
    } catch (error) {
      console.error('Error creating quiz:', error);
      res.status(500).json({ message: 'Error deleting quiz', error });
    }
  };

 export const updateQuizzes = async (req :Request, res:Response) => {
    try {
      const { id } = req.params;
      const quiz = await Quiz.findByIdAndUpdate(id, req.body, { new: true });
      if (!quiz) {
        return res.status(404).json({ message: 'Announcement not found' });
      }
      res.json(quiz);
    } catch (error) {
      console.error('Error creating quiz:', error);
      res.status(500).json({ message: 'Error updating quiz', error });
    }
  };

