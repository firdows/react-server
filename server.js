const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send('Root Page');
})

app.get('/member',(req,res)=>{
    res.send('Member Page');
})

app.get('/order',(req,res)=>{
    res.send('Order Page');
})


app.listen(8000, () => {
    console.log('ready on http://localhost:8000')
})