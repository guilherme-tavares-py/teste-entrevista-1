import PessoasVacinacao from "./PessoasVacinacao.json" assert {type:"json"};

// LÓGICA DA LISTA

let grupo = []
let grupo_final = []

// prioridade +60
// prioridades: saude, educação, alimenticios, segurança


let c = 0
while (c <= 19) {
    grupo.push(PessoasVacinacao.pessoas[c])
    c += 1
}

grupo.sort((a, b) => {
    if (a.idade < b.idade) {
        return -1;
    }
}).reverse();

for (c = 0; c <= 19; c += 1) {
    if (grupo[c].idade > 60) {
        grupo_final.push(grupo[c])
    }
}
for (c=0;c<=19;c+=1) {
    if (grupo[c].areaDeAtuacao == "Saúde") {
        grupo_final.push(grupo[c]);
    } 
}
for (c=0;c<=19;c+=1) {
    if (grupo[c].areaDeAtuacao == "Educação") {
        grupo_final.push(grupo[c]);
    } 
}
for (c=0;c<=19;c+=1) {
    if (grupo[c].areaDeAtuacao == "Alimentícios") {
        grupo_final.push(grupo[c]);
    } 
}
for (c=0;c<=19;c+=1) {
    if (grupo[c].areaDeAtuacao == "Segurança") {
        grupo_final.push(grupo[c]);
    } 
}
for (c=0;c<=19;c+=1) {
    if (grupo[c].idade <= 60 && grupo[c].areaDeAtuacao != "Saúde" && grupo[c].areaDeAtuacao != "Educação" && grupo[c].areaDeAtuacao != "Alimentícios" && grupo[c].areaDeAtuacao != "Segurança") {
        grupo_final.push(grupo[c]);
    } 
}
console.log(grupo_final)

// EXIBIÇÃO DOS DADOS

let v = 0;
for (let a = 0; a <= 3; a += 1) {
    let h3 = document.createElement('h3');
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    let th1 = tr.appendChild(document.createElement('th'));
    let th2 = tr.appendChild(document.createElement('th'));
    let th3 = tr.appendChild(document.createElement('th'));
    th1.innerHTML = "Nome";
    th2.innerHTML = "Idade";
    th3.innerHTML = "Área de Atuação";
    h3.innerHTML = "Grupo " + (a+1);
    tr.appendChild(th3, th2, th1);
    table.appendChild(tr);
    for (let z = 0; z <= 4; z += 1) {
        tr = document.createElement('tr');
        let td1 = tr.appendChild(document.createElement('td')); 
        let td2 = tr.appendChild(document.createElement('td'));
        let td3 = tr.appendChild(document.createElement('td'));
        td1.innerHTML =  grupo_final[v].nome;
        td2.innerHTML = grupo_final[v].idade;
        td3.innerHTML = grupo_final[v].areaDeAtuacao;
        tr.appendChild(td3, td2, td1);
        v += 1;
        table.appendChild(tr);
    }
    document.getElementById('container').appendChild(h3);
    document.getElementById('container').appendChild(table);
}
