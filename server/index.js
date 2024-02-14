const express = require("express")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 3001
const mongoose = require("mongoose")
const registerData = require("./data/registerSchema")
const bcrypt = require("bcrypt")

app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Students")

// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.post('/post', (req, res) => {
        const { name, email, password } = req.body
        bcrypt.hash(password, 10)
            .then((hash) => {
                registerData.create({name,email,password:hash})
                    .then(s => { res.status(201).json(s) })
                    .catch(err => {
                        console.log(err)
                        res.status(404).json(err)
                    })
            })
            .catch(err => {
                console.log(err.message)}) 
})

app.post('/login',async(req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const student = await registerData.findOne({email:email})
        if (student) {
            bcrypt.compare(password, student.password, (err, response) => {
                if (err) { res.json("The password is incorrect") }
                if (response) {
                    res.json({success:true,login:"Login success"})
                }
                else {
                    res.json({
                    success: false,
                    login:"Password incorrect"
            })
        }
            })
        }
        else {
            res.json({
                success: false,
                login:"No record existed"
            })
        }
    } catch (err) {
        console.log(err)
    }
})

app.listen(PORT,()=>{console.log("Server is running in port  "+PORT)})