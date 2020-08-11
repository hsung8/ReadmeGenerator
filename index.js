const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require(".utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Type your project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Type your installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Type your usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What is your contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test intructions:',
    },
    {
        type: 'checkbox',
        message: 'Choose a license for your application',
        name: 'license',
        choices: [
            {
                name: 'license 1',
            },
            {
                name: 'license 2',
            },
            {
                name: 'license 3',
            }
        ],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];
    inquirer.prompt(questions).then((answers) => {
    console.log();
    console.log(JSON.stringify(answers, null, '  '));
})

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
