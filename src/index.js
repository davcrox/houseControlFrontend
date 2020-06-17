const express = require('express')
const app = express()
const {spawn} = require('child_process')
var cors = require('cors')



app.use(cors())

app.get('/', function (req, res) {

  var dataToSend;

const python = spawn('python3', ['src/python/CreateLocalFile.py', 'Chambre']);
python.stdout.on('data', function (data) {
  console.log('Pipe data from python script ...');
  dataToSend = data.toString();
 });
 python.stderr.on('error', function (error) {
  console.log('Pipe error from python script ...');
  errorToSend = error.toString();
  console.log(errorToSend);
 });
 // in close event we are sure that stream from child process is closed
 python.on('close', (code) => {
 console.log(`child process close all stdio with code ${code}`);
 console.log (dataToSend);
 });
 // send data to browser
dataToSend = dataToSend.trim();
dataToSend = dataToSend.substring(1, dataToSend.length-2);

  res.send(dataToSend)
});

app.get('/getcolor', function (req, res) {

  var dataToSend;

const python = spawn('python3', ['src/python/GetLights.py', 'Chambre']);
python.stdout.on('data', function (data) {
  console.log('Pipe data from python script ...');
  dataToSend = data.toString();

 });
 python.stderr.on('error', function (error) {
  console.log('Pipe error from python script ...');
  errorToSend = error.toString();
  console.log(errorToSend);
 });
 // in close event we are sure that stream from child process is closed
 python.on('close', (code) => {
 console.log(`child process close all stdio with code ${code}`);
 console.log (dataToSend);

 //dataToSend = dataToSend.trim();
 dataToSend = dataToSend.replace(/\s/g, '');
 dataToSend = dataToSend.substring(1, dataToSend.length-1);
 var ArrayData = Array.from(dataToSend.split(',')).map(item => Number(item));
 
 var jsondata = {
   hue:ArrayData[0],
   sat:ArrayData[1],
   bright:ArrayData[2],
   kelvin:ArrayData[3]
 }

   res.send(jsondata)
 });
 // send data to browser



});

app.use(express.json());

app.post('/setColor', function(request, response){
  console.log(request.body);      // your JSON
  console.log(request.body.hue);

  var dataToSend;

  const python = spawn('python3', ['src/python/SetColorLocal.py', 'Chambre', request.body.hue,request.body.sat,request.body.bright,request.body.kelvin, 1500]);
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
  
   });
   python.stderr.on('error', function (error) {
    console.log('Pipe error from python script ...');
    errorToSend = error.toString();
    console.log(errorToSend);
   });
   // in close event we are sure that stream from child process is closed
   python.on('close', (code) => {
   console.log(`child process close all stdio with code ${code}`);


      response.send({error: code});

   });
   // send data to browser


  //response.send(request.body);    // echo the result back
});




app.post('/touractiver', function(request, response){
  console.log(request.body);      // your JSON
  console.log(request.body.secteur);



  //    response.send({error: 0});



  response.send(request.body);    // echo the result back
});
app.post('/tourdesactiver', function(request, response){
  console.log(request.body);      // your JSON
  console.log(request.body.secteur);



  //    response.send({error: 0});



  response.send(request.body);    // echo the result back
});
app.post('/reveilxana', function(request, response){
  console.log(request.body);      // your JSON
  console.log(request.body.xana);



  //    response.send({error: 0});



  response.send(request.body);    // echo the result back
});
app.post('/hijack', function(request, response){
  console.log(request.body);      // your JSON
  console.log(request.body.secteur);



  //    response.send({error: 0});



  response.send(request.body);    // echo the result back
});

app.post('/lyokoconnect', function(request, response){
  console.log(request.body);      // your JSON
  console.log(request.body.user);



  //    response.send({error: 0});



  response.send(request.body);    // echo the result back
});

app.post('/lyokodisconnect', function(request, response){
  console.log(request.body);      // your JSON
  console.log(request.body.user);



  //    response.send({error: 0});



  response.send(request.body);    // echo the result back
});



app.listen(3300, function () {
  console.log('Example app listening on port 3300!')
})