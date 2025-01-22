// JavaScript Code

// Factorial Functions
function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
  }
  
  // Event Listener for Form Submission
  document.getElementById("factorialForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page
  
    const numberInput = document.getElementById("number").value;
    const method = document.querySelector('input[name="method"]:checked').value;
    const resultDiv = document.getElementById("result");
  
    // Input Validation
    const number = parseInt(numberInput, 10);
    if (isNaN(number) || number < 0) {
      resultDiv.textContent = "Please enter a valid positive integer.";
      resultDiv.style.color = "red";
      return;
    }
  
    // Calculate Factorial
    let result;
    if (method === "iterative") {
      result = factorialIterative(number);
    } else {
      result = factorialRecursive(number);
    }
  
    // Display Result
    resultDiv.textContent = `Factorial of ${number} (${method} method): ${result}`;
    resultDiv.style.color = "green";
  });
  