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

//Add Submission

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

//Delete by Index

function deleteSubmissionByIndex(array, index) {
    
    array.splice(index, 1)
}

//deleteSubmissionByIndex(submissions, 2);

//console.log(submissions);

//delete by Name

function deleteSubmissionByName(array, name) {
 
    const nameIndex = array.findIndex((item)=> item.name === name); 
        return array.splice(nameIndex, 1);
    
} 

//deleteSubmissionByName(submissions, 'Joe');
//console.log(submissions);

//edit submission 

// function editSubmission(array, index, score) {
//     const scoreIndex = array.findIndex((item) => item.score === index); 
//     //return scoreIndex;
//     return array.splice(scoreIndex, 1, score);
//     score >= 60 ? passed = true : passed = false;
// }

// editSubmission(submissions, 2, 70);

// console.log(submissions);

function editSubmission(array, index, newScore) {
    array[index].score = newScore;
    newScore >= 60 ? array[index].passed = true : array[index].passed = false;
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

function findSubmissionByName(array,name) {

}

function findLowestScore(array) {

}

function findAverageScore(array) {

}

function filterPassing(array) {

}

function filter90AndAbove(array) {

}