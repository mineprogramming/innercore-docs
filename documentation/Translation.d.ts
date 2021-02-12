/**
 * Module that can be used to localize mods
 * All default strings (e.g. item names, windows titles, etc.) in the mod should 
 * be in English. Add translations to these strings using
 * [[Translation.addTranslation]]. For items and blocks translations are applied 
 * automatically. For the other strings, use [[Translation.translate]]
 */
declare namespace Translation {
    /**
     * Adds translations for specified object in several languages
     * @param name default string in English or name key
     * @param localization object containing two-letter language codes as keys
     * and localized strings in the specified language as values
     */
    function addTranslation(name: string, localization: object): void;

    /**
     * Translates string from English to current game language (if available). 
     * Add translations via [[Translation.addTranslation]] to apply them 
     * @param name default string in English or name key
     * @returns string in the current game language or input string if 
     * translation is not available
     */
    function translate(name: string): string;

    /**
     * @returns two-letter language code for current game language
     */
    function getLanguage(): string;
}