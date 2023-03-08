let setIntervalId;
let second = 0;
let count = 0;
const timerId = document.getElementById('timer')

const startClock= ()=>{
    clearInterval(setIntervalId)
    setIntervalId = setInterval(startTimer,10)
}
const stopClock = () => {
    clearInterval(setIntervalId)
}

const clearClock=()=>{
    clearInterval(setIntervalId)
    second = 0
    timerId.innerText = second;
    
}

const startTimer =()=>{
    count++
    
    if(count > 99){
        second++
        count = 0;
    }
    timerId.innerText = second;
}





