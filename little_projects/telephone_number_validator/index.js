const userInput = document.getElementById("user-input")
const resultsDiv = document.getElementById("results-div")
const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")

const checkValidNumber = input => {
  if(input === ""){
    alert("Please provide a phone number")
    return
}

const countryCode = '^\\+383\\s?';  
const areaCode = '(38|29|39|28|44|45|49)';  
const spacesDashes = '[\\s\\-]?';  
const phoneNumber = '\\d{6,7}$';  

const phoneRegex = new RegExp(
  `${countryCode}${spacesDashes}${areaCode}${spacesDashes}${phoneNumber}`
);

const pTag = document.createElement('p')
pTag.className = "results-text"
phoneRegex.test(input) ? (pTag.style.color = "#00471b") : (pTag.style.color = "#4d3800")
pTag.appendChild(document.createTextNode(
  `${phoneRegex.test(input) ? "Valid" : "Invalid"} KS number: ${input}`
))

resultsDiv.appendChild(pTag)

}

checkBtn.addEventListener("click", () => {
  checkValidNumber(userInput.value)
  userInput.value=""
})

userInput.addEventListener("keydown", e => {
   if(e.key === "Enter"){
     checkValidNumber(userInput.value)
     userInput.value=""
   }
})

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent=""
})