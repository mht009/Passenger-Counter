window.resizeTo(400, 500)


let count = 0
let countEl = document.getElementById("count-el")

function increment() {
    console.log("Button Clicked!!")

    // count = count + 1
    count += 1
    console.log(count)
    
    // document.getElementById("count-el").innerText = count
    countEl.innerText = count
}
// console.log(countEl)

let saveEl = document.getElementById("pEntries")
function save() {
    saveEl.textContent += count + " - "
    count = 0
    countEl.innerText = count

    console.log(count)
}