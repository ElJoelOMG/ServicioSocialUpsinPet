const http=require("http");
const express=require("express");
const bodyparser = require("body-parser");

const app=express();
app.set("view engine","ejs")
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended:true}));

let datos = [{
    matricula:"2020030720",
    nombre:"Peinado Avila Jesus Alejandro",
    sexo:"M",
    materias:["Ingles","Base de datos","Tecnologia I"]
},{
    matricula:"2020030667",
    nombre:"Romero Sandoval Victor Donnovan",
    sexo:"M",
    materias:["Ingles","Base de datos","Tecnologia I"]
},{
    matricula:"2020030007",
    nombre:"Almogabar Vazquez Yarlen Almogabar",
    sexo:"F",
    materias:["Ingles","Base de datos","Tecnologia I"]
},{
    matricula:"2020030310",
    nombre:"Acosta Varela Irving Guadalupe",
    sexo:"M",
    materias:["Ingles","Base de datos","Tecnologia I"]
}]

app.get("/",(req,res)=>{
   
    res.render("index",{titulo:"Mi Primer Pagina En Embedded JavaScrip EJS",
    nombre:"Jesus Alejandro Peinado Avila",grupo:"8-3 siempre poderoso",listado:datos})
})

app.get('/tabla',(req,res)=>{
    const params = {
        numero:req.query.numero

    }
    res.render('tabla', params);
})

app.post('/tabla',(req,res)=>{
    const params ={
        numero:req.body.numero
    }
    res.render('tabla', params);
})

app.get('/cotizacion',(req,res)=>{
    const params = {
        valor:req.query.valor,
        pinicial:req.query.pinicial,
        plazo:req.query.plazo

    }
    res.render('cotizacion', params);
})

app.post('/cotizacion',(req,res)=>{
    const params ={
        valor:req.body.valor,
        pinicial:req.body.pinicial,
        plazo:req.body.plazo
    }
    res.render('cotizacion', params);
})

//La pagina de error va al final de los gets o posts 
app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + '/public/error.html');
})

const puerto=4000;

app.listen(puerto,()=>{
    console.log("Iniciando puerto");
});