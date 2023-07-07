const obj = {
    computer: 42,
    maths: 42,
    science: 50
}
const totalScore = 150;
const obtainedScore = Object.values(obj).reduce((sum, score) => sum + score, 0);
const percentage = (obtainedScore / totalScore) * 100;
console.log(percentage)

//calculate the percentage he scored in the exams out of total 150 score

const userDetails={
    name: "kaylin",
    maths: 23,
    science: 35,
    gk:30
}

// {
//     userName: 'kaylin',
//     subjectCodes: ['M','S', 'G'],
//     subjectScores: [23,35,30]
// }
const userName = userDetails.name;
const subjectCodes = Object.keys(userDetails).filter(key => key !== 'name').map(key => subjectcode[key]);
const subjectScores = Object.values(userDetails).filter(value => typeof value === 'number');

const output = {
    userName,
    subjectCodes,
    subjectScores
  };
  
  console.log(output);
  