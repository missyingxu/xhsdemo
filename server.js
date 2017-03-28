var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static('./'));


//跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
next();
});

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})

app.get('/getdata',function(req,res){
	
    fs.readFile(__dirname + '/public/data/homehufu2.json',function(err,data){
        if(err){
          console.log(err)
        }else {
          res.json(JSON.parse(data))
        }
    })
})

app.get('/getdata_caiz',function(req,res){
    fs.readFile(__dirname+'/public/data/homehufu3.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            res.json(JSON.parse(data));
        }
    })
})

app.get('/getdata_human',function(req,res){
    fs.readFile(__dirname+'/public/data/human.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            res.json(JSON.parse(data));
        }
    })
})

//穿搭
app.get('/getdata_dress',function(req,res){
    fs.readFile(__dirname+'/public/data/dress.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            res.json(JSON.parse(data));
        }
    })
})

// 包包
app.get('/getdata_baobao',function(req,res){
    fs.readFile(__dirname+'/public/data/baobao.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            res.json(JSON.parse(data));
        }
    })
})

// 鞋子
app.get('/getdata_shoes',function(req,res){
    fs.readFile(__dirname+'/public/data/shoes.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            res.json(JSON.parse(data));
        }
    })
})

// 购物
app.get('/getdata_shop',function(req,res){
    fs.readFile(__dirname+'/public/data/shoplist4.json',function(err,data){
        if(err){
            console.log(err);
        }else{
            res.json(JSON.parse(data));
        }
    })
})


app.listen(5002,function(){
    console.log('服务器启动.....')
})
