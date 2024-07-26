
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var sec = data.getSeconds()
    var minu = data.getMinutes()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora}h:${minu}min.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = `dia.png`
        document.body.style.background = `#F5C763`
    } else if (hora <= 18) {
        //Boa tarde
        img.src = `tarde01.png`
        document.body.style.background = `#DF9E7A`
    } else {
        //Boa note
        img.src = `noite01.png`
        document.body.style.background = `#2F302B`
    }

}

