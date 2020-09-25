/**
 * Represents the user's react-cli.json file.
 */
export interface SettingsType {
    /**
     * The language that the user's project is in.
     */
    language: string;

    /**
     * The path to the user's components folder.
     * This is not required.
     * It will default to src/components.
     */
    componentsUrl?: string;

    /**
     * The path to the user's pages folder.
     * This is not required.
     * It will default to src/pages.
     */
    pagesUrl?: string;
}