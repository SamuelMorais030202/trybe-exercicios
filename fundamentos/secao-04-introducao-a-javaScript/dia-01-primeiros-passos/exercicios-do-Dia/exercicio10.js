const costOfaProduct = 80;  //custo do produto
const saleValue = 150;   //valor de venda
let profit = null;   //lucro

if(costOfaProduct < 0 || saleValue < 0){
    console.log("Erro, dados inválidos")
} else {
    profit = saleValue - (costOfaProduct * 1.20)
    console.log(`O lúcro do produto foi de ${profit} reais`)
}

