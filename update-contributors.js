const fs = require('fs');
const axios = require('axios');

// URL to fetch contributors from GitHub API
const contributorsUrl = 'https://api.github.com/repos/TanLucifer/Farm-Connect/contributors';

// Path to your README file
const readmePath = './README.md';

async function updateReadme() {
  try {
    // Fetch contributors data
    const response = await axios.get(contributorsUrl);
    const contributors = response.data;

    // Generate markdown for contributors
    let contributorsMarkdown = '### Contributors\n';
    contributors.forEach(contributor => {
      contributorsMarkdown += `- ![${contributor.login}](${contributor.avatar_url}) [${contributor.login}](https://github.com/${contributor.login})\n`;
    });

    // Read the existing README file
    let readmeContent = fs.readFileSync(readmePath, 'utf8');

    // Check if Contributors section exists and update it
    const contributorsSectionRegex = /### Contributors[\s\S]*?(?=\n##|$)/;
    let updatedReadmeContent;
    
    if (contributorsSectionRegex.test(readmeContent)) {
      updatedReadmeContent = readmeContent.replace(contributorsSectionRegex, contributorsMarkdown);
    } else {
      updatedReadmeContent = readmeContent + '\n' + contributorsMarkdown;
    }

    // Write the updated content to README
    fs.writeFileSync(readmePath, updatedReadmeContent, 'utf8');

    console.log('README file updated successfully with contributors.');
  } catch (error) {
    console.error('Error updating README file:', error);
  }
}

updateReadme();

