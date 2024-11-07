
const container = document.querySelector(".container")

if(!localStorage.todosCapitulos){
    localStorage.setItem( "todosCapitulos", JSON.stringify( capitulos ) )
}
let misCapitulos = JSON.parse( localStorage.getItem( "todosCapitulos" ) )


misCapitulos.forEach( function (cap){

    const card = document.createElement("button")
    card.classList.add("card")
    card.style.backgroundImage = `url(${cap.portada})`
    card.style.backgroundSize= "cover"
    card.style.backgroundPosition= "center"

    if(cap.habilitado){
        card.classList.remove("disabled")
    }else{
        card.classList.add("disabled")
        card.disabled = true
    }

    card.addEventListener( "click", function () {
        console.log( cap )
        localStorage.setItem("currentCapitulo", JSON.stringify(cap) )
        localStorage.setItem("todosCapitulos", JSON.stringify(misCapitulos) )
        window.location.href = cap.webPage
    } )

    card.innerHTML = `
            <h1>${cap.cap}</h1>
    `

    container.appendChild(card)

} )