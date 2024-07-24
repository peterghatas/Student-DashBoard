import express, { Express, Request, Response } from 'express';
import Announcement from '../models/announcement';
// const { Announcement, Quiz } = require('./models/announcement.ts');



export const getAnnouncements = async (req :Request, res:Response) => {
    try {
      const announcements = await Announcement.find();
      res.json(announcements);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving announcements', error });
    }
  };


  // export const createAnnouncement = async (req :Request, res:Response) => {
  //   try {
  //     const announcement = new Announcement(
  //       {
  //         doctor: req.body.doctor,
  //         event: req.body.event,
  //         discussion: req.body.discussion,
  //     }
  //     );

  //    await announcement.save();

  //     res.status(201).json(announcement);
  //   } catch (error) {
  //     console.error('Error creating announcement:', error);
  //     res.status(500).json({ message: 'Error creating announcement', error });
  //   }
  // };

  export const createAnnouncement = async (req :Request, res:Response) => {
    try {
      const announcement = new Announcement(req.body);
      await announcement.save();
      res.status(201).json(announcement);
    } catch (error) {
      res.status(500).json({ message: 'Error creating announcement', error });
    }
  };


 export const deleteAnnouncement = async (req :Request, res:Response) => {
    try {
      const { id } = req.params;
      const announcement = await Announcement.findByIdAndDelete(id);
      
      if (!announcement) {
        return res.status(404).json({ message: 'Announcement not found' });
      }
      res.status(204).send();
    } catch (error) {
      console.error('Error creating announcement:', error);
      res.status(500).json({ message: 'Error deleting announcement', error });
    }
  };

 export const updateAnnouncement = async (req :Request, res:Response) => {
    try {
      const { id } = req.params;
      const announcement = await Announcement.findByIdAndUpdate(id, req.body, { new: true });
      if (!announcement) {
        return res.status(404).json({ message: 'Announcement not found' });
      }
      res.json(announcement);
    } catch (error) {
      console.error('Error creating announcement:', error);
      res.status(500).json({ message: 'Error updating announcement', error });
    }
  };



  // export default  {getAnnouncements ,createAnnouncement };