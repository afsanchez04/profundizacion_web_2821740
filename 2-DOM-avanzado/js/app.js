
const container = document.querySelector(".container")

capitulos.forEach( function (cap){

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
        window.location.href = "../pages/comic.html"
    } )

    card.innerHTML = `
            <h1>${cap.cap}</h1>
    `

    container.appendChild(card)

} )