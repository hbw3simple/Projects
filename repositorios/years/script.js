function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value == 0 || fano.value > ano) {

        window.alert('Verifique os Dados e tente Novamente!')

    } else {

        var fsex = document.getElementsByName('radisex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {

            genero = 'Homem'

            if (idade >= 0 && idade <11){

                img.setAttribute('src', 'criancah.jpg')

            }else if(idade < 18){

                img.setAttribute('src', 'adolecenteh.jpg')

            }else if(idade < 50 ){

                img.setAttribute('src', 'adultoh.jpg')

            }else{

                img.setAttribute('src', 'idosoh.jpg')

            }

        }else if (fsex[1].checked){

            genero = 'Mulher'

            if (idade >= 0 && idade <11){

                img.setAttribute('src', 'criancam.jpg')

            }else if(idade < 18){

                img.setAttribute('src','adolecentem.jpg' )

            }else if(idade < 50 ){

                img.setAttribute('src', 'adultom.jpg')

            }else{

                img.setAttribute('src', 'idosom.jpg')

            }

        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos:${genero} com ${idade} anos.`
        res.appendChild(img)

    }

}