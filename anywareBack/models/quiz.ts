import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    title: 
    {
        type: String,
        required: true
    },
    course: 
    {
        type: String
    },
    topic:
    {
        type: String
    },
    date:
    {
        type: Date,
        
    }
});

export default mongoose.model('Quiz', quizSchema);
