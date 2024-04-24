const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = input => {
    const originalInput = input;

    if (input === '') {
        alert("Please input a value");
        return;
    }

    result.replaceChildren();

    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
    let resultText = `<strong>${originalInput}</strong> ${
        lowerCaseStr === [...lowerCaseStr].reverse().join('') ? "is" : "is not"
    } a palindrome.`

    const answer = document.createElement("p");
    answer.className = "user-input";
    answer.innerHTML = resultText;
    result.appendChild(answer);
    result.classList.remove("hidden");
}

checkBtn.addEventListener("click", () => {
    checkPalindrome(userInput.value);
    userInput.value = "";
})

userInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        checkPalindrome(userInput.value);
        userInput.value = "";
    }
})