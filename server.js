const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8045;
const corsOptions = {
    origin: "*", // Your front-end URL
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
};
app.use(cors(corsOptions));
app.use(express.json());
app.get('/',(req,res) =>{
    res.send("Welcome to the DSA server! 🚀")
})
app.get("/info",(req,res) =>{
    res.json({
        status: true,
        message:"json server run successfull!",
        server:express
    })
})
app.get("/array",(req,res)=>{
    const arr= [1,2,3,4,5,6];
    const reveresArr = arr.reverse();
    res.json({
        status:true,
        array: `Originally array ${[1,2,3,4,5,6]} <br> array :${reveresArr}`
    })
})
// Handle 404 (Not Found) for any undefined routes

app.use((req,res)=>{
res.status("oops ! Route not found.")
})
app.listen(PORT ,() => {
    console.log(`Server running on port ${PORT}. Access it at http://localhost:${PORT}`);
})



