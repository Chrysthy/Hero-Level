let nome = prompt("Digite o nome do seu personagem.")
let nivel = prompt("Digite o level do seu personagem.")

if(nivel < 1000){
  console.log("O (A) Herói (Heroína) de nome " + nome + " está no Nível " + nivel + ", na hierarquia: Ferro")
}

else if(nivel <= 2000){
  console.log("O (A) Herói (Heroína) de nome " + nome + " está no Nível " + nivel + ", na hierarquia: Bronze")
}

else if(nivel <= 5000){
  console.log("O (A) Herói (Heroína) de nome " + nome + " está no Nível " + nivel + ", na hierarquia: Prata")
}

else if(nivel <= 7000){
  console.log("O (A) Herói (Heroína) de nome " + nome + " está no Nível " + nivel + ", na hierarquia: Ouro")
}

else if(nivel <= 8000){
  console.log("O (A) Herói (Heroína) de nome " + nome + " está no Nível " + nivel + ", na hierarquia: Platina")
}

else if(nivel <= 9000){
  console.log("O (A) Herói (Heroína) de nome " + nome + " está no Nível " + nivel + ", na hierarquia: Ascendente")
}

else if (nivel <= 10000) {
  console.log("O (A) Herói (Heroína) de nome " + nome + " está no Nível " + nivel + ", na hierarquia: Imortal")
}

else {
  alert("O (A) Herói (Heroína) de nome " + nome + " está no Nível " + nivel + ", na hierarquia: Radiante")
}