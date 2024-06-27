function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
function handleButtonClick() {
    const inputValue = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');
    if (inputValue.trim() === '') {
        alert('Please input a value');
        return;
    }
    if (isPalindrome(inputValue)) {
        resultElement.textContent = `${inputValue} is a palindrome`;
    } else {
        resultElement.textContent = `${inputValue} is not a palindrome`;
    }
    resultElement.classList.remove('hidden');
}
document.getElementById('check-btn').addEventListener('click', handleButtonClick);