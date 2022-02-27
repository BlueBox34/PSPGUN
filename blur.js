const blurcon = document.getElementById("blur")
console.log(blurcon)
blurcon.addEventListener("click", () => {
    blurcon.style.backdropFilter = "blur(0px)"
    blurcon.classList.add("reblur")
    setTimeout(() => {

        blurcon.remove()
    }, 500)
})