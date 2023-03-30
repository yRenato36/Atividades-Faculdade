const express = require("express"); // chamando o modulo express que foi instalado
const app = express();
app.use(express.json()); // converte a solicitação para um json

// classe pessoa que receberá os dados da pessoa
class Pessoa {
    constructor(nome, idade, email, hobby){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.hobby = hobby;
    }
}

// nomeando a rota e enviando dados do objeto pessoa
app.get("/RotaPessoa",  (request, response) => {
    p1 = new Pessoa("Renato", "Renato@hotmail.com", "22", ["Assistir tv", "Correr"]);
    response.json(p1);
});

// nomeando a rota2 e enviando dados do objeto pessoa
app.get("/Rota2Pessoa", (request,response) => {
    p1 = new Pessoa("Armando", "Armando@hotmail.com", "13", ["Comer", "Festa"]);
    p2 = new Pessoa("Amanda", "lucas@hotmail.com", "16", ["Filmes", "Passear"]);
    p3 = new Pessoa("Ana", "paulo@hotmail.com", "20", ["Animes", "Cachorros"]);
    
    response.json([p1,p2,p3]);
});

// escutando/esperando a chamada da porta 8080
app.listen(8080, () =>{
    console.log("Servidor rodando! - Abra o navegador...");
});
 



