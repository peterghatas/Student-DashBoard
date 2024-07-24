import express from 'express';
import { getAnnouncements, createAnnouncement, deleteAnnouncement, updateAnnouncement } from '../controllers/announcmentCon';

const router = express.Router();

// Correct usage
router.get('/getAnnouncements', getAnnouncements);
router.post('/CreatAnnouncements', createAnnouncement);
router.delete('/DeleteAnnouncements/:id', deleteAnnouncement);
router.put('/UpdateAnnouncements/:id', updateAnnouncement);

export default router;