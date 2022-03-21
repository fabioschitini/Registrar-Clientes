var express = require('express');
var Cliente= require('../models/Cliente');
const { body } = require("express-validator");

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(`yeadddd`)
Cliente.find((err,result)=>res.json(result))
});

router.post('/',
body('nome',`Name must not be empty`).trim().escape(),
body('email',`Description must not be empty`).trim().escape(),
body('cpf',`Amount must not be empty`).trim().isInt().escape(),
body('nascimento',`studio must not be empty`).trim().escape(),
body('celular',`studio must not be empty`).trim().escape(),
body('endereco',`studio must not be empty`).trim().escape(),
body('observacao',`studio must not be empty`).trim().escape(),

[function(req, res, next) {
  console.log('req.body')
  console.log(req.body)

  let cliente=new Cliente({
    nome:req.body.nome,
    cpf:req.body.cpf,
    email:req.body.email,
    endereco:req.body.endereco,
    celular:req.body.celular,
    nascimento:req.body.nascimento,
    observacao:req.body.observacao
})

cliente.save(err=>{
  if(err){return next(err)}
  console.log('succeso')

})
 }]);

 router.post('/editar', [
  body('nome',`Name must not be empty`).trim().escape(),
 body('email',`Description must not be empty`).trim().escape(),
 body('cpf',`Amount must not be empty`).trim().isInt().escape(),
 body('nascimento',`studio must not be empty`).trim().escape(),
 body('celular',`studio must not be empty`).trim().escape(),
 body('endereco',`studio must not be empty`).trim().escape(),
 body('observacao',`studio must not be empty`).trim().escape(),

 function(req, res, next) {
   console.log(`editando`)
  let cliente={
    nome:req.body.nome,
    cpf:req.body.cpf,
    email:req.body.email,
    endereco:req.body.endereco,
    celular:req.body.celular,
    nascimento:req.body.nascimento,
    observacao:req.body.observacao
}
  console.log(req.body.id)
  Cliente.findByIdAndUpdate(req.body.id,cliente,err=>{
    if(err){return next(err)}
  console.log('sucesso em editar')
}) }]);

 router.post('/delete', function(req, res, next) {
  console.log('req.body')
  console.log(req.body.id)
  Cliente.findByIdAndDelete(req.body.id,err=>{
    if(err){return next(err)}
  console.log('sucesso')
}) });




module.exports = router;
