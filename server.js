const express=require('express');
const app=express();
const path=require('path');
const router=require('./routes/router');
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');
app.use('/', router);

app.listen(3000,()=> console.log('MYsocial running on 3000...'));