const billAmount = document.getElementById('bill');
const numberOfPeople = document.getElementById('persons');
const percentageBtns = document.getElementsByClassName('percentage-button');
const customPercent = document.getElementById('tip');
const inputGroups = document.getElementsByClassName('input-group');
const forms = document.getElementsByClassName('form-control');
const error = document.getElementById('error');
const tipAmount = document.getElementById('tip-amount');
const total = document.getElementById('total');
const resetBtn = document.getElementById('reset');




// Check if No. of people is less that 1 
function min_people(){

    if( numberOfPeople.value < 1){
        error.hidden = false;
        numberOfPeople.parentNode.classList.add("input-error");
    } else {
        error.hidden = true; 
        numberOfPeople.parentNode.classList.remove("input-error");
    }
    
}



// Handle Percentage Calculations and display results
function sendPercentageValue(percent){
         // Calculate Total Tip
        const bill = billAmount.value;
        const totalTip = bill * percent;
        console.log(tipAmount.innerHTML) 
            tipAmount.innerHTML = totalTip.toFixed(2);
        console.log(totalTip);
        // Divide by number of people for Tip per Person
        const tipPerPerson = totalTip / numberOfPeople.value;
        total.innerHTML = tipPerPerson.toFixed(2);
        console.log(tipPerPerson);


}



// Adding Cyan Border on Focus
function handleFocus(e){
   e.target.parentNode.classList.add("active");
}


// Removing it off focus 
function handleFocusOut(e){
    e.target.parentNode.classList.remove("active");

}





// // Reset All 
function handleReset(){
        tipAmount.innerHTML = "0.00";
        total.innerHTML = "0.00";
        billAmount.value = null;
        numberOfPeople.value = null;
}


// // Event Listeners

Array.from(percentageBtns).forEach((percentageBtn)=>{
    
    percentageBtn.addEventListener("click", ()=> sendPercentageValue(percentageBtn.value));
});


Array.from(inputGroups).forEach((group) =>{

    group.addEventListener("focusin", handleFocus);
    group.addEventListener("focusout", handleFocusOut);
});

customPercent.addEventListener("change", ()=>sendPercentageValue(customPercent.value / 100) );

customPercent.addEventListener("focusin", (e)=>{e.target.classList.add("active")});
customPercent.addEventListener("focusout",(e)=>{e.target.classList.remove("active")});

numberOfPeople.addEventListener("focusout", min_people);

resetBtn.addEventListener('click', handleReset);
