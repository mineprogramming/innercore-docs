declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module types {
                            /**
                             * Object used to manipulate frame textures. Frame texture allows to 
                             */
                            export class FrameTexture extends java.lang.Object {
                                static class: java.lang.Class<FrameTexture>;
                                /** Specifies bottom left corner of the frame */
                                static readonly CORNER_BOTTOM_LEFT: number;
                                /** Specifies bottom right corner of the frame */
                                static readonly CORNER_BOTTOM_RIGHT: number;
                                /** Specifies top left corner of the frame */
                                static readonly CORNER_TOP_LEFT: number;
                                /** Specifies top right corner of the frame */
                                static readonly CORNER_TOP_RIGHT: number;
                                /** Specifies bottom side of the frame */
                                static readonly SIDE_BOTTOM: number;
                                /** Specifies left side of the frame */
                                static readonly SIDE_LEFT: number;
                                /** Specifies right side of the frame */
                                static readonly SIDE_RIGHT: number;
                                /** Specifies top side of the frame */
                                static readonly SIDE_TOP: number;
                                constructor(source: android.graphics.Bitmap);
                                /**
                                 * Expands side of the texture by specified amount of pixels
                                 * @param sideId side of the texture, one of the 
                                 * **FrameTexture.SIDE_LEFT**, **FrameTexture.SIDE_RIGHT**, 
                                 * **FrameTexture.SIDE_UP**, **FrameTexture.SIDE_DOWN** constants
                                 * @returns expanded [[android.graphics.Bitmap]] instance with the frame
                                 */
                                expandSide(sideId: number, pixels: number): android.graphics.Bitmap;
                                /**
                                 * Expands texture to the specified side, filling the middle with 
                                 * specified color
                                 * @param color integer color value produced by [[android.graphics.Color]] 
                                 * class
                                 * @param sides array of booleans marking whether the side should be 
                                 * expanded or not. The order of the sides is
                                 * **FrameTexture.SIDE_LEFT**, **FrameTexture.SIDE_RIGHT**, 
                                 * **FrameTexture.SIDE_UP**, **FrameTexture.SIDE_DOWN**
                                 * @returns expanded [[android.graphics.Bitmap]] instance with the frame
                                 */
                                expand(width: number, height: number, color: number, sides: [boolean, boolean, boolean, boolean]): android.graphics.Bitmap;
                                expand(width: number, height: number, color: number): android.graphics.Bitmap;
                                /**
                                 * Expands texture to the specified side, filling the middle with 
                                 * specified color
                                 * @param scale scale of the created bitmap
                                 * @param color integer color value produced by [[android.graphics.Color]] 
                                 * class
                                 * @param sides array of booleans marking whether the side should be 
                                 * expanded or not. See [[FrameTexture.expand]] parameters for details. 
                                 * Default behavior is to scale all sides
                                 * @returns expanded and scaled [[android.graphics.Bitmap]] instance with
                                 */
                                expandAndScale(width: number, height: number, scale: number, color: number, sides: [boolean, boolean, boolean, boolean]): android.graphics.Bitmap;
                                expandAndScale(width: number, height: number, scale: number, color: number): android.graphics.Bitmap;
                                /**
                                 * @returns original frame texture source stored in 
                                 * [[android.graphics.Bitmap]] instance
                                 */
                                getSource(): android.graphics.Bitmap;
                                /**
                                 * @param side side of the texture, one of the 
                                 * **FrameTexture.SIDE_LEFT**, **FrameTexture.SIDE_RIGHT**, 
                                 * **FrameTexture.SIDE_UP**, **FrameTexture.SIDE_DOWN** constants
                                 * @returns texture side source extracted from the original frame 
                                 * texture source stored in [[android.graphics.Bitmap]] instance
                                 */
                                getSideSource(side: number): android.graphics.Bitmap;
                                /**
                                 * @returns [[android.graphics.Color]] integer color value
                                 * of the central pixel of the source texture
                                 */
                                getCentralColor(): number;
                                draw(canvas: android.graphics.Canvas, rect: android.graphics.RectF, scale: number, color: number, sides: [boolean, boolean, boolean, boolean]): void;
                            }
                        }
                    }
                }
            }
        }
    }
}