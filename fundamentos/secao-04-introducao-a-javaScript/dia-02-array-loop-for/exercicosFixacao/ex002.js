let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for/of
for(let name of names){
    console.log(name)
}

console.log("*")

// for/in
for(let nome in names){
    console.log(names[nome])
}

console.log("*")

for(let contador = 0; contador < names.length; contador += 1){
    console.log(names[contador])
}