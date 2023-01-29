const maincontainer = document.querySelector(".main-container")
const thankscontainer = document.querySelector(".Thank-you")
const  submitbutton = document.getElementById("submit")
const rateus = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")
submitbutton.addEventListener("click", () => {
  thankscontainer.classList.remove("hidden")
  maincontainer.style.display = "none"
})
rateus.addEventListener("click", () => {
  thankscontainer.classList.add("hidden")
  maincontainer.style.display = "block"
})
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML
  })
  
})
