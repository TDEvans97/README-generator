// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// fs, inquirer, path, generateMarkdown.js - require
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    //fs to writeFile. and join path to current directory
    // reference activity 13
}

// TODO: Create a function to initialize app
function init() {
    // use inquirer and prompt to show the questions, take in the responses, write the responses to the file (by calling writeToFile and ppassing in responses)
    // activity 20
    // inside of write to file - fileName, call generateMarkdown and pass in responses from prompt
}

// Function call to initialize app
init();
