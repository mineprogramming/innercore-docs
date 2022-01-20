declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export class ContentProvider extends java.lang.Object {
                            static class: java.lang.Class<ContentProvider>;
                            content: window.WindowContent;
                            drawing: object;
                            drawingWatcher: util.ScriptableWatcher;
                            elementMap: java.util.HashMap<string, elements.UIElement>;
                            elements: object;
                            window: window.UIWindow;
                            constructor(window: window.UIWindow);
                            setContentObject(content: window.WindowContent): void;
                            setupElements(): void;
                            refreshElements(): void;
                            setupDrawing(): void;
                            refreshDrawing(): void;
                            invalidateAllContent(): void;
                            toString(): string;
                        }
                    }
                }
            }
        }
    }
}