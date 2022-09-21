const askChess = "Rei"

switch (askChess.toLowerCase()){
    case "peão":
        console.log("move-se sempre para frente, uma casa por vez, podendo em cada primeira jogada de cada peão escolher mover uma ou duas casas")
        break
    case "torre":
        console.log("A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça")
        break
    case "cavalo":
        console.log("o movimento o cavalo é sempre em L (letra ele), ou seja, duas casas num sentido (vertical ou horizontal) e uma casa no outro sentido (horizontal ou vertical).")
        break
    case "bispo":
        console.log("O bispo pode mover-se por qualquer número de casas, mas somente nas diagonais e até que outra peça esteja no caminho. Se essa peça for uma peça do oponente, o bispo pode removê-la e captura-la.")
        break
    case "rainha":
        console.log("Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. A rainha se move como a torre e o bispo combinados.")
        break
    case "rei":
        console.log("O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente.")
        break
    default:
        console.log("insira o nome correto da peça")
}