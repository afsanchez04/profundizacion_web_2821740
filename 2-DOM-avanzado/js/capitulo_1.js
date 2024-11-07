const pantalla = document.querySelector("#num")
const btnAdd = document.querySelector("#btnAdd")
let count = 1

/* let todosCapitulos = JSON.parse( localStorage.getItem('todosCapitulos') )
localStorage.setItem('todosCapitulos', JSON.stringify( todosCapitulos )) */

console.log(JSON.parse(localStorage.todosCapitulos))

btnAdd.addEventListener( "click", function(){
    pantalla.textContent = count++

    if(count == 4){
        console.log('Habilitaste el cap 2')
        let cap2 = JSON.parse( localStorage.getItem('todosCapitulos') )
        cap2[1].habilitado = true
        localStorage.setItem( 'todosCapitulos', JSON.stringify(cap2) ) 
        console.log(cap2)
    }

} )