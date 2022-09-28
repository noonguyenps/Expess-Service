const express = require('express')
var path = require('path');
const app = express();
const SVRoute = require("./routes/SinhVienRoutes")
app.use((req,res,next)=>{
    res.locals.path = req.path
    next();
})
app.set('view engine', 'ejs')
app.use(
    express.urlencoded({
      extended: true,
    })
  );
app.use(express.json());
app.use('/',SVRoute)
app.listen(5000,()=>{
    console.log("Listen port 5000")
})
app.use((req, res) => {
    res.status(404).render('404');
  });