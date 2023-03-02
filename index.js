const inquirer = require('inquirer') // inquirer package 
const fs = require('fs') // file system package
const generateMarkdown = require('./utils/generateMarkdown.js')
console.log("Welcome to the readme generator, answer all prompts to render a readme") 
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
    // usage of project
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide a description of the uses/use cases of your project',
    },
    // license for project
    {
        message:'Please select a license for your project'
    },
    // github username 
    {
        message:'Please enter your github user name'
    },
    // contributors
    {
        message:'Please list any github contributors'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (fileName, data)  
    { 
     console.log("ReadmMe generated")

    };
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
