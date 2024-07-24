import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import Quiz from './models/quiz';
import Announcement from './models/announcement';
import routerQuiz from './routes/quizRouter';
import routerAnnouncment from './routes/announcmentRouter';
import routerUser from './routes/UserRouter';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from "cookie-parser";

const url = "mongodb+srv://peter1ghatas:admin@anywaretest.e2puqoo.mongodb.net/"
const app: Express = express();
const port = process.env.PORT || 8000;







async function connect()
{
    try
    {
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    }
    catch(error)
    {
        console.error(error);
    }
}

connect();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from TypeScript Express!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({limit:'20mb'}));

app.use("/", routerQuiz);
app.use("/", routerAnnouncment); 
app.use("/", routerUser);
