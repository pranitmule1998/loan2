const mysql = require("mysql");
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "loan2"
})

connection.connect((error) => {
    if (error) {
        console.log("error in db connection")
    } else {
        console.log("connected to db");
    }
})

app.get("/students", (req, res) => {
    const q = "select * from students";

    connection.query(q, (error, data) => {
        if (error) {
            console.log(error)
                return res.status(500).send("error in data fetching")
            }
            return res.json(data)
        

    })

})



app.post ("/students",(req,res)=>{
     const q = "insert into students (`name`,`lastname`,`date`,`email`,`phone`,`pancard`,`adharcard`,`cibil`,`gender`) values (?,?,?,?,?,?,?,?,?) "

     const values = [
        req.body.name,
        req.body.lastname,
        req.body.date,
        req.body.email,
        req.body.phone,
        req.body.pancard,
        req.body.adharcard,
        req.body.cibil,
        req.body.gender
     ]

     connection.query(q,values, (error, data) => {
        if (error) {
            console.log("error")
                return res.status(500).send("error in data fetching")
            }
            return res.json(data)
        

    })


})


app.get("/students/get/:id", (req, res) => {
    const studentId = req.params.id;
    const q = "select * from students where id =? ";

    connection.query(q,[studentId] ,(error, data) => {
        if (error) {
            console.log(error)
                return res.status(500).send("error in data fetching")
            }
            return res.json(data)
        

    })

})

app.put ("/students/update/:id",(req,res)=>{
    const studentId = req.params.id;
    const q = "update students set `name`=? , `lastname`=? , `date`=?,`email`=?,`phone`=?,`pancard`=?,`adharcard`=?,`cibil`=?,`gender`=? where id=? "

    const values = [
       req.body.name,
       req.body.lastname,
       req.body.date,
       req.body.email,
       req.body.phone,
       req.body.pancard,
       req.body.adharcard,
       req.body.cibil,
       req.body.gender,
       studentId
    ]

    connection.query(q,values, (error, data) => {
       if (error) {
           console.log(error)
               return res.status(500).send("error in data fetching")
           }
           return res.json(data)
       

   })


})

app.delete("/students/delete/:id", (req, res) => {
    const studentId = req.params.id
    const q = "delete  from students where id= ? ";

    connection.query(q,[studentId], (error, data) => {
        if (error) {
            console.log(error)
                return res.status(500).send({error:"error in data fetching"})
            }
            return res.json(data)
        

    })

})


app.get("/oprational", (req, res) => {
    const q = "select * from oprational";

    connection.query(q, (error, data) => {
        if (error) {
            console.log(error)
                return res.status(500).send("error in data fetching")
            }
            return res.json(data)
        

    })

})



app.post ("/oprational",(req,res)=>{
     const q = "insert into oprational (`enquiryid`,`cibilscore`,`status`,`remark`) values (?,?,?,?) "

     const values = [
        req.body.enquiryid,
        req.body.cibilscore,
        req.body.status,
        req.body.remark,
      
     ]

     connection.query(q,values, (error, data) => {
        if (error) {
            console.log("error")
                return res.status(500).send("error in data fetching")
            }
            return res.json(data)
        

    })


})

app.delete("/oprational/cmlistdelete/:id", (req, res) => {
    const cmId = req.params.id
    const q = "delete  from oprational where id= ? ";

    connection.query(q,[cmId], (error, data) => {
        if (error) {
            console.log(error)
                return res.status(500).send({error:"error in data fetching"})
            }
            return res.json(data)
        

    })

})


// CM
app.get("/cm", (req, res) => {
    const q = "select * from cm";

    connection.query(q, (error, data) => {
        if (error) {
            console.log(error)
                return res.status(500).send("error in data fetching")
            }
            return res.json(data)
        

    })

})



app.post ("/cm",(req,res)=>{
     const q = "insert into cm (`id`,`firstname`,`city`,`cast`,`ssc`,`hsc`,`graduation`,`cgpa`,`address`,`loanpurpose`,`nominee`,`loandate`) values (?,?,?,?,?,?,?,?,?,?,?,?) "

     const values = [
        req.body.id,
        req.body.firstname,
        req.body.city,
        req.body.cast,
        req.body.ssc,
        req.body.hsc,
        req.body.graduation,
        req.body.cgpa,
        req.body.address,
        req.body.loanpurpose,
        req.body.nominee,
        req.body.loandate,
     ]

     connection.query(q,values, (error, data) => {
        if (error) {
            console.log("error")
                return res.status(500).send("error in data fetching")
            }
            return res.json(data)
        

    })


})

app.delete("/cm/approdelete/:id", (req, res) => {
    const appId = req.params.id
    const q = "delete  from cm where id= ? ";

    connection.query(q,[appId], (error, data) => {
        if (error) {
            console.log(error)
                return res.status(500).send({error:"error in data fetching"})
            }
            return res.json(data)
        

    })

})


app.listen(8000,()=>{
 console.log("running on port 8000");
})