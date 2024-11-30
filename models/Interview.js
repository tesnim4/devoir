const mongoose=require('mongoose');

const interviewSchema = new mongoose.Schema({
    date: { 
    type: String,
     required: true 
},
    time: {
         type: String, 
         required: true
     },
    recruiterId: 
    {  
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Recruiter', 
},
    condidateId: { type: mongoose.Schema.Types.ObjectId,
         ref: 'Condidate', 
     },
    feedback: [{ type: String }],
  },{
    timestamps: true,
});
  
  const Interview = mongoose.model('Interview', interviewSchema);

  module.exports = Interview;