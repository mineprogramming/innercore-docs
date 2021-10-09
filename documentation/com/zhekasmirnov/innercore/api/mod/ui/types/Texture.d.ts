declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module types {
                            export class Texture extends java.lang.Object {
                                static class: java.lang.Class<Texture>;
                                animation: memory.BitmapWrap[];
                                bitmap: memory.BitmapWrap;
                                delay: number;
                                isAnimation: boolean;
                                /**
                                 * Constructs new static [[Texture]] with specified bitmap
                                 * @param bitmap [[android.graphics.Bitmap]] instance
                                 */
                                constructor(bitmap: android.graphics.Bitmap);
                                /**
                                 * Constructs new animated [[Texture]] with specified frames
                                 * @param bitmaps an array of [[android.graphics.Bitmap]] instances to be 
                                 * used as animation frames
                                 */
                                constructor(bitmaps: android.graphics.Bitmap[]);
                                /**
                                 * Constructs new static or animated [[Texture]] with specified frames
                                 * @param obj texture name or array of texture names for animated 
                                 * textures. Accepts raw gui textures names and style bindings
                                 * (formatted as "style:binding_name"). 
                                 * @param style [[Style]] object to look for style bindings. If not 
                                 * specified, default style is used
                                 */
                                constructor(obj: string | {[key: string]: string}, style?: UIStyle);
                                isAnimated(): boolean;
                                /**
                                 * Sets texture offsets in pixels from the upper left bound of the bitmap
                                 */
                                readOffset(obj: { x?: number, y?: number }): void;
                                /**
                                 * @returns frame number of the animation corresponding to current system time
                                 */
                                getFrame(): number;
                                /**
                                 * @param frame frame number
                                 * @returns [[android.graphics.Bitmap]] object containing animation frame 
                                 * for the corresponding frame number
                                 */
                                getBitmap(frame: number): android.graphics.Bitmap;
                                getBitmapWrap(frame: number): memory.BitmapWrap;
                                draw(canvas: android.graphics.Canvas, x: number, y: number, scale: number): void;
                                drawCutout(canvas: android.graphics.Canvas, cutout: android.graphics.RectF, x: number, y: number, scale: number): void;
                                /**
                                 * @returns width of the texture in pixels
                                 */
                                getWidth(): number;
                                /**
                                 * @returns height of the texture in pixels
                                 */
                                getHeight(): number;
                                /**
                                 * Resizes all the frames of the texture to the specified size
                                 */
                                resizeAll(width: number, height: number): void;
                                /**
                                 * Resizes all the frames by constant scale multiplier
                                 * @param scale scale to modify the frames by
                                 */
                                rescaleAll(scale: number): void;
                                /**
                                 * Resizes all the frames to match the first one
                                 */
                                fitAllToOneSize(): void;
                                /**
                                 * Releases all allocated resources, should be called when the texture 
                                 * is not longer needed 
                                 */
                                release(): void;
                            }
                        }
                    }
                }
            }
        }
    }
}