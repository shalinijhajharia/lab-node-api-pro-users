const mongoose=require('mongoose');
var userSchema=new mongoose.Schema({
    name:{type:String,lowercase:true},
    email:{type:String,unique:true},
    age:{type:Number},
    prograd_id:{type:Number,unique:true},
    squad:{type:Number,required:true},
   

   
},
{
    collection:'dataList'
}
)
module.exports=mongoose.model('userModel',userSchema)