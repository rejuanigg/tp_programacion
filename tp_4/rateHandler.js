const likeButton = document.getElementById("likeButton")
const dislikeButton = document.getElementById("dislikeButton")
let likeCounter = document.getElementById("likeCounter")
let dislikeCounter = document.getElementById("dislikeCounter")

const likeHandler = () => {
    likeCounter.innerHTML = Number(likeCounter.innerHTML) + 1
}

const dislikeHandler =  () => {
    dislikeCounter.innerHTML = Number(dislikeCounter.innerHTML) + 1
}

likeButton.addEventListener("click", likeHandler)
dislikeButton.addEventListener("click", dislikeHandler)
