const express = require("express")
const mongoose = require("mongoose")
const Product = require("./Models/productModel")
const app = express()
const cors = require("cors")
const employeeModel = require("./Models/employee")
const companyModel = require("./Models/company")


app.use(express.json())
app.use(cors())
app.use(express.urlencoded( { extended: false } ))

const PORT = process.env.PORT || 3000

//routes


app.post('/register', (req, res) => {
    employeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.post('/company-register', (req, res) => {
    companyModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    employeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("Password incorrect")
            }
        }else{
            res.json("No  user found");
        }
    })
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})



//update a product
// app.put('/products/:id', async( req, res) => {
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if(!product){
//             res.status(404).json({message: `cannot find any product ID ${id}`});
//         }
//         const updateProdcut = await Product.findById(id);
//         res.status(200).json(updateProdcut);

//     }catch(error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message});
//     }
// })

// //delete a product
// app.delete('/products/:id', async( req, res) => {
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if(!product){
//             res.status(404).json({message: `cannot find any product ID ${id}`});
//         }
//         res.status(200).json(prodcut);

//     }catch(error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message});
//     }
// })


mongoose.set("strictQuery", false)
mongoose.connect("mongodb+srv://careerpulse-69:careerpulse69@cluster0.63umrql.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("connected to mongoDB")
    app.listen(PORT, ()=>{
        console.log(`App is running on port ${PORT}`)
    })
    

}).catch((error) => {
    console.log(`connection error: ${error}`)
})