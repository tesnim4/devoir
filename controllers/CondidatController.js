const mongoose=require('mongoose');
const Condidate=require('../models/Condidates');
const Inetrview=require('../models/Interview');

const CreateCondidate=async(req,res)=>{
    try{
        const {name,email,status}=req.body;
        
        const condidate=await Condidate.create({name,email,status});
        res.json({
            status:'success',
            data:condidate,
        })

    }catch(error){
        res.json(error.message);
    }
}
const GetAllCondidate=async(req,res)=>{
    try{
        const condidateId=req.params.id;
        const condidate=await Condidate.find();
        const interviewHistory = await Inetrview.find({ condidateId: condidateId }).select('_id ');
        res.json({
            status:'success',
            condidate,
            interviewHistory
        })

    }catch(error){
        res.json(error.message);
    }
}




const DeleteCondidate=async(req,res)=>{
    try{
        const id=req.params.id;
        const condidate=await Condidate.deleteOne({_id:id});
        res.json({
            status:'success',
            message:"Condidate est supprimé",
        })

    }catch(error){
        res.json(error.message);
    }
}


module.exports={CreateCondidate,DeleteCondidate,GetAllCondidate};
