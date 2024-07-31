function contar() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('f')
    let pass = document.getElementById('pass')
    //let res = document-getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)

        if (p <= 0) {
            window.alert('Passo inválido! Conderando PASSO 1')
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            
        } else {
            for (let c = i; c >= f; c -=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
}