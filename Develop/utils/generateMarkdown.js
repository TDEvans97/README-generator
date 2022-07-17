// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //conditional statement to check whether or not there is a license,
  // license is one of the questions. if there, return the license badge.
  // if not, return empty string
  // template literal with markdown syntax
  // return `` picture/image

  // below is how you would return the badge link //
  //return `![text to be shown](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // same pattern used above, conditional statement
  // returning a hyperlink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // same pattern
  // return `## License
  // This repository has the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  // ## Table of contents
  // ## Description

`;
}

module.exports = generateMarkdown;
