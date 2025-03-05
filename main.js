const share = document.querySelector(".btnShare")
const popup = document.querySelector(".popup")
const logo = document.querySelector(".share")
const responsiveBtn = document.createElement("button")
const imgShare = document.createElement("img")

const showPopup = () => {
    if(window.innerWidth >= 800) {
        popup.classList.toggle("active")
        share.classList.toggle("gray")
        logo.classList.toggle("white")
    } else {
        popup.classList.toggle("active")
        responsiveBtn.classList.add("btnShare")
        imgShare.alt = ""
        imgShare.src = "./images/icon-share.svg"
        imgShare.classList.add("share")
        responsiveBtn.addEventListener("click", showPopup)
        popup.appendChild(responsiveBtn)
        responsiveBtn.appendChild(imgShare)
    }
}

share.addEventListener("click", showPopup)