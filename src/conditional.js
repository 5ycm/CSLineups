let xClicked = false; // This is the condition you want to check 
 
// Function to check the condition 
function checkCondition() { 
    // Replace this with your actual condition check 
    if (condition) { 
        console.log("Condition is true!"); 
    } else { 
        console.log("Condition is false."); 
    } 
} 
 
// Set an interval to check the condition every second (1000 milliseconds) 
const intervalId = setInterval(checkCondition, 1000); 