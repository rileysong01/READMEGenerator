// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown'); 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message:  'What is your project title?'
    },
    {
        type: 'input',
        name: 'projectDescr',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installationInst',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'contriGuide',
        message:'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'testingInst',
        message: 'What are the testing instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kinda of licensing does this project use?',
        choices: ['huh', 'huh1']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message:'What is your email address?',

    }
];

// TODO: Create a function to write README file


const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>  err ? console.error(err) : console.log('Success! Go checkout your new README!'))
}


// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        writeToFile('./userREADME/README.md', generateMarkdown(data))
    })
}
   

// Function call to initialize app
init();
