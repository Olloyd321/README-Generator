// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None"){
    return `![licenseBadge](https://img.shields.io/badge/License-${license}-red)`
  };
  return "";
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None"){
    return `* [License](#license)`
  };
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None"){
    return `## License 
  
This Project is licensed under the ${license} license.`
  };
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation) 
* [Usage](#usage)
${renderLicenseLink(data.license)} 
* [Contributing](#contributing) 
* [Tests](#tests)
* [Questions](#questions)

## Installation 

To install dependencies run the following command: 

\`\`\`
${data.installation}
\`\`\`

## Usage 

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To perform tests run the following command: 

\`\`\`
${data.tests}
\`\`\`

## Questions

For any questions on this project please email ${data.UserEmail}, or contact me on github[${data.githubUserName}](https://github.com/${data.githubUserName}/)] below.
To view more of my projects visit [${data.githubUserName}](https://github.com/${data.githubUserName}/).

`;
}

module.exports = generateMarkdown;
