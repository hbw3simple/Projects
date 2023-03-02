function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if (hora >= 5 && hora < 12) {

        //bom dia
        img.src = 'manha.jpg'
        msg.innerHTML = `Agora são ${hora} Horas. <br>Bom dia!`
        document.body.style.background = '#7799A6'

    } else if (hora >= 12 && hora < 18) {

        //boa tarde
        img.src = 'tarde.jpg'
        msg.innerHTML = `Agora são ${hora} Horas. <br>Boa Tarde!`
        document.body.style.background = '#b9846f'

    } else if (hora >= 18 && hora < 23) {

        //boa noite
        img.src = 'noite.jpg'
        msg.innerHTML = `Agora são ${hora} Horas. <br>Boa Noite!`
        document.body.style.background = '#202426'

    }else{

        ///boa madrugada
        img.src = 'madrugada.jpg'
        msg.innerHTML = `Agora são ${hora} Horas. <br>Boa Madrugada!`
        document.body.style.background = '#011126'

    }

}