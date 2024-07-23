import express, { response } from "express"
import cors from "cors"
import { connectDb } from "./configs/db.js";
import foodRouter from "./routes/foodRoute.js";

//app config

const app = express()
const port = 4000;

//middleware 

app.use(express.json())
app.use(cors())

//db connection

connectDb();

//api endpoint

app.use('/api/food',foodRouter)
 

app.get("/",(request,response)=>{
    response.send("API IS WORKING")
})

app.listen(port,()=>[
    console.log(`server started on http://localhost:4000/`)
])

//mongodb+srv://abhinm:abhin123@cluster0.q32dmdd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0