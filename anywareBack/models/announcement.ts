import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
    doctor: 
    {
        type: String,
        required: true
    },
    event: 
    {
        type: String
    },
    discussion:
    {
        type: String
    }
});

export default mongoose.model('Announcement', announcementSchema);
