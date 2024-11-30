const express=require('express');
const {CreateRecruiter,login,GetAllRecruiter}=require('../controllers/RecruiterController');
const recruiterRouter=express.Router();
const authMiddleware=require('../Middelwares/authMiddelwares');

recruiterRouter.post('/',CreateRecruiter);
recruiterRouter.get('/',GetAllRecruiter);
recruiterRouter.post('/login',login);


module.exports=recruiterRouter;