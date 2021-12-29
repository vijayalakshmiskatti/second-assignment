var express = require('express');
var app = express();
const path = require('path');

app.get('/student.html', function(req, res)
        { res.sendFile(__dirname + '/'+'student.html');
	});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db)
{ if(!err)
  { 
  	var server =  app.listen(3005, function()
  	{
 		var port = server.address().port;
 		console.log('student app listening on port 3005! go to http://localhost:%s',port);
  	});
    app.get('/',function(req,res)
    { console.log('Welcome');
      res.send("We are Connected");
 
   });
 
     
   app.get('/student.html', function(req, res)
         { res.sendFile(__dirname + '/'+'student.html');
   });
   
   app.get('/stud_get', function(req, res)
   {	
     
     var dbo = db.db("mydb");
       dbo.createCollection("student", function(err, res) {
         if (err) throw err;
         console.log("Collection created!");
     });
     
     var myobj= {FirstName:req.query.firstname,Middlename:req.query.middlename,Lastname:req.query.lastname,Course:req.query.list,Gender:req.query.gender,countrycode:req.query.countrycode,Phone:req.query.phone,Email:req.query.email,Password:req.query.psw,Repeatpwd:req.query.pswr};
 

  //var dbo = db.db("mydb");
  //var myobj = { firstname: "Anand Kumar", middlename: "Bangalore" , age: "28", branch: "MCA" };
  dbo.collection("student").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  })
  res.send('<p>FirstName:'+req.query.firstname+'</p><p>Middlename:'+req.query.middlename+'</p><p>Lastname:'+req.query.lastname+'</p><p>Course:'+req.query.list+'</p><p>Gender:'+req.query.gender+'</p><p>countrycode:'+req.query.countrycode+'</p><p>Phone:'+req.query.phone+'</p><p>Email:'+req.query.email+'</p><p>Password:'+req.query.psw+'</p><p>Repeatpassword:'+req.query.pswr);
 
});
}

else
  db.close

});
