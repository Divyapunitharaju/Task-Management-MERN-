const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const TaskSchema=new Schema(
    {
        title:{
            type:String,
            require:true
        },
        desc:{
            type:String,
            
        }
    },
    {
        timestamps:true
    }

)

module.exports=mongoose.model("tasks",TaskSchema)