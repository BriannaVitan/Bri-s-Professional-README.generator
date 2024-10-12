// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// Create an array of questions for user input
const generateReadme = ({ Title, Description, TableofContent, Installation, Usage, License, Contributing, Questions}) =>

`![Static Badge](https://img.shields.io/badge/License-MIT-pink)

## Bri's Professional README.Generator ${Title}

## Description

Welcome to my Professional README.generator!
This project is a README.generator made for our Node Challenge. This help me understand the concept of inquirer better and it was fun to run node index.js. ${Description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#how-to-contribute)
- [Questions](#questions) ${TableofContent}

## Installation

Clone the Repo ${Installation}


## Usage

images/README.generator.png ${Usage}

## License

This project is licensed under the MIT license. See LICENSE.txt for more information. ${License}

## How to Contribute

Contributions are welcomed and greatly appreciated. If you have a suggestion, please fork the repo and create a pull request. Thank you in advance! ${Contributing}

## Questions


If you have any additional questions, please reach me ${Questions} at` 

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
])

// Create a function to write README file
.then((answers) => {
    
    const renderLicenseBadge= generateReadme(answers);

    fs.writeFile('README.generator', renderLicenseBadge, (err) =>
      err ? console.log(err) : console.log('Successfully created README.generator')
    );
  });

