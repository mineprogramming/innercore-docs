/**
 * Module used to manage armor's behavior
 */
declare namespace Armor {
    /**
     * Registers armor's hurt and tick functions
     * @param id armor item string id
     * @param funcs 
     */
    function registerFuncs(id: string, funcs: {
        tick: 
        /**
         * Called every tick if player wears the armor
         * @param item current armor item instance
         * @param index armor slot, one of the [[Native.ArmorType]] values
         * @param maxDamage maximum damage the armor 
         * @returns true, if changes to the item parameter should be applied, 
         * false otherwise
         */
        (item: ItemInstance, index: number, maxDamage: number) => boolean,
        
        hurt: 
        /**
         * Called when player deals damage if player wears the armor
         * @param params additional data about damage
         * @param params.attacker attacker entity or -1 if the damage was not 
         * caused by an entity
         * @param params.damage damage amout that was applied to the player
         * @param params.type damage type
         * @param params.b1 unknown param
         * @param params.b2 unknown param
         * @param item current armor item instance
         * @param index armor slot, one of the [[Native.ArmorType]] values
         * @param maxDamage maximum damage the armor 
         * @returns true, if changes to the item parameter should be applied, 
         * false otherwise
         */
        (params: {attacker: number, damage: number, type: number, b1: boolean, b2: boolean}, 
            item: ItemInstance, index: number, maxDamage: number) => boolean
    }): void;

    /**
     * Prevents armor from being damaged
     * @deprecated Currently not implemented
     * @param id armor item string id
     */
    function preventDamaging(id: string): void;
}
