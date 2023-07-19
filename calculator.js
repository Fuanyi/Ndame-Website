

const calculateButton = document.getElementById('calculateButton');

function calculate(event) {

  event.preventDefault(); // Prevent default form submit behavior

  // Get user input
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  var age = parseInt(document.getElementById("age").value);
  var gender = document.getElementById("gender").value;
  
  // Calculate BMI
  const heightMeters = height / 100;
  const bmi = weight / (heightMeters * heightMeters);
  
  // Calculate BMR based on gender
  var bmr;
  if (gender === "Male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else if (gender === "Female") {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  };

  var conclud;
  if(bmi<18.5){
    conclud="You ova dry,na sey like for bi pengues? Go download NDAME catch small skin ";
  }
  else if(bmi>=18.5 && bmi<=24.9){
    conclud="Ya body dey chak, check NDAME app for remain fine";
  }else if(bmi>=25.0 && bmi<=29.9){
    conclud="Fat di enter you oh, NDAME app fit helep u controlam";
  }else if(bmi>=30.0 && gender === "Male"){
    conclud="Weeeh Pa, You ova fat. NDAME app fit helep u reduce dat fat";
  }else if(bmi>=30.0 && gender === "Female"){
    conclud="Weeeh Mami, You ova fat. NDAME app fit helep u reduce dat fat";
  }
  
  // Display results on the page
  const resultDiv = document.getElementById("resultOutput");
  const consultation = document.getElementById("BmiConclusion");
  consultation.innerHTML= conclud;
  resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " and your BMR is " + bmr.toFixed(2) + " calories per day.";
}

calculateButton.addEventListener('click', calculate);