// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === 'none') {
    return '';
  } else if (license === 'MIT') {
    return `![Static Badge](https://img.shields.io/badge/License-MIT-blue)`
  } else if (license === 'Apache 2.0') {
    return `![Static Badge](https://img.shields.io/badge/License-Apache2.0-blue)`
  } else {
    return `![Static Badge](https://img.shields.io/badge/License-GNU-blue)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  } else if (license === 'MIT') {
    return `[https://opensource.org/license/mit/](https://opensource.org/license/mit/)`
  } else if (license === 'Apache 2.0') {
    return `[https://www.apache.org/licenses/](https://www.apache.org/licenses/)`
  } else {
    return `[https://opensource.org/license/gpl-3-0/](https://opensource.org/license/gpl-3-0/)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  } else if (license === 'MIT') {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if (license === 'Apache 2.0') {
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else {
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.projectDescr}
  ## Table of Contents
  *[Description](#Description)
  *[Installation](#Installtion)
  *[Usage](#Usage)
  *[Contributions](#Contributions)
  *[Testing](#Testing)
  *[License](#License)
  *[Questions](#Questions)

  ## Installation 
  ${data.installationInst}
  ## Usage
  ${data.usageInfo}
  ## Contributions
  ${data.contriGuide}
  ## Testing
  ${data.testingInst}
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Questions
  Please reach out to ${data.username}, at [https://github.com/${data.username}](https://github.com/${data.username}) or at ${data.email} for additional questions. 
`;
}

module.exports = generateMarkdown;
