const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const { title } = require("process");

// array of questions for user
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
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
    ])
};


// function to write README file
function writeToFile(answers) {
    return `
# ${answers.title}
${answers.description}

#### Table of Contents
* Title
* Description
[* Installation](####installation)
[* Usage](####usage)
[* License](####license)
[* Contributing](####contributing)
[* Tests](####tests)
    
####Installation
${answers.installation}

####Usage
${answers.usage}

####License
${answers.license}

####Contributing
${answers.contributing}

####Tests
${answers.tests}

####Contact
* Github: ${answers.github}
* E-mail: ${answers.email}
`
}

// function to initialize program
async function init() {
    console.log("hi")
    try {
        const answers = await promptUser();

        const readme = writeToFile(answers);

        await writeFileAsync("Readme.md", readme);

        console.log("Successfully wrote to Readme.md");
    } catch (err) {
        console.log(err);
    }

}

// function call to initialize program
init();
