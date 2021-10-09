declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module window {
                            export class UIWindowBackgroundDrawable extends android.graphics.drawable.Drawable implements IBackgroundProvider {
                                static class: java.lang.Class<UIWindowBackgroundDrawable>;
                                window: UIWindow;
                                constructor(win: UIWindow);
                                setBackgroundColor(color: number): void;
                                addDrawing(drawing: background.IDrawing): void;
                                clearAll(): void;
                                draw(canvas: NonNullable<android.graphics.Canvas>): void;
                                prepareCache(): void;
                                releaseCache(): void;
                                setAlpha(alpha: number): void;
                                /* Just for TS not to be angry */
                                setColorFilter(par1: number, par2: android.graphics.PorterDuff.Mode): void;
                                setColorFilter(filter: Nullable<android.graphics.ColorFilter>): void;
                                /** @returns -3 */
                                getOpacity(): number;
                            }
                        }
                    }
                }
            }
        }
    }
}