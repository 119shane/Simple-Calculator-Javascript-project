
const displayArea= document.getElementById('display')
const clearBtn = document.getElementById('clear_btn')

function display(number){
    displayArea.value += number
}

clearBtn.addEventListener('click', ()=>{

    displayArea.value = " "
})

function calc(){
    let answer = eval(displayArea.value )
    displayArea.value = answer
}





// console.log()
