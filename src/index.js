// inicio do projeto da DIO//

let nomeHeroi = "Lord Palladins"
let xp = 0

// o código abaixo foi criado para indicar em qual nível o herói está começando, assim se repetindo a cada nível alcançado //
console.log("O Héroi de nome " + nomeHeroi + " está no nível de Ferro")

for(let ferro = 1; ferro <= 1000; ferro++){
    xp += 1
    console.log("Seu héroi está com " + ferro + " de XP")
}

// abaixo criei meio que uma repetição para indicar que após o héroi obter 1001 de xp ele alcança o nível de bronze //
for(let bronze = 1001; bronze <= 1001; bronze++){
    xp += 1
    console.log("Seu héroi está com " + bronze + " de XP")
}

console.log("O Héroi de nome " + nomeHeroi + " está no nível de Bronze")

// em seguida todo o siclo se repete, até chegar no nível máximo //
for(let bronze = 1002; bronze <= 2000; bronze++){
    xp += 1
    console.log("Seu héroi está com " + bronze + " de XP")
}

for(let prata = 2001; prata <= 2001; prata++){
    xp += 1
    console.log("Seu héroi está com " + prata + " de XP")
}

console.log("O Héroi de nome " + nomeHeroi + " está no nível de Prata")

for(let prata = 2002; prata <= 6000; prata++){
    xp += 1
    console.log("Seu héroi está com " + prata + " de XP")
}

for(let ouro = 6001; ouro <= 6001; ouro++){
    xp += 1
    console.log("Seu héroi está com " + ouro + " de XP")
}

console.log("O Héroi de nome " + nomeHeroi + " está no nível de Ouro")

for(let ouro = 6002; ouro <= 7000; ouro++){
    xp += 1
    console.log("Seu héroi está com " + ouro + " de XP")
}

for(let platina = 7001; platina <= 7001; platina++){
    xp += 1
    console.log("Seu héroi está com " + platina + " de XP")
}

console.log("O Héroi de nome " + nomeHeroi + " está no nível de Platina")

for(let platina = 7002; platina <= 8000; platina++){
    xp += 1
    console.log("Seu héroi está com " + platina + " de XP")
}

for(let ascendente = 8001; ascendente <= 8001; ascendente++){
    xp += 1
    console.log("Seu héroi está com " + ascendente + " de XP")
}

console.log("O Héroi de nome " + nomeHeroi + " está no nível de Ascendente")

for(let ascendente = 8002; ascendente <= 9000; ascendente++){
    xp += 1
    console.log("Seu héroi está com " + ascendente + " de XP")
}

for(let imortal = 9001; imortal <= 9001; imortal++){
    xp += 1
    console.log("Seu héroi está com " + imortal + " de XP")
}

console.log("O Héroi de nome " + nomeHeroi + " está no nível de Imortal")

for(let imortal = 9002; imortal <= 10000; imortal++){
    xp += 1
    console.log("Seu héroi está com " + imortal + " de XP")
}

for(let radiante = 10001; radiante <= 10001; radiante++){
    xp += 1
    console.log("Seu héroi está com " + radiante + " de XP")
}

console.log("O Héroi de nome " + nomeHeroi + " está no nível de Radiante")

for(let radiante = 10001; radiante >= 10001; radiante++){
    xp += 1
    console.log("Seu héroi está com " + radiante + " de XP")
}