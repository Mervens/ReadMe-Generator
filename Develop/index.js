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
 function generateREADME(answers) {
        return `# ${answers.project_title}

    #### Table of Contents

    1. [Project Title](#title)

    2. [Description](#description)

    3. [Installation](#installation)

    4. [Contributors](#contribution)

    5. [Testing Info](#test)

    6. [License](#license)

    ## Project Title
    * ${answers.title}
    ## Installation Instructions
    * ${answers.install}
    ## Usage Information
    * ${answers.use}
    ## Contributions
    * ${answers.contribution}
    ## Test Instructions
    * ${answers.test}
    ## Licensing
    * Application licensed under ${answers.license}`
    },

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
                console.log('The liscense you have selected is invalid. Valid liscenses are "Apache, MIT, Mozilla-Public, GNU-General-Public, Common-Development-and Distribution, and None');
                return false;
            }
        }
    },

    // Contribution Guidlines
    {
        type: 'input',
        name: 'contribution',
        message: 'In what ways can a user contribute to this application?',
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
        message: 'How does a user test the application premptively?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please add a method for testing to this application.');
                return false;
            }
        }
    },

    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username for access to your repositories.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a valid GitHub user.');
                return false;
            }
        }
    },
    // Email Address Added for Contact
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email for further contact?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Your information has been successfully saved and logged to the README.')
    });
};

// TODO: Create a function to initialize app
function init() {
        inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput));
        });
    };

// Function call to initialize app
init();
