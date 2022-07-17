// Packages needed for this application:
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const mdTemplate = require('./utils/generateMarkdown');

// Questions for user input:
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "list",
        name: "license",
        message: "Which license are you using?",
        choices: ['MIT', 'APACHE 2.0', 'CC BY 4.0', 'N/A']
    },
    {
        type: "input",
        name: "usage",
        message: "Provide examples and instructions for use.",
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the guidelines to contribute to this app?",
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "testing",
        message: "What testing has been done on this app?",
    }
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
