
function verify(){

var data= new Date()
var ano = data.getFullYear()
var ageElement = document.getElementById('ageElement')
var res= document.getElementById('res')

if(ageElement.value == 0 || Number(ageElement.value) > ano){
alert('ERRO, verifique seus dados e tente novamente!')
} else {
    var inputSexElement= document.getElementsByName('buttonradio')
var idade = ano - Number(ageElement.value)
var img= document.createElement('img')
img.setAttribute('id', 'foto')
var genero = ''
if (inputSexElement[0].checked){
    genero = "Homem"
if(idade >=0 && idade<10){
img.setAttribute('src','foto-bebe-m.png')
}else if(idade<21){
    //jovem
    img.setAttribute('src','foto-jovem-m.png')
}else if(idade <51){
    //adulto
    img.setAttribute('src','foto-adulto-m.png')
}
else{
    //idoso
    img.setAttribute('src','foto-adulto-m.png')
}

}else if(inputSexElement[1].checked){
    genero = "mulher"

    if(idade >=0 && idade<10){
        //criança
        img.setAttribute('src','foto-bebe-f.png')
        }else if(idade<21){
            //jovem
            img.setAttribute('src','foto-jovem-f.png')
        }else if(idade <51){
            //adulto
            img.setAttribute('src','foto-adulto-f.png')
        }
        else{
            //idoso
            img.setAttribute('src','foto-idoso-f.png')
        }
}


res.style.textAlign = 'center'
res.innerHTML =`calculamos um ${genero} com ${idade} anos`
res.appendChild(img)




}
}