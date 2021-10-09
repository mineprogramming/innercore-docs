declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module window {
                            export class WindowParent extends java.lang.Object {
                                static class: java.lang.Class<WindowParent>;
                                static openWindow(window: UIWindow): void;
                                static closeWindow(window: UIWindow): void;
                                static applyWindowInsets(window: UIWindow, insets: android.view.WindowInsets): void;
                                static releaseWindowLayout(layout: android.view.View): void;
                            }
                        }
                    }
                }
            }
        }
    }
}