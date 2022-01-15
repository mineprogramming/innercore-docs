declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export class IElementProvider extends java.lang.Object {
                            static class: java.lang.Class<IElementProvider>;
                            constructor();
                            constructor(impl: {
                                addOrRefreshElement(element: elements.UIElement): void;
                                getStyleFor(element: elements.UIElement): types.UIStyle;
                                invalidateAll(): void;
                                releaseAll(): void;
                                removeElement(element: elements.UIElement): void;
                                resetAll(): void;
                                runCachePreparation(): void;
                                setBackgroundProvider(bgprovider: IBackgroundProvider): void;
                                setWindowStyle(style: types.UIStyle): void;
                            });
                            addOrRefreshElement(element: elements.UIElement): void;
                            getStyleFor(element: elements.UIElement): types.UIStyle;
                            invalidateAll(): void;
                            releaseAll(): void;
                            removeElement(element: elements.UIElement): void;
                            resetAll(): void;
                            runCachePreparation(): void;
                            setBackgroundProvider(bgprovider: IBackgroundProvider): void;
                            setWindowStyle(style: types.UIStyle): void;
                        }
                        export interface IElementProvider {
                            addOrRefreshElement(element: elements.UIElement): void;
                            getStyleFor(element: elements.UIElement): types.UIStyle;
                            invalidateAll(): void;
                            releaseAll(): void;
                            removeElement(element: elements.UIElement): void;
                            resetAll(): void;
                            runCachePreparation(): void;
                            setBackgroundProvider(bgprovider: IBackgroundProvider): void;
                            setWindowStyle(style: types.UIStyle): void;
                        }
                    }
                }
            }
        }
    }
}