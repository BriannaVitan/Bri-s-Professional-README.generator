// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the usage information?",
        name: "usage",
    },
    {
        type: "input",
        message: "What is the license?",
        name: "license",
    },
    {
        type: "input",
        message: "What are the contributing guidelines?",
        name: "contributing",
    },
    {
        type: "input",
        message: "What are your contact details for questions?",
        name: "questions",
    },
];

// Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile('README.md', answers);
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment.");
            } else {
                console.error("Something went wrong:", error);
            }
        });
}

// Function call to initialize app
init();
