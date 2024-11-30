const mongoose=require('mongoose');
const Recruiter=require('../models/Recruiter');
const Interview=require('../models/Interview');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const CreateRecruiter=async(req,res)=>{
    try{
        const {name ,email,password}=req.body;
        const passhashed=await bcrypt.hash(password,10);
        const recruiter=await Recruiter.create({name ,email,password});
        
        res.json({
            status:'success',
            data:recruiter,
        })

    }catch(error){
        res.json(error.message);
    }
}
const GetAllRecruiter=async(req,res)=>{
    try{
        const recruiterId=req.params.id;
        const recruiter=await Recruiter.find();
        const assignedIninterviews = await Interview.find({ recruiterId: recruiterId }).select('_id ');
        res.json({
            status:'success',
            recruiter,
            assignedIninterviews
        })

    }catch(error){
        res.json(error.message);
    }
}
const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const recruiter=await Recruiter.findOne({email});
        const passwordvalid=await bcrypt.compare(password,recruiter.password);
        const token=jwt.sign({id:recruiter._id},'votre_secret',{expiresIn:'1h'});
        res.json({
            status:'success',
            token
        })

    }catch(error){
        res.json(error.message);
    }
}
module.exports={CreateRecruiter,login,GetAllRecruiter};
