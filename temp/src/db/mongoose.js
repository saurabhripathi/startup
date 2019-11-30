const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27018/newDB',{
    useNewUrlParser:true,useCreateIndex:true})