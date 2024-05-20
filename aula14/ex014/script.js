function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Número informado incorreto!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "homem"
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'bebe-h.jpg')
            } else if (idade >=10 && idade < 21) {
                img.setAttribute('src', 'jovem-h.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-h.jpg')
            } else {
                img.setAttribute('src', 'idoso-h.jpg')
            }
        } else if (fsex[1].checked) {
            genero = "mulher"
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade >=10 && idade < 21) {
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                img.setAttribute('src', 'idoso-m.jpg')
            }
        }
        res.style.textAllign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}