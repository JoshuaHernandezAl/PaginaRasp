const express=require('express');
const app=express();
const path=require('path');
const { dirname } = require('path');

//settings
app.set('port',3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
//middleware


//routes
app.use(require('./routes/index'));


//statics files
app.use(express.static(path.join(__dirname,'public')));





//listening server
app.listen(app.get('port'),()=>{
    console.log("Servidor en puerto", app.get('port'));
});