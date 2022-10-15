const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());



const cors = require('cors');
app.use(cors());

const mysql = require('mysql');
const connection = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "movies_book"
});
connection.connect();



app.get('/', (req, res) => {
   res.send('welcome');
});

app.get('/get_all_theater', (req, res) => {
   const query = `SELECT * FROM theater`;
   connection.query(query, (err, data) => {
      if (err) {
         res.send({
            success: false,
            error: err.sqlMessage,
            data: []
         });
      } else {
         res.send({
            success: true,
            error: '',
            data: data
         });
      }
   });
})

app.post('/add_ticket', (req, res) => {
   const theater_id = req.body.theater_id;
   const screen_id = req.body.screen_id;
   const show_time = req.body.show_time;
   const total_seats = req.body.total_seats;
   const total_amount = req.body.total_amount;

   const query = `INSERT INTO bookings (theater_id,screen_id,show_time,total_seats,total_amount) VALUES ('${theater_id}','${screen_id}','${show_time}','${total_seats}','${total_amount}') `;

   connection.query(query, (err, data) => {
      if (err) {
         res.send({
            success: false,
            error: err.sqlMessage,
            data: []
         });
      } else {
         res.send({
            success: true,
            error: '',
            data: 'student added'
         });
      }
   });
})

app.get('/check_booked_seats/:theater_id',(req,res)=>{
const theater_id=req.params.theater_id;

const query=`SELECT * FROM screen WHERE theater_id=` +theater_id;
connection.query(query,(err,data)=>{
   if(err){
      res.send({
         success:false,
         error:err.sqlMessage,
         data:[]
      });
   }else {
      res.send({
         success:true,
         error:'',
         data:data
      })
   }
})
})


app.get('/get_all_info',(req,res)=>{
   const query=`SELECT * FROM screen`;
   connection.query(query,(err,data)=>{
      if (err){
         res.send({
            success:false,
            error:err.sqlMessage,
            data:[]
         });
      } else {
         res.send({
            success:true,
            error:'',
            data:data
         });
      }
   });
});


app.post('/limit_seats',(req,res)=>{

   const capacity= 10;
   const query=`SELECT SUM (booked_seats) AS totalseats FROM bookings WHERE screen_id= ?`;
   connection.query(query,[screen_id],(err,data)=>{
      console.log(data,err);
      const totalseats=data[0].totalseats;
       const limit= totalseats + booked_seats;

      if(limit > capacity){
         res.send({
            success:false,
            error:err.sqlMessage,
            message:'House Full !',
            data:[]
         });
      }else {
   
         const screen_id=req.body.screen_id;
         const theater_id = req.body.theater_id;
         const show_time = req.body.show_time;
         const total_seats = req.body.total_seats;
         const total_amount = req.body.total_amount;
   const query=`INSERT INTO bookings (theater_id,show_time,total_seats,total_amount,sreen_id) VALUES 
   (?,?,?,?)`;
   connection.query(query,[theater_id,show_time,total_seats,total_amount,screen_id],(err,data)=>{
      if (err){
         res.send({
            success:false,
            error:err.sqlMessage,
            data:[]
         });
      } else {
         res.send({
            success:true,
            error:'',
            data:data
         })
      }
   })

      }


   })
})




app.listen(8888)