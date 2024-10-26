const classScoresInput = document.getElementById("classScores");
const studentScoreInput = document.getElementById("studentScore");
const calculateButton = document.getElementById("calculateButton");
const resultDisplay = document.getElementById("result");

function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return (sum / scores.length).toFixed(2);
  }
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }
  
  function studentMsg(totalScores, studentScore) {
    if (studentScore < 60) {
        return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course."
      
      } else {
      return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course."
      }
      
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

  calculateButton.addEventListener("click", () => {
    const classScores = classScoresInput.value.split(",").map(Number);  // Turns the input into an array of numbers
    const studentScore = Number(studentScoreInput.value); 

    const message = studentMsg(classScores, studentScore);
  resultDisplay.textContent = message; 
  });