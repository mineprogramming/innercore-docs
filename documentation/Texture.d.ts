/**
 * Class representing texture that can be animated
 * @deprecated no longer supported and should not be used in new code
 */
declare class Texture {
    /**
     * Creates new [[Texture]] object using specified file path
     */
    constructor(path: string);

    /**
     * Sets texture file path
     * @returns reference to itself to be used in sequential calls
     */
    setTexture(path: string): Texture;

    /**
     * Specifies texture resolution. If not equal to file dimensions, the image
     * will be stretched to fit the resolution
     * @returns reference to itself to be used in sequential calls
     */
    setResolution(w: number, h: number): Texture;

    /**
     * Makes texture animated
     * @param animation array of paths to the animation frames. Each frame should
     * be stored in a separate file
     * @param delay specifies each frame delay in ticks
     * @returns reference to itself to be used in sequential calls
     */
    setAnimation(animation: string[], delay: number): Texture;

    /**
     * Resets animation
     * @returns reference to itself to be used in sequential calls
     */
    resetAnimation(token: number): Texture;

    /**
     * @returns current animation frame
     */
    getTexture(token: number): string;

    /**
     * @returns texture resolution after recalculating it with pixel scale
     */
    getResolution(): { w: number, h: number };

    /**
     * Sets pixel scale for the texture
     */
    setPixelScale(scale: number): Texture;
}