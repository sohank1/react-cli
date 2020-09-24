import * as _ from 'lodash';
import { CommandNames } from "../constants/CommandNames";

export class Parser {

    /**
     * Returns parsed args from the user's input.
     * Does not have the first word "react-cli" in this array.
     */
    public input = process.argv.slice(3);

    /**
     * Returns the parsed command to run in "PascalCase".
     */
    public commandName(): string {
        console.log("input", this.input)
        for (const constant of Object.keys(CommandNames).reverse()) {
            for (let i = 0; i < 5; i++)
                if (CommandNames[constant].includes(this.input[i])) return _.camelCase(constant).replaceAt(0, _.camelCase(constant)[0].toUpperCase())
        }
    }
}

export const parser = new Parser();

