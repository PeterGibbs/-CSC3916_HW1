var express=require('express')
var http=require('http')
var bodyParser=require('body-parser')
var app=express();
var port = process.env.PORT || 8080;
app.use(bodyParser.text({
    type: function(req){
        return 'text';
    }
}));
app.get('/get',function(req,res){
    console.log(req.body);
    res=res.status(200)
    if(req.get('Content-Type')){
        console.log("Content-Type: "+req.get('Content-Type'))
        res=res.type(req.get('Content-Type'));
    }
    res.send(req.body)
});
app.post('/post',function(req,res){
    console.log(req.body);
    res=res.status(200)
    if(req.get('Content-Type')){
        console.log("Content-Type: "+req.get('Content-Type'))
        res=res.type(req.get('Content-Type'));
    }
    res.send(req.body)
});

http.createServer(app).listen(port,()=>{
    console.log("App is running on port " +port);
});
console.log("starting")