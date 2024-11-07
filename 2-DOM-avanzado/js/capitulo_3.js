const pantalla = document.querySelector("#num")
const btnAdd = document.querySelector("#btnAdd")
let count = 1

/* let todosCapitulos = JSON.parse( localStorage.getItem('todosCapitulos') )

todosCapitulos[1].habilitado = true
todosCapitulos[2].habilitado = true

localStorage.setItem( 'todosCapitulos', JSON.stringify(todosCapitulos) )

console.log(todosCapitulos) */

btnAdd.addEventListener( "click", function(){
    pantalla.textContent = count++
} )