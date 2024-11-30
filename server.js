const express=require('express');
const dotenv=require('dotenv');

const interviewRouter=require('./routes/InterviewRouter');
const condidateRouter=require('./routes/CondidateRouter');
const recruiterRouter=require('./routes/RecruiterRouter');
dotenv.config();
const {dbConnect}=require('./config/dbConnect');
dbConnect();
const app=express();
app.use(express.json());

app.use('/api/interviews/',interviewRouter);
app.use('/api/condidates/',condidateRouter);
app.use('/api/recruiter/',recruiterRouter);

const PORT = process.env.PORT||3000;
app.listen(PORT,console.log(`server is running on ${PORT}`))