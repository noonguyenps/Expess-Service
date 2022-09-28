const express = require('express')
const SVController = require('../controllers/SinhVienController')
const route = express.Router()

route.get('/',SVController.getListSv)
route.post('/19110472/:id',SVController.addSV)
route.get('/19110472/:id',SVController.getSVById)
route.get('/message/:id',SVController.getInfoSV)
route.get('/message/',SVController.getInfoSV)
module.exports = route