const express=require('express');
const {CreateInterview,DeleteInterview,UpdateInterview}=require('../controllers/InterviewController');
const interviewRouter=express.Router();


interviewRouter.post('/',CreateInterview);
interviewRouter.delete('/:id',DeleteInterview);
interviewRouter.put('/:id',UpdateInterview);

module.exports=interviewRouter;