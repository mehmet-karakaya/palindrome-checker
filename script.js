const userInput = document.getElementById('text-input');
const output = document.getElementById('result');
const checkButton = document.getElementById('check-btn');

function cleanInputString(str) {
  const regex = /[^a-zA-Z0-9]/g;
  return str.replace(regex, '');
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function palindromeChecker() {
  const inputStr = userInput.value;
  if (inputStr === "") {
      alert(`Please input a value`);
      return null;
  }
  const cleanStr = cleanInputString(inputStr.toLowerCase());
  const revStr = reverseString(cleanStr);
  if (cleanStr === revStr) {
    output.innerHTML = `
  <p><b>${userInput.value}</b> is a palindrome</p>
  `;
  } else {
    output.innerHTML = `
  <p><b>${userInput.value}</b> is not a palindrome</p>
  `;
  }
}

checkButton.addEventListener("click", palindromeChecker);
