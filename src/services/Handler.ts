import { promises as fs } from "fs";
import { join } from "path";
import * as commandsJson from "../commands/commands.json";
import { parser } from "./Parser";

export class Handler {

    /**
     * Runs the correct command based on the user's input.
     * Also uses the Parser Service to get the parsed command name that the user entered.
     */
    public async runCommand(): Promise<void> {
        const words = parser.commandName().split(" ");

        let commandPath = "src/commands";
        for (const w of words) {
            if (words[words.length - 1] === w) commandPath += `/${words.join("")}`;
            else commandPath += `/${w}`;
        }
        commandPath += `/${words.join("")}.ts`;

        const fileExports = await import(commandPath);
        fileExports[words.join()].run();

    }
}


export const handler = new Handler();