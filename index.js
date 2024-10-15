// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// Create an array of questions for user input
import generateMarkdown from './utils/generateMarkdown.js';

inquirer
  .prompt([
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
        type: "list",
        message: "What is the license?",
        name: "license",
        choices: ["mit", "apache", "mozilla", "none"],
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
])

// Create a function to write README file
.then((answers) => {
    
    const renderLicenseBadge= generateMarkdown(answers);

    fs.writeFile('README.generator.md', renderLicenseBadge, (err) =>
      err ? console.log(err) : console.log('Successfully created README.generator')
    );
  });

