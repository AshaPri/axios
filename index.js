const axios=require('axios');
const express=require('express');
const app=express();

const PORT=5000;

app.listen(PORT,()=>{
    console.log(`Running this in the port ${PORT}`);
});

app.get('/',(req,res)=>{
res.send("Hello Hi All");
});

axios.get("https://reqres.in/api/users?page=2").then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
});

axios.post("https://reqres.in/api/users",
{
   "Name":"Asha",
   "Job":"Developer"
})
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
});