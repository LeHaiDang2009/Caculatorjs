const display = document.querySelector("#display")
const buttons = Array.from(document.querySelectorAll(".button"))

const clearAllBtn = document.querySelector(".buttonAC")
const clearBtn = document.querySelector(".buttonC")

const equalBtn = document.querySelector(".buttonEQL")

buttons.map( button => {
    button.addEventListener("click", (e) => {
        display.innerText += button.innerText
    })
})

// Clear all
clearAllBtn.addEventListener("click", e => {
    display.innerText = ""
})

//Clear
clearBtn.addEventListener("click", e => {
    display.innerText = display.innerText.slice(0, -1)
})

//Equal 
equalBtn.addEventListener("click", e => {
    try{
        let answer = eval(display.innerText)
        display.innerText = answer
    }
    catch{
        display.innerText = "Error!"
    }
    
})
