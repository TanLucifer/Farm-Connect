
import fs from "fs";
import axios from "axios";

// GitHub API URL to fetch contributors
const CONTRIBUTORS_API_URL = 'https://api.github.com/repos/TanLucifer/Farm-Connect/contributors';

// Path to your README file
const README_PATH = './README.md';

// Function to fetch contributors from GitHub
async function fetchContributors() {
  try {
    const response = await axios.get(CONTRIBUTORS_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching contributors:', error);
    throw error;
  }
}

// Function to generate contributors markdown
function generateContributorsMarkdown(contributors) {
  let markdown = '### Contributors\n';
  contributors.forEach(contributor => {
    markdown += `- <a href="https://github.com/${contributor.login}" target="_blank">
                    <img src="${contributor.avatar_url}&s=40" alt="${contributor.login}" style="border-radius: 50%; width: 40px; height: 40px;"/>
                 </a> 
                 [${contributor.login}](https://github.com/${contributor.login})\n`;
  });
  return markdown;
}

// Function to update README file
async function updateReadme() {
  try {
    const contributors = await fetchContributors();
    const contributorsMarkdown = generateContributorsMarkdown(contributors);

    // Read the existing README content
    let readmeContent = fs.readFileSync(README_PATH, 'utf8');

    // Regex to find the existing Contributors section
    const contributorsSectionRegex = /### Contributors[\s\S]*?(?=\n##|$)/;

    let updatedReadmeContent;
    if (contributorsSectionRegex.test(readmeContent)) {
      // Update the existing Contributors section
      updatedReadmeContent = readmeContent.replace(contributorsSectionRegex, contributorsMarkdown);
    } else {
      // Append the Contributors section if it doesn't exist
      updatedReadmeContent = readmeContent + '\n' + contributorsMarkdown;
    }

    // Write the updated content back to the README file
    fs.writeFileSync(README_PATH, updatedReadmeContent, 'utf8');
    console.log('README file updated successfully with contributors.');
  } catch (error) {
    console.error('Error updating README file:', error);
  }
}

// Run the update function
updateReadme();