let submissions = [
    {
        name: 'Jane',
        score: 95,
        date: '2020-01-24',
        passed: true
    },
    {
        name: 'Joe',
        score: 77,
        date: '2018-05-14',
        passed: true,
    },
    {
        name: 'Jack',
        score: 59,
        date: '2019-07-05',
        passed: false
    },
    {
        name: 'Jill',
        score: 88,
        date: '2019-07-05',
        passed: true
    },
];

console.log(submissions);

//ADD SUBMISSION

function addSubmission(array, newName, newScore, newDate) {

    let newSubmission = 
    {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60 ? true : false,
    };

    array.push(newSubmission);
}


//addSubmission(submissions, 'Judy', 40, '2019-05-17');

//console.log(submissions);

//DELETE BY INDEX

function deleteSubmissionByIndex(array, index) {
    
    array.splice(index, 1)
}

//deleteSubmissionByIndex(submissions, 2);

//console.log(submissions);

// DELETE BY NAME

function deleteSubmissionByName(array, name) {
 
    const nameIndex = array.findIndex((item)=> item.name === name); 
        return array.splice(nameIndex, 1);
    
} 

//deleteSubmissionByName(submissions, 'Joe');
//console.log(submissions);

//EDIT SUBMISSION WITH NEW SCORE

// function editSubmission(array, index, score) {
//     const scoreIndex = array.findIndex((item) => item.score === index); 
//     //return scoreIndex;
//     return array.splice(scoreIndex, 1, score);
//     score >= 60 ? passed = true : passed = false;
// }

// editSubmission(submissions, 2, 70);

// console.log(submissions);

function editSubmission(array, index, /*new*/Score) {
    array[index].score = /*new*/Score;
    newScore >= 60 ? array[index].passed = true : array[index].passed = false;
    //array[index].passed = score >60;
}
//console.log(submissions);
//editSubmission(submissions, 1, 40);
//console.log(submissions);

// function editSubmission(array, index, newScore) {
//     if (i === index) {

//     }
// }

// function editSubmission()
// array.forEach(function(submission, i) {
//     if (i === index) {
//         updatedSubmission = submission
//     }
// })


// USING NAME TO CALL BACK OBJECT

function findSubmissionByName(array, name) {

    const findName = array.find((item) => item.name === name);
        return findName;
}

//console.log(findSubmissionByName(submissions, 'Jack'));


//FIND LOWEST SCORE

function findLowestScore(array) {
    let lowScore = array[0];
    //lowScore > item.score ? lowScore === item.score : lowScore === 100
    array.forEach((item) => {
        if (item.score < lowScore.score) {
            lowScore = item;
        }
    })
    return lowScore;
}

//console.log(findLowestScore(submissions));

//AVERAGE SCORE
function findAverageScore(array) {
    let avgScore = 0;

    for (item of array) {
        avgScore = avgScore + item.score;
    };

    return avgScore = avgScore / array.length;
}

//console.log(findAverageScore(submissions));

//FILTER PASSING SCORE

function filterPassing(array) {
    const passScore = array.filter((item) => item.passed); //=== true);
    return passScore;
}

console.log(filterPassing(submissions));

// FILTER 90 SCORE AND ABOVE

function filter90AndAbove(array) {
    const superbScore = array.filter((item) => item.score >= 90);
    return superbScore;
}

console.log(filter90AndAbove(submissions));