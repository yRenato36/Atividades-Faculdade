/* 
⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠟⣵⣷⣶⠭⣝⣛⣛⠿⠿⠿⠿⠿⠿⣛⣛⠫⠉⠄⠄⠈⠻⣿⣿⣿⣿
⣿⣿⠟⣡⣿⣟⢱⣿⣞⣧⣝⢿⣿⣿⣿⣿⣿⠟⠋⣡⡴⡿⠃⠄⠄⠄⠈⠻⣿⣿
⣿⣿⣷⡜⣿⠸⣮⡿⠿⡘⢟⢸⣿⡿⠟⠋⠄⠄⣿⡏⢀⣴⡆⣴⠆⠄⢠⣾⣿⣿
⣿⣿⣿⣿⢸⣷⣕⡶⠼⢔⡽⠟⢉⣤⡾⠃⠄⠄⣿⣧⣾⠟⢁⣤⡆⠄⣾⣿⣿⣿
⣿⣿⣿⠇⣿⣿⣿⡿⠛⠉⢠⣾⣿⣤⡆⢀⣤⠄⠛⠉⠄⠄⣿⣿⡇⠄⠸⣿⣿⣿
⣿⣿⢟⣼⠿⠛⣁⡄⠄⠄⠄⣿⣿⡉⠁⠘⢡⣴⣾⠄⠄⠄⣿⣿⡇⠄⠄⠹⣿⣿
⣿⠋⠊⣡⡶⠛⣛⡁⠄⡀⢠⠿⠋⡁⠄⠄⢸⣿⣿⠄⠄⠄⣿⣿⡇⠄⠄⢰⡝⣿
⡏⠄⠄⣿⠗⠛⣿⡇⠘⠃⠄⣶⣿⡇⠄⠄⢸⣿⣿⠄⠄⠄⣿⣿⡇⠄⠄⢸⣷⢸
⡁⠄⠄⣶⡷⠞⢉⣤⠄⠄⠄⣿⣿⡇⠄⠄⢸⣿⣿⠄⠄⠄⣿⣿⡇⠄⠄⢸⣿⡏
⡇⠄⠄⠉⠄⢸⣿⣿⠄⠄⠄⣿⣿⡇⠄⠄⢸⣿⣿⠄⠄⠄⣿⣿⡇⠄⠄⢸⣿⢸
⣿⣔⠆⠄⠄⢸⣿⣿⠄⠄⠄⣿⣿⡇⠄⠄⢸⣿⣿⠄⠄⠄⣿⣿⡇⠄⠄⠸⢣⣿
⣿⣿⣦⣄⠄⢸⣿⣿⠄⠄⠄⣿⣿⡇⠄⠄⢸⣿⣿⠄⠄⠄⣿⣿⡇⠄⣀⣴⣿⣿
⣿⣿⣿⣿⣿⣶⣶⣯⣤⣤⣤⣛⡻⠇⠄⠄⠸⢟⣛⣤⣤⣤⣽⣶⣶⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿


Crie uma classe chamada Estudante, essa classe deve conter
os atributos: nome, e-mail, RA, curso e uma lista com o nome 
das disciplinas que o estudante está matriculado.
Para testar, crie dois estudantes de exemplo e imprima os
valores na tela. */

class Estudante {
    constructor(nome, email, RA, curso, disciplinas) {
        this.nome = nome,
            this.email = email,
            this.RA = RA,
            this.curso = curso,
            this.disciplinas = disciplinas
    };
}

const aluno01 = new Estudante ("Renato", "meuEmail@gmail.com", "1010101010101", "Analise e Desenvolvimento de Sistemas", ["ingles", "calculo", "estatistica", "sistemas operacionais"]);
const aluno02 = new Estudante ("Paulo", "seuEmail.com", "020202020202", "Comercio exterior", ["gestao", "ingles", "matematica"]);

console.log(aluno01);
console.log(aluno02);
