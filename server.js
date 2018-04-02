const express = require('express');
const hbs = require('hbs');

var app=express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        pageTitle : 'Home Page',
        currentYear : new Date().getFullYear(),
        welcomeMessage : 'Welcome to my Website',
        
        }
    );
});

app.get('/about',(req,res)=>{
    res.render('about.hbs', {
        pageTitle : 'About Page',
        currentYear : new Date().getFullYear()
    });
});
app.listen(3000);

