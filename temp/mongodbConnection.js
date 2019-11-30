const mongodb=require("mongodb")
const mongoClient=mongodb.MongoClient

const connectionURL='mongodb://127.0.0.1:27018'


mongoClient.connect(connectionURL,((error,client)=>{
    if(error)
    {
        return console.log("error occured")
    }
    console.log("successfull")
    const db=client.db('newDB')
    // console.log(db.collection('test').findOne())
    db.collection('test').insertOne({bsd:2},(error,result)=>{
        if(result.ok===1)
        {
            console.log("success")
        }
    })

  
}))