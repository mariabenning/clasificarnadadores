function verificar(){
    var idade = document.getElementById("idade").value; 
    console.log(idade)

    if (idade >=5 && idade <=7){
        document.querySelector('#resultado').innerHTML = "O Atleta é Infantil I" 
        

} else if  (idade >=8 && idade <=11){

document.querySelector('#resultado').innerHTML = "O Atleta é Infantil II" 

} else if  (idade >=12 && idade <=14){

document.querySelector('#resultado').innerHTML = " O Atleta é Juvenil I:" 

} else if  (idade >=15 && idade <=18){

document.querySelector('#resultado').innerHTML = " O Atleta é Juvenil II:" 

} else  {

document.querySelector('#resultado').innerHTML = " O Atleta é Senior:"

}
}


