const mongoose=require('mongoose');
const Interview=require('../models/Interview');

const CreateInterview=async(req,res)=>{
    try{
        const {date,time,recruiterId,condidateId,feedback}=req.body;
        
        const interview=await Interview.create({date,time,recruiterId,condidateId,feedback});
        res.json({
            status:'success',
            data:interview,
        })

    }catch(error){
        res.json(error.message);
    }
}
const UpdateInterview = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const interview = await Interview.findByIdAndUpdate(id, updatedData, { new: true })
            .populate('recruiterId', 'name')
            .populate('condidateId', 'name email');

        if (!interview) {
            return res.status(404).json({ status: 'error', message: 'Interview not found' });
        }

        res.json({
            status: 'success',
            data: interview,
        });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};



const DeleteInterview=async(req,res)=>{
    try{
        const id=req.params.id;
        const interview=await Interview.deleteOne({_id:id});
        res.json({
            status:'success',
            message:"Interview est supprimé",
        })

    }catch(error){
        res.json(error.message);
    }
}


module.exports={CreateInterview,DeleteInterview,UpdateInterview};
