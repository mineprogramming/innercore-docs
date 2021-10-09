declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module window {
                            export class UIWindowElementDrawable extends android.graphics.drawable.Drawable implements IElementProvider, types.ITouchEventListener {
                                static class: java.lang.Class<UIWindowElementDrawable>;
                                isDebugEnabled: boolean;
                                window: UIWindow;
                                windowElements: java.util.ArrayList<elements.UIElement>;
                                constructor(win: UIWindow);
                                setBackgroundProvider(provider: IBackgroundProvider): void;
                                addOrRefreshElement(element: elements.UIElement): void;
                                removeElement(element: elements.UIElement): void;
                                releaseAll(): void;
                                resetAll(): void;
                                invalidateAll(): void;
                                runCachePreparation(): void;
                                getStyleFor(element: elements.UIElement): types.UIStyle;
                                setWindowStyle(style: types.UIStyle): void;
                                draw(canvas: NonNullable<android.graphics.Canvas>): void;
                                drawDirty(canvas: android.graphics.Canvas, scale: number): void;
                                onTouchEvent(event: types.TouchEvent): void;
                                setAlpha(alpha: number): void;
                                /* Just for TS not to be angry */
                                setColorFilter(par1: number, par2: android.graphics.PorterDuff.Mode): void;
                                setColorFilter(filter: Nullable<android.graphics.ColorFilter>): void;
                                /** @returns -3 */
                                getOpacity(): number;
                                toString(): string;
                            }
                        }
                    }
                }
            }
        }
    }
}