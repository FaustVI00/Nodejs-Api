
const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/todoapp',(err,db)=>{
    if(err){
        return console.log("Something went wrong with connection to MongoDB server :(");
    }
    console.log("Connected successfully to MongoDB server :)");
    db.collection('Todos').find({completed:true}).toArray().then((docs,err)=>{
       if(err){
           return console.log("Cannot fetch data ",err);
       }
       console.log('Todos'); 
       console.log(JSON.stringify(docs,undefined,2));
    })    
    //db.close();
});
