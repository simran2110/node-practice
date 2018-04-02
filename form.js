var express = require('express');
var hbs = require('hbs');
var url = require('url');
var app = express();

app.get('/',(req,res)=>
{
    res.render('home.hbs');
});
app.get('/submit',(req,res)=>
{
    var u = url.parse(req.url,true);
    var n1;
    var n2;
    var output="";
    if(u.query.select == '+')
    {
        output = parseInt(u.query.num1) + parseInt(u.query.num2);
    }   
    else if(u.query.select == '-')
    {
        output = parseInt(u.query.num1) - parseInt(u.query.num2);
    }
    else if(u.query.select == '*')
    {
        output = parseInt(u.query.num1) * parseInt(u.query.num2);
    }
    else if(u.query.select == '/')
    {
        output = parseInt(u.query.num1) / parseInt(u.query.num2);
    }
    else {
        ouput = "";
    }
     if(output ==""|| u.query.num1 =="" || u.query.num2 =="" )
    {
        res.render('home.hbs');       
    }
    else {
        var result;
        
        res.render('result.hbs',
        {
            n1 : u.query.num1,
            n2 : u.query.num2,
            Option : u.query.select,
            result : output
        });
    }
    
})

app.listen(3030 , ()=>
{
    console.log('Response is display on port 3030');
})
