// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [

    // "sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions"
    {
        type: 'input',
        name: 'title',
        message: 'What will be the title of this project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('No title makes for a bad piece of work. Please input a title.');
                return false;
            }
        }
    },
    // So first comes description
    {
        type: 'input',
        name: 'description',
        message: 'Provide an ample description of the application.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('A user cannot continue without a desription. Please, try again with a response.');
                return false;
            }
        }
    },
    // ToC (Table of...)
    // Installation Instructions
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your application to our project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('No information has been input. This cannot be progressed, please try again.');
                return false;
            }
        }
    },
    // Usage Information, just put information here.
    {
        type: 'input',
        name: 'usage',
        message: 'How does a user use this application?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Not a sufficient response for project usage.');
                return false;
            }
        }
    },
    // Licensing option (Liscences taken from list off https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project (Required)',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('You must pick a license for the project!');
                return false;
            }
        }
    },

    // Contribution Guidlines
    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute to the project!');
                return false;
            }
        }
    },
    // Tests comes before last
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project? (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to describe how to test this project!');
                return false;
            }
        }
    },
    // License Options

    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the README!')
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
