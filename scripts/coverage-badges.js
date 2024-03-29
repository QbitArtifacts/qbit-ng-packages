
const fs = require('fs');
const { argv } = require('process');

const args = argv.slice(2);
const help = `
> coverage-badges help
> coverage-badges [coverage-file-path] [readme-path] 
`;

if (args[0] === 'help') {
    return console.log(
        help
    );
}

const coverageFilePath = args[0] || './coverage/coverage-summary.json';
const readmePath = args[1] || './README.md';

const GENERATED_AT_MESSAGE = `
> This section has been **autogenerated**, do not change by hand (see []())  
> _Generated: \`${new Date().toLocaleString()}\`_
`;

// Check files are available
if (!fs.existsSync(coverageFilePath)) {
    return console.error('No coverage file found at: ' + coverageFilePath);
}

if (!fs.existsSync(readmePath)) {
    return console.error('No README.md file found at: ' + readmePath);
}

// Real script
const content = fs.readFileSync(coverageFilePath);
const decoded = JSON.parse(content);
const total = decoded.total;
const badges = [];

for (let key of Object.keys(total)) {
    badges.push(
        coverageBadgeFomObject(key, total[key])
    );
}
writeBadges(badges);

// Functions
function createBadgeUrl(label, message, color) {
    return encodeURI(`https://img.shields.io/badge/${label}-${message}-${color}`);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function wrapBadge(title, link) {
    return `![${title}](${link})`
}

function getColorForCoverage(percent) {
    if (percent > 85) {
        return 'success';
    }

    if (percent > 60 && percent < 85) {
        return 'yellow';
    }

    return 'red';
}

function coverageBadgeFomObject(title, data) {
    const titleCapitalized = capitalize(title);

    return wrapBadge(
        titleCapitalized,
        createBadgeUrl(
            titleCapitalized,
            `${data.covered}/${data.total} (${data.pct})`,
            getColorForCoverage(data.pct)
        )
    );
}

function writeBadges(badges) {
    // Get readme content
    const mdContent = fs.readFileSync(readmePath).toString();

    // Split by lines
    const badgeLines = mdContent.split('\n');

    // Get the line where badges comment is located
    const startLine = badgeLines.indexOf('<!-- BADGES_START -->') + 1;
    const endLine = badgeLines.indexOf('<!-- BADGES_END -->');
    const lineCountBetween = endLine - startLine;

    // Add footer
    badges.push(GENERATED_AT_MESSAGE);

    // Add badges in between "BADGES_START" and "BADGES_END" section
    badgeLines.splice(startLine, lineCountBetween, badges.join('\n'));
    fs.writeFileSync(readmePath, badgeLines.join('\n'));

    // Log result
    console.log('Added badges to "' + readmePath + '"');
}