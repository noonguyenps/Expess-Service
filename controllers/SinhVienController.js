const mygroup = require("../models/SinhVien")
const arrayGourp = mygroup.mygroup
const getListSv = (req,res)=>{
    console.log(req.method,req.url)
    res.statusCode = 200
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify(arrayGourp))
}
const getSVById = (req,res)=>{
    console.log(req.method,req.url)
    res.statusCode = 200
    res.setHeader('Content-Type','application/json')
    const SVId = arrayGourp.find(item=>item.id==req.params.id)
    if(SVId){
        res.end(JSON.stringify(SVId))
    }else{
        res.write('<html><body>Not valid</body></html>');
        res.end()
    }
}
const addSV = (req,res)=>{
    console.log(req.method,req.url)
    const newSV = new mygroup.contrustor(req.body.id,req.body.name)
    const checkExistSV = arrayGourp.find(item=>item.id==newSV.id)
    if(newSV.id == req.params.id && (newSV.id == 19110472 || newSV.id == 19110423 || newSV.id == 19110436)){    
        if(checkExistSV){
            res.write('<html><body>Not valid</body></html>');
            res.end()
        }else{
            mygroup.mygroup.push(newSV)
            res.end()
        }       
    }else{
        res.write('<html><body>Not valid</body></html>');
            res.end()
    }
}
const getInfoSV = (req,res)=>{
    console.log(req.method,req.url)
    const id = req.params.id
    if(id){
        const infoSV = arrayGourp.filter(item=>item.id==id)
        if(infoSV.length>0){
            res.render('info', {
                mygroup: infoSV
            })
        }else{
            res.write('<html><body>Not valid</body></html>');
            res.end()
        }
    }else{
        const infoSV = arrayGourp
        if(infoSV.length!==0){  
            res.render('info', {
                mygroup: infoSV
            })
        }else{
            res.write('<html><body>Not valid</body></html>');
            res.end()
        }
    }
}

module.exports = {
    getListSv,
    addSV,
    getInfoSV,
    getSVById
}