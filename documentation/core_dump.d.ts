declare namespace TileEntity {
    namespace tileEntityPrototypes {}
    namespace tileEntityList {}

    function resetEngine(): any;

    function registerPrototype(blockID: any, customPrototype: any): any;

    function getPrototype(blockID: any): any;

    function isTileEntityBlock(blockID: any): any;

    function createTileEntityForPrototype(Prototype: any, addToUpdate: any): any;

    function addTileEntity(x: number, y: number, z: number): any;

    function addUpdatableAsTileEntity(updatable: any): any;

    function getTileEntity(x: number, y: number, z: number): any;

    function destroyTileEntity(tileEntity: number): any;

    function destroyTileEntityAtCoords(x: number, y: number, z: number): any;

    function isTileEntityLoaded(tileEntity: number): any;

    function checkTileEntityForIndex(index: number): any;

    function CheckTileEntities(): any;

    function DeployDestroyChecker(tileEntity: number): any;
}
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
declare function GameObject(name: any, Prototype: any): any;
declare namespace GameObjectRegistry {
    namespace gameObjectTypes {}
    namespace activeGameObjects {}

    function genUniqueName(name: any): any;

    function registerClass(gameObjectClass: any): any;

    function deployGameObject(gameobject: any): any;

    function addGameObject(gameobject: any): any;

    function removeGameObject(gameobject: any): any;

    function resetEngine(): any;

    function getAllByType(type: any, clone: any): any;

    function callForType(): any;

    function callForTypeSafe(): any;
}
declare function Render(params: any): any;
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
declare namespace Particles {}
declare namespace IDRegistry {}
declare namespace IDData {
    namespace item {}
    namespace block {}
}
declare namespace BlockRenderer {}
declare namespace ICRender {}
declare namespace LiquidRegistry {
    var liquidStorageSaverId: number;
    namespace liquids {
        namespace water {
            var key: string;
            var name: string;
            namespace uiTextures {}
            namespace uiCache {}
            namespace modelTextures {}

            function addUITexture(name: any): any;

            function addModelTexture(name: any): any;
        }
        namespace lava {
            var key: string;
            var name: string;
            namespace uiTextures {}
            namespace uiCache {}
            namespace modelTextures {}

            function addUITexture(name: any): any;

            function addModelTexture(name: any): any;
        }
        namespace milk {
            var key: string;
            var name: string;
            namespace uiTextures {}
            namespace uiCache {}
            namespace modelTextures {}

            function addUITexture(name: any): any;

            function addModelTexture(name: any): any;
        }
    }

    function registerLiquid(key: number, name: any, uiTextures: any, modelTextures: any): any;

    function getLiquidData(key: number): any;

    function isExists(key: number): any;

    function getLiquidName(key: number): any;

    function getLiquidUITexture(key: number, width: any, height: any): any;

    function getLiquidUIBitmap(key: number, width: any, height: any): any;
    namespace FullByEmpty {}
    namespace EmptyByFull {}

    function registerItem(liquid: any, empty: number, full: any): any;

    function getEmptyItem(id: number, data: number): any;

    function getItemLiquid(id: number, data: number): any;

    function getFullItem(id: number, data: number, liquid: any): any;

    function Storage(tileEntity: number): any;
}
declare function ItemExtraData(): any;
declare function RenderMesh(): any;