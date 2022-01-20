/**
 * Class to work with vanilla blocks parameters
 */
declare class BlockState
implements Tile {

    /**Data of the block */
    readonly data: number;

    /**Numeric ID of the block */
    readonly id: number;

    /**
     * Constructs new BlockState object
     * from given id and data
     */
    constructor(id: number, data: number);

    /**
     * Constructs new BlockState object
     * from given id and states object
     */
    constructor(id: number, scriptable: {[key: number]: number});

    /**
     * @returns id of the block
     */
    getId(): number;

    /**
     * @returns data of the block
     */
    getData(): number;

    /**
     * @returns id of the blockstate in runtime
     */
    getRuntimeId(): number;

    /**
     * @returns whether the state is valid
     */
    isValidState(): boolean;

    /**
     * @returns state of the given number
     * if it's present in the following object
     */
    getState(state: number): number;

    /**
     * @returns whether the state by given number
     * is present in the following object
     */
    hasState(state: number): boolean;

    /**
     * Adds state to the following object
     * @returns BlockState object itself
     */
    addState(state: number, value: number): BlockState;

    /**
     * Adds states to the following object
     * from given java.util.Map instance
     * @returns BlockState object itself
     */
    addStates(states: java.util.Map<unknown, number>): BlockState;

    /**
     * Adds states to the following object
     * from given JS object instance
     * @returns BlockState object itself
     */
    addStates(states: object): BlockState;

    /**
     * @returns all states from following object
     * in java.util.Map instance
     */
    getStates(): java.util.Map<number, number>;

    /**
     * @returns all NAMED states from following object
     * in java.util.Map instance
     */
    getNamedStates(): java.util.Map<string, number>;

    /**
     * @returns all states from following object
     * in JS object instance
     */
    getStatesScriptable(): {[key: string]: number};

    /**
     * @returns all NAMED states from following object
     * in JS object instance
     */
    getNamedStatesScriptable(): {[key: string]: number};

    /**
     * @returns string representation of the following object
     */
    toString(): string;

    /**
     * @returns whether the following object is equal to given,
     * according to different parameters
     */
    equals(object: any): boolean;

}