import { promises as fs } from 'fs';
import { join } from 'path';
import { DefaultPaths } from 'src/constants/DefaultPaths';
import { SettingsType } from "./SettingsType";

export class SettingsJson {

    /**
     * Returns the user's settings json.
     */
    public async get(): Promise<SettingsType> {
        const file = await fs.readFile(join(process.cwd(), "react-cli.json"));
        const data = <SettingsType>JSON.parse(file.toString());

        if (!data.componentsUrl) data.componentsUrl = DefaultPaths.COMPONENTS;
        if (!data.pagesUrl) data.pagesUrl = DefaultPaths.PAGES;

        return data;
    }

    /**
     * Returns only the user's language.
     */
    public async getLanguage(): Promise<string> {
        return (await this.get()).language;
    }

    /**
     * Returns only the url to the components folder.
     */
    public async getComponentsUrl(): Promise<string> {
        return (await this.get()).componentsUrl;
    }

    /**
     * Returns only the url to the pages folder.
     */
    public async getPagesUrl(): Promise<string> {
        return (await this.get()).pagesUrl;
    }

}