

const mysql=require('mysql');
// connection of database
let con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'aniket@123',
    database:'LoginData',
});



con.connect((err)=>{
    if (err) throw err;
    console.log('database connected ;');
    var sql = "CREATE TABLE LoginData (id int AUTO_INCREMENT PRIMARY KEY,UserName VARCHAR(255),password varchar(255))";
    con.query(sql, function (err, result) {
        if(err){
            console.log('table already exist ');
        }else{
            console.log("Table created");
        }
    })
})



module.exports=con