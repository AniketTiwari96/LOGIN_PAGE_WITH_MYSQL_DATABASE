const express = require('express');
const app = express();

const body = require('body-parser')
app.use(body.json())

const connection = require('./db/connetion')

app.use('/css',express.static('css'))


app.use(body.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
// app.post('/',(req,res)=>{
//     console.log(req.body);
// })

app.post('/', (req, res) => {
    const data={
        UserName:req.body.name,
        password:req.body.psw
        
    }
    const query = 'insert into LoginData set ?';
    connection.query(query,data,(err,data)=>{
        if(err){
            console.log(err);
            res.send({messege:err});
        }
        console.log(data);
        res.json({data:'data inserte successfully......'})
    })
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

// this is most important things
// note => database data insert karne ke liye hame brawser par (http://localhost:3000/) type karna padega phir hamara login page open hoga or waha se data insert hoga
