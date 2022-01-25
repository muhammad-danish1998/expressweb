const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const portNum = process.env.PORT || 9000;

const staticPath = path.join(__dirname,'../public')
const template_path = path.join(__dirname,'../templates/views');
const partials_path = path.join(__dirname,'../templates/partials');

hbs.registerPartials(partials_path)
app.set('views',template_path)
app.set('view engine','hbs')
app.use(express.static(staticPath));

//routing 
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/weather',(req,res)=>{
    res.render('weather')
})
app.get('*',(req,res)=>{
    res.render('error',{
        buttonVal : 'Back To Home',
    })
})
//listing
app.listen(portNum,()=>{
    console.log(`Application is runing at port ${portNum}`);
})