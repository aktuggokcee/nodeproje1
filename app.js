const express = require('express');
const app = express();
//register 

app.set('view engine ', 'ejs' );
// app.set('views', 'myviews');
//listen for request

app.listen(8080);
app.get('/',(req,res) =>
{
    res.render('index');
    //res.send('<p>home page </p>');
    //res.sendFile('./views/index.html',{root :__dirname });
});

app.get('/about',(req,res) =>
{
    res.render('about');
    //res.send('<p>about page </p>');
    //res.sendFile('./views/about.html', {root : __dirname});

});
app.get('/about-us' ,(req,res)=>
{
    res.redirect('/about');
 });
 
app.use((req,res)=>
{
    res.status(404).sendFile('./views/404.html',{root : __dirname});
});

