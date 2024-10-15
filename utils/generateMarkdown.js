// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "none"){
    return ""
  } else {
    return `![Static Badge](https://img.shields.io/badge/License-${license}-pink)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "none"){
    return ""
  }

  if (license == "mit"){
    return "https://opensource.org/license/mit"
  }

  if (license == "apache"){
    return "https://www.apache.org/licenses/LICENSE-2.0"
  }

  if (license == "mozilla"){
    return "https://www.mozilla.org/en-US/MPL/"
  }

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "none") {
    return "" 
    } else {
      return ` ## License
  ${renderLicenseLink(license)}
  ${license}`
    }
  }

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ title, description, installation, usage, license, contributing, questions}) =>

  `${renderLicenseBadge(license)}
  
  ## ${title}
  
  
  ## Description
  
   ${description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#how-to-contribute)
  - [Questions](#questions) 
  
  ## Installation
  
   ${installation}
  
  
  ## Usage
  
   ${usage}
  
${renderLicenseSection(license)} 
  
  ## How to Contribute
  
   ${contributing}
  
  ## Questions
  
  
  If you have any additional questions, please reach me ${questions} ` 
export default generateMarkdown;
