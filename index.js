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

    },
    // license for project
    {

    },
    // github username 
    {

    },
    // constributors
    {

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
