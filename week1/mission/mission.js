let selectTheme = document.querySelector("#theme-select")
let body = document.querySelector("body")
let img = document.querySelector("img")
let h2 = document.querySelector("h2")
let content = document.querySelector("#content")

function changeTheme() {
    let select = selectTheme.value
    if (select === 'light'){
        body.style.background = 'white'
        body.style.color = 'black'
        img.src = 'byui-logo-blue.webp'
        h2.style.color = '#0989df'
        content.style.borderColor = 'black'

    } else {
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
        img.src = "byui-logo-white.png"
        h2.style.color = 'skyblue'
        content.style.borderColor = 'white'

    }
}

selectTheme.addEventListener("change", changeTheme)