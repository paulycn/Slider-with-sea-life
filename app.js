const slider = document.querySelector("#slider")
const right = document.querySelector(".right")
const left = document.querySelector(".left")
const pagination = document.querySelector(".pagination")



let img = ["img/sea.jpg","https://images.unsplash.com/photo-1467647160393-708009aefd5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" , "https://images.unsplash.com/photo-1593348196396-6092a8e2d640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80", "https://images.unsplash.com/photo-1577768225500-9213a5402f29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80", "https://images.unsplash.com/photo-1456298503910-3568b93bb965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" ]

let sliderNumber = 0
slider.style.backgroundImage = `url(${img[sliderNumber]})`

right.addEventListener("click",() => {
    if (sliderNumber >= img.length -1) {
        sliderNumber = 0
        slider.style.backgroundImage = `url(${img[sliderNumber]})`
        return
    }
    sliderNumber +=1
    slider.style.backgroundImage = `url(${img[sliderNumber]})`
})

left.addEventListener("click",() => {
    if (sliderNumber === 0) {
        sliderNumber = img.length -1
        slider.style.backgroundImage = `url(${img[sliderNumber]})`
        return
    }
    sliderNumber -=1
    slider.style.backgroundImage = `url(${img[sliderNumber]})`
})


img.forEach ((image) => {
    pagination.innerHTML += "<div class='page'></div"
})

const pages = document.querySelectorAll(".page")
let mode = false

pages.forEach((page, i) => {
    page.addEventListener("click", () => {
        sliderNumber = i
        slider.style.backgroundImage = `url(${img[sliderNumber]})`
        // if (mode = true) {
        //     pages.style.backgroundColor = "yellow"
        // } else {
        //     pages.style.backgroundColor = "red"
        // }
    })
})



