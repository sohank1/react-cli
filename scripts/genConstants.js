const { promises: fs } = require("fs")
const { join } = require("path");
const commandsJson = require("../src/services/commands/commands.json");

const commands = {};

for (const key of Object.keys(commandsJson)) {
    const parent = commandsJson[key];
    const child = Object.values(parent)[Object.values(parent).length - 1];

    for (const a of parent.aliases) {
        if (!commands[key.toUpperCase()]) commands[key.toUpperCase()] = [key];
        commands[key.toUpperCase()].push(a);
    }

    for (const a of child.aliases) {
        const childName = Object.keys(parent)[Object.keys(parent).length - 1]
        if (!commands[`${key.toUpperCase()}_${childName.toUpperCase()}`]) commands[`${key.toUpperCase()}_${childName.toUpperCase()}`] = [childName]
        commands[`${key.toUpperCase()}_${childName.toUpperCase()}`].push(a);
    }
}

const file = `export const CommandNames = ${JSON.stringify(commands, null, 4)};`;
console.log(file);

fs.writeFile(join(__dirname, "..", "src", "constants", "commandNames.ts"), file)
    .then(() => console.log("Generated!"));
