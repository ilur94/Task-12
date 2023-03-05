const textEl = document.getElementById("text")
const speedEl = document.getElementById("speed")
let index = 0
const text = "0 1 2 3 4 5 6 7 8 9 10"

let speed = 500 / speedEl.value

    function writeText() {
        textEl.innerText = text.slice(0,index)
   
    if(index < text.length){
        index++
        setTimeout(writeText, speed)
    }
    else{
        setTimeout(decreaseText, speed)
    }
    }
    function decreaseText() {
        textEl.innerText = text.slice(0,index)
        if(index > 0){
         index--
        setTimeout(decreaseText, speed)
    }
    else{
        setTimeout(writeText, speed)
    }
    }
    speedEl.addEventListener("input", 
    function (e) {
     speed = 300 / e.target.value
   }
    )
    speedEl.addEventListener("input",
        function (e) {
     speed = 300 / e.target.value
    }
    )

writeText()