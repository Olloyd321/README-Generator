const inquirer = require('inquirer'); // inquirer package 
const fs = require('fs'); // file system package
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("Welcome to the readme generator, answer all prompts to render a readme");
const licenses = ["MIT", "apache2.0", "None"];
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    // name of project 
    {
        type: 'input',
        name: 'title',
        message: "What would you like to name your project?"

    },
    // description of project
    {
        type: 'input',
        name: 'description',
        message: 'please provide a description of your project',
    },
    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install needed dependencies',
        default: 'npm i'
    },
    // usage of project
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide a description of the uses/use cases of your project',
    },
    // license for project
    {
        type: 'list',
        name: 'license',
        message:'Please select a license for your project',
        choices: licenses,
    },
    // contributing
    {
        type: 'input',
        name: 'contributing',   
        message:'Please list any contribution guidelines'
    },
    // Tests
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to perform tests?',
        default: 'npm test'
    },
    // github username 
    {
        type: 'input',
        name: 'githubUserName',
        message:'Please enter your github user name'

    },
    // user email 
    {
        type: 'input',
        name: 'UserEmail',
        message:'Please enter your email address, or skip and the user will be directed to your github'

    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync (path.join (process.cwd(), fileName), data);  

}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Successful! ReadMe generated.');
        writeToFile('NEWREADME.md', generateMarkdown({
            ...responses
        }));
    });
};

// Function call to initialize app
init();
