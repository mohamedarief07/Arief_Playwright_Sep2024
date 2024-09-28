function getGrade(score) {
    let grade;

    switch (true) {
      case (score >= 90 && score <= 100):
        grade = 'A';
        break;
      case (score >= 80 && score < 90):
        grade = 'B';
        break;
      case (score >= 70 && score < 80):
        grade = 'C';
        break;
      case (score >= 60 && score < 70):
        grade = 'D';
        break;
      case (score >= 0 && score < 60):
        grade = 'F';
        break;
      default:
        grade = 'Invalid score';
    }
      return `Grade for the score [${score}] obtained is :` +grade;
  }
  
  console.log(getGrade(92)); 
  console.log(getGrade(85));    
  console.log(getGrade(73));  
  console.log(getGrade(60));  
  console.log(getGrade(58));  
  console.log(getGrade(105));
  