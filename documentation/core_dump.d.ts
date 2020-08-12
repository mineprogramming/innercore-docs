declare namespace MobRegistry {
    namespace customEntities {}
    namespace loadedEntities {}

    function registerEntity(name: any): any;

    function registerUpdatableAsEntity(updatable: any): any;

    function spawnEntityAsPrototype(typeName: any, coords: any, extraData: any): any;

    function getEntityUpdatable(entity: number): any;

    function registerNativeEntity(entity: number): any;

    function registerEntityRemove(entity: number): any;

    function resetEngine(): any;
}

declare namespace MobSpawnRegistry {
    namespace spawnData {}

    function registerSpawn(entityType: any, rarity: number, condition: any, denyNaturalDespawn: any): any;

    function getRandomSpawn(rarityMultiplier: any): any;

    function getRandPosition(): any;

    function executeSpawn(spawn: any, position: any): any;
    var counter: number;

    function tick(): any;

    function onChunkGenerated(x: number, z: number): any;
}


declare class Texture {}
declare function EntityModel(parentModel: any): any;
declare function EntityModelWatcher(entity: number, model: any): any;
declare function EntityAIWatcher(customPrototype: any): any;

declare namespace Animation {
    function base(x: number, y: number, z: number): any;

    function Base(x: number, y: number, z: number): any;

    function item(x: number, y: number, z: number): any;

    function Item(x: number, y: number, z: number): any;
}
declare namespace BlockRenderer {
    class Model {

    }
}
declare function ItemExtraData(): any;
