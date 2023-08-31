// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This application is covered under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ## Description
  ${data.projectDescr}
  ## Table of Contents

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
  ## Questions
  Please reach out to ${data.username}, at github.com/${data.username} or at ${data.email} for additional questions. 
`;
}

module.exports = generateMarkdown;
