const mongoose=require('mongoose')
const validator=require('validator')

const Customer=mongoose.model('Customer',{
    // email:{
    //     type:String,
    //     required:true,
    //     validate(value)
    //     {
    //      if(!validator.isEmail(value))
    //      {
    //        throw new Error('Email is invalid')
    //      }
    //     }
    // },
    phoneNumber:{
        type:Number,
        required:true

    }
})

module.exports=Customer