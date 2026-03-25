function calcularRankSayajin(vitorias, derrotas) { 
   let saldo = vitorias - derrotas;
   let rank; 
   
   if (saldo < 0) {
      rank = "Bebê Sayajin Classe Baixa";
   } else if (saldo >= 0 && saldo < 5) {
      rank = "Bebê Sayajin Classe Média"; 
   } else if (saldo >= 5 && saldo < 10) {
      rank = "Bebê Sayajin Classe Alta";
   } else if (saldo >= 10 && saldo < 20) {
      rank = "Bebê Sayajin Classe Broly";
   } else if (saldo >= 20 && saldo < 40) {
      rank = "Criança Sayajin Classe Baixa";
   } else if (saldo >= 40 && saldo < 60) {
      rank = "Criança Sayajin Classe Média";
   } else if (saldo >= 60 && saldo < 90) { 
      rank = "Criança Sayajin Classe Alta"; 
   } else if (saldo >= 90 && saldo < 100) {
      rank = "Criança Sayajin Classe Broly";
   } else if (saldo >= 100 && saldo < 120) {
      rank = "Cadete Sayajin Classe Baixa"; 
   } else if (saldo >= 120 && saldo < 135) {
      rank = "Cadete Sayajin Classe Média";
   } else if (saldo >= 135 && saldo < 150) {
      rank = "Cadete Sayajin Classe Alta";
   } else if (saldo >= 150 && saldo < 170) {
      rank = "Guerreiro Sayajin Classe Baixa";
   } else if (saldo >= 170 && saldo < 185) {
      rank = "Guerreiro Sayajin Classe Média";
   } else if (saldo >= 185 && saldo < 200) {
      rank = "Guerreiro Sayajin Classe Alta";
   } else if (saldo >= 200 && saldo < 230) {
      rank = "Guerreiro Sayajin Kaioken";
   } else if (saldo >= 230 && saldo < 250) {
      rank = "Guerreiro Lendário Super Sayajin 1";
   } else if (saldo >= 250 && saldo < 270) { 
      rank = "Guerreiro Lendário Super Sayajin 2";
   } else if (saldo >= 270 && saldo < 300) {
      rank = "Guerreiro Lendário Super Sayajin 3";
   } else if (saldo >= 300 && saldo < 320) { 
      rank = "Guerreiro Oozaru Super Sayajin 4";
   } else if (saldo >= 320 && saldo < 350) {
      rank = "Elite Aura God"; 
   } else if (saldo >= 350 && saldo < 370) {
      rank = "Elite Aura Blue"; 
   } else if (saldo >= 370 && saldo < 385) {
      rank = "Elite Aura Blue Kaioken";
   } else if (saldo >= 385 && saldo < 400) {
      rank = "Elite Aura Blue Completo"; 
   } else if (saldo >= 400 && saldo < 450) {
      rank = "Guardião Aura Angelical 50%"; 
   } else if (saldo >= 450 && saldo < 490) {
      rank = "Destruidor Aura Ego"; 
   } else {
      rank = "Guardião Aura Angelical 100%";
   }
   
   return `Saldo: ${saldo} | Rank: ${rank}`;
}

let resultado = calcularRankSayajin(30, 5);
console.log(resultado);