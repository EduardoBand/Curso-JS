var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem) {
    case 0:
        console.log("Hoje é domingo! Ainda dá para descansar um pouco Zzz")
        break
    case 1: 
        console.log("Hoje é segunda! Bora trabalhar")
        break
    case 2:
        console.log("Hoje é terça!")
        break
    case 3:
        console.log("Hoje é quarta! Estamos na metade da semana")
        break
    case 4:
        console.log("Hoje é quinta! Quase sextouuu")
        break
    case 5:
        console.log("Sextouuuu, meus amigos!")
        break
    case 6:
        console.log("Hoje é sábado! Bora curtir o dia :)")
        break
    default:
        console.log("[ERRO] Que diacho de dia é esse, tá certo não")
        break
}