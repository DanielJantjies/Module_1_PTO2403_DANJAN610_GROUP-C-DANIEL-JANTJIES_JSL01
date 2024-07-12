function validateSyntax() {  
    let input = document.getElementById('petInput').value; 
// Validation logic goes here
    let result = ''; // Placeholder for validation result

    //Expressing the format of a valid input field.
let check = /^pet_[a-zA-Z0-9]+$/;

//Statement to check validator
if (check.test(input)){
    result = "Valid Syntax \u{1F7E2}"; // 
}else {
// 
    result = "Invalid Syntax \ud83d\udd34";
}

document.getElementById('result').innerText = result; 

}