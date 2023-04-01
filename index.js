const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");
const result = document.getElementById("result");
const resultInput = document.getElementById("resultInput");

submitBtn.addEventListener("click", function() {
  const operator = document.getElementById("operator").value;
  const firstNum = Number(document.getElementById("firstNum").value);
  const secondNum = Number(document.getElementById("secondNum").value);

  let answer;

  switch (operator) {
    case "+":
      answer = firstNum + secondNum;
      break;
    case "-":
      answer = firstNum - secondNum;
      break;
    case "*":
      answer = firstNum * secondNum;
      break;
    case "/":
      answer = firstNum / secondNum;
      break;
    default:
      answer = "Math Error!";
  }
  resultInput.value = answer;

});

clearBtn.addEventListener("click", function() {
  document.getElementById("operator").value = "";
  document.getElementById("firstNum").value = "";
  document.getElementById("secondNum").value = "";
  resultInput.value = "";
});
