import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { courseRoutes } from './routes/courseRoutes';
import { teacherRoutes } from './routes/teacherRoutes';
import { ErrorResponse } from './utils/ErrorResponse';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/courses', courseRoutes);
app.use('/teachers', teacherRoutes);

app.use((req, res) => {
  res.status(404);
  res.send(new ErrorResponse('No endpoint found.'));
});

app.listen(process.env.PORT || 3000);