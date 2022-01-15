declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export class IBackgroundProvider extends java.lang.Object {
                            static class: java.lang.Class<IBackgroundProvider>;
                            constructor();
                            constructor(impl: {
                                addDrawing(idrawing: background.IDrawing): void;
                                clearAll(): void;
                                prepareCache(): void;
                                releaseCache(): void;
                                setBackgroundColor(color: number): void;
                            });
                            addDrawing(idrawing: background.IDrawing): void;
                            clearAll(): void;
                            prepareCache(): void;
                            releaseCache(): void;
                            setBackgroundColor(color: number): void;
                        }
                    }
                }
            }
        }
    }
}