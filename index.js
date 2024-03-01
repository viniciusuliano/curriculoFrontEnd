let botaoMudarCor = document.getElementById('bt1')
let mudaCor = document.getElementsByTagName('body')[0]
let headerColor = document.getElementsByTagName('header')[0]
let footerColor = document.getElementsByTagName('footer')[0]
let pColor = document.getElementsByTagName('p')[0]
botaoMudarCor.addEventListener('click', ()=>{
    if(botaoMudarCor.checked){
        mudaCor.style.backgroundColor='black'
        headerColor.style.backgroundColor = '#162643'
        footerColor.style.backgroundColor = '#162643'
        pColor.style.color = '#f3f3f3'

    }else{
        mudaCor.style.backgroundColor='#c8e8e8'
        headerColor.style.backgroundColor = '#f3f3f3'
        footerColor.style.backgroundColor = '#f3f3f3'
        pColor.style.backgroundColor = '82a2fb'
        pColor.style.color = 'black'
    }
})