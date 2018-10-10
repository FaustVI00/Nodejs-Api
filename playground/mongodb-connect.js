const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/todoapp',(err,db)=>{
    if(err){
        return console.log("Something went wrong with connection to MongoDB server :(");
    }
    console.log("Connected successfully to MongoDB server :)");
    
    db.close();
});