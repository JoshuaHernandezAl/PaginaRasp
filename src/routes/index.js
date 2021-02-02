const express=require('express');
const router= express.Router();
const { exec } = require('child_process');
const fs = require('fs');

router.get('/',(req,res)=>{
    res.render('index.html');
});
router.get('/IoT',(req,res)=>{
    res.render('IoT.html');
});

router.get('/montar',(req,res)=>{
  res.render('montar.html');
});
router.get('/run',(req,res)=>{
    exec('bash /home/pi/Desktop/paginaWebEnServidor/src/views/run.sh', (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          res.write('Command has failed'); //write a response to the client
          res.end(); //end the response
          return;
        }
   
        res.write('Command has been run'); //write a response to the client
        res.end(); //end the response
       });
});
router.get('/end',(req,res)=>{
    exec('bash /home/pi/Desktop/paginaWebEnServidor/src/views/end.sh', (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          res.write('Command has failed'); //write a response to the client
          res.end(); //end the response
          return;
        }
        res.write('Command has been run'); //write a response to the client
        res.end(); //end the response
       });
});
router.get('/lcd',(req,res)=>{
  exec('bash /home/pi/Desktop/paginaWebEnServidor/src/views/lcd.sh', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        res.write('Command has failed'); //write a response to the client
        res.end(); //end the response
        return;
      }
      res.write('Command has been run'); //write a response to the client
      res.end(); //end the response
     });
});
router.get('/lcdOnOff',(req,res)=>{
  exec('bash /home/pi/Desktop/paginaWebEnServidor/src/views/lcdOnOff.sh', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        res.write('Command has failed'); //write a response to the client
        res.end(); //end the response
        return;
      }
      res.write('Command has been run'); //write a response to the client
      res.end(); //end the response
     });
});
router.get('/lcdOff',(req,res)=>{
  exec('bash /home/pi/Desktop/paginaWebEnServidor/src/views/lcdOff.sh', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        res.write('Command has failed'); //write a response to the client
        res.end(); //end the response
        return;
      }
      res.write('Command has been run'); //write a response to the client
      res.end(); //end the response
     });
});
router.get('/tm1638',(req,res)=>{
  exec('bash /home/pi/Desktop/paginaWebEnServidor/src/views/tm1638.sh', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        res.write('Command has failed'); //write a response to the client
        res.end(); //end the response
        return;
      }
      res.write('Command has been run'); //write a response to the client
      res.end(); //end the response
     });
});
router.get('/tm1638Cr',(req,res)=>{
  exec('bash /home/pi/Desktop/paginaWebEnServidor/src/views/tm1638Cr.sh', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        res.write('Command has failed'); //write a response to the client
        res.end(); //end the response
        return;
      }
      res.write('Command has been run'); //write a response to the client
      res.end(); //end the response
     });
});
router.get('/tmOff',(req,res)=>{
  exec('bash /home/pi/Desktop/paginaWebEnServidor/src/views/tmOff.sh', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        res.write('Command has failed'); //write a response to the client
        res.end(); //end the response
        return;
      }
      res.write('Command has been run'); //write a response to the client
      res.end(); //end the response
     });
});
router.get('/rgb',(req,res)=>{
  exec('bash /home/pi/Desktop/paginaWebEnServidor/src/views/RGBOn.sh', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        res.write('Command has failed'); //write a response to the client
        res.end(); //end the response
        return;
      }
      res.write('Command has been run'); //write a response to the client
      res.end(); //end the response
     });
});
router.get('/rgbOff',(req,res)=>{
  exec('bash /home/pi/Desktop/paginaWebEnServidor/src/views/RGBOff.sh', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        res.write('Command has failed'); //write a response to the client
        res.end(); //end the response
        return;
      }
      res.write('Command has been run'); //write a response to the client
      res.end(); //end the response
     });
});
module.exports=router;