/* Crie um código com Node.js para receber 5 valores (ou N valores se quiser utilizar laços)
Calcule a média dos valores recebidos e escreva o resultado na tela

Utilize as bibliotecas prompt-sync e chalk para pedir os valores e para formatar as respostas */

import chalk from "chalk";
import criarPrompt from "prompt-sync";
const prompt = criarPrompt();

let qtdValores = 5, somatoria = 0, media = 0;

console.log(chalk.hex('#f2ff00').bold("Bem-vindo(a) ao Programa de médias\n"));
 
for(let cont = 1; cont <= qtdValores; cont++) {
    // recebe os valores do prompt e já incrementa na variável
    somatoria += Number(prompt(chalk.hex('#0095ff')(`Digite o ${cont}º valor: `))); 
  
}

media = somatoria / qtdValores;
console.log(chalk.bold.underline.hex('#f5bc42')(`\nA SUA MÉDIA É: ${media}`));