// Create a license badge (with link) based on user input. If N/A, return an empty string. Badge info taken from: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "CC BY 4.0") {
    return "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
  }
  if (license === "N/A") {
    return "";
  }
};

// Create a link to the license docs. If N/A, return an empty string. 
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT Licensing](https://opensource.org/licenses/MIT)`;
  }
  if (license === "APACHE 2.0") {
    return `[Apache 2.0 Licensing](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license === "CC BY 4.0") {
    return `[Creative Commons by 4.0 Licensing](https://creativecommons.org/licenses/by/4.0/)`;
  }
  if (license === "N/A") {
    return "";
  }
};

// Create a license section if the user any option except N/A.
function renderLicenseSection(license) {
  if (license !== "N/A") {
    return `## License 
  ${renderLicenseBadge(license)}  
  This project is protected under the ${license} license.  
  To understand what you can and cannot do with this project, please refer to the ${license} documentation at ${renderLicenseLink(license)}.`
  } else return "";
};

// Create a Table Of Contents list item if a license section is created.
function renderLicenseTableOfContents(license) {
  if (license !== "N/A") {
    return `+ [License](#license)`
  } else return "";
};

// Create a function to generate markdown for README
function generateMarkdown({title, license, description, installation, usage, contribution, test, username, email}) {
  return `# ${title}
  ${renderLicenseBadge(license)}
  ## Table Of Contents
  + [Description](#description)
  + [Installation Instructions](#installation-instructions)
  ${renderLicenseTableOfContents(license)}
  + [Usage Information](#usage-information)
  + [Contribution Guidelines](#contribution-guidelines)
  + [Test Instructions](#test-instructions)
  + [Questions](#questions)
  ## Description
  ${description}
  ## Installation Instructions
  ${installation}
  ${renderLicenseSection(license)}
  ## Usage Information
  ${usage}

  ---

  ## Contribution Guidelines
  ${contribution}
  ## Test Instructions
  ${test}
  ## Questions
  If you have any questions, feel free to reach out to me.  
  GitHub: https://github.com/${username}  
  Email: ${email}
`;
};

module.exports = generateMarkdown;
