/**
 * Module used to simplify generation tasks in mods logic
 */
declare namespace GenerationUtils {
    /**
     * @param id numeric tile id
     * @returns true if block is solid and light blocking block, false otherwise
     */
    function isTerrainBlock(id: number): void;

    /**
     * @param id numeric tile id
     * @returns true if block is transparent, false otherwise
     */
    function isTransparentBlock(id: number): void;

    /**
     * @returns true, if one can see sky from the specified position, false 
     * othrwise
     */
    function canSeeSky(x: number, y: number, z: number): void;

    /**
     * Generates random x and z coordinates inside specified chunk
     * @param cx chunk x coordinate
     * @param cz chunk z coordinate
     */
    function randomXZ(cx: number, cz: number): {x: number, z: number};

    /**
     * Generates random coordinates inside specified chunk
     * @param cx chunk x coordinate
     * @param cz chunk z coordinate
     * @param lowest lowest possible y coordinate. Default is 0
     * @param highest highest possible y coordinate. Default is 128
     */
    function randomCoords(cx: number, cz: number, lowest?: number, highest?: number): Vector;

    /**
     * Finds nearest to the specified y coordinate empty space on the specified 
     * x and z coordinates
     */
    function findSurface(x: number, y: number, z: number): void;

    /**
     * Finds nearest to y=128 coordinate empty space on the specified x and z 
     * coordinates
     */
    function findHighSurface(x: number, z: number): void;

    /**
     * Finds nearest to y=64 coordinate empty space on the specified x and z 
     * coordinates
     */
    function findLowSurface(x: number, z: number): void;

    function lockInBlock(id: number, data: number, checkerTile: any, checkerMode: any): void;

    function setLockedBlock(x: number, y: number, z: number): void;

    /**
     * Generates ore vein on the specified coordinates using specified params
     * @deprecated Consider using [[GenerationUtils.generateOre]] instead
     * @param params generation params
     * @param params.id ore tile id
     * @param params.data ore data
     * @param params.noStoneCheck if true, no check for stone is performed so 
     * the ore may be generated in the air. Use this to debug ore generation in 
     * the superflat worlds
     * @param params.amount amount of the ore to be generated
     * @param params.ratio if amount is not specified, used to calculate amount
     * @param params.size if amount is not specified, used to calculate amount, 
     * using simple formula
     * ```
     * size * ratio * 3
     * ```
     */
    function genMinable(x: number, y: number, z: number, params: {id: number, data: number, noStoneCheck: number, amount?: number, ratio?: number,  size?: number}): void;

    /**
     * Generates ore vein on the specified coordinates
     * @param id ore tile id
     * @param data ore data
     * @param amount ore amount, use number at least 6 to be able to find 
     * generated ore. Note that amount doesn't mean blocks count, it is just an 
     * input value for generation algorithm
     * @param noStoneCheck if true, no check for stone is performed so the ore 
     * may be generated in the air. Use this to debug ore generation in the 
     * superflat worlds
     */
    function generateOre(x: number, y: number, z: number, id: number, data: number, amount: number, noStoneCheck: boolean): void;
}