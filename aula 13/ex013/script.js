
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >=0 && hora <6) {
        img.src = 'madrugada.jpg'
        document.body.style.background = '#515154'
        msg.innerHTML = `Boa madrugada, agora são ${hora} horas.`
    } else if (hora >= 6 && hora <12) {
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Bom dia, agora são ${hora} horas.`
    } else if (hora >=12 && hora <18) {
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Boa tarde, agora são ${hora} horas.`
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
        msg.innerHTML = `Boa noite, agora são ${hora} horas.`
    }
}