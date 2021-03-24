const pickerEyeColor = document.getElementById("choose-eye-color");
const pickerEarColor = document.getElementById("choose-ear-color");
const pickerNoseColor = document.getElementById("choose-nose-color");
const eyes = document.getElementsByClassName("eye")
const ears = document.getElementsByClassName("inner-ear")
const nose = document.getElementById("nose");
const mouth = document.getElementById("mouth");


pickerEyeColor.addEventListener("change", (e) => {
    for (let i=0; i<eyes.length; i++) {
        eyes[i].style.backgroundColor = pickerEyeColor.value; 
    }
})

pickerEarColor.addEventListener("change", (e) => {
    for (let i=0; i<eyes.length; i++) {
        ears[i].style.backgroundColor = pickerEarColor.value; 
    }
})

pickerNoseColor.addEventListener("change", (e) => {
        nose.style.backgroundColor = pickerNoseColor.value; 
})