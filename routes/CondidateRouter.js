const express=require('express');
const {CreateCondidate,DeleteCondidate,GetAllCondidate}=require('../controllers/CondidatController');
const CondidateRouter=express.Router();


CondidateRouter.post('/',CreateCondidate);
CondidateRouter.delete('/:id',DeleteCondidate);
CondidateRouter.get('/',GetAllCondidate);

module.exports=CondidateRouter;