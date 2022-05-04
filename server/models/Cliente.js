const mongoose=require(`mongoose`)
const Schema=mongoose.Schema

const ClienteSchema=new Schema({
    nome:{type:String,required:true},
    cpf:{type:String,required:true},
    email:{type:String,required:true},
    endereco:{type:String,required:true},
    celular :{type:String,required:true},
    nascimento:{type:String,required:true},
    observacao:{type:String,required:false}
})

module.exports=mongoose.model(`Cliente`,ClienteSchema);