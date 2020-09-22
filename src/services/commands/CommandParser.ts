export class CommandParser {

    public parse(): string[] {
        return process.argv.slice(2);
    }
}

export const commandParser = new CommandParser();

