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


addSubmission(submissions, 'Judy', 40, '2019-05-17');

console.log(submissions);

//Delete by Index

function deleteSubmissionByIndex(array, index) {
    
    array.splice(index, 1)
}

deleteSubmissionByIndex(submissions, 2);

console.log(submissions);

//delete by Name
/*
function deleteSubmissionByName(array, name) {
    
    array.findIndex()
} */