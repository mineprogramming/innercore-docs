declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module window {
                            export abstract class UIWindowStandard extends UIWindowGroup {
                                static class: java.lang.Class<UIWindowStandard>;
                                constructor(content: StandardWindowContent);
                                getContent(): StandardWindowContent;
                                getStyleSafe(): types.UIStyle;
                                setContent(content: StandardWindowContent): void;
                            }
                        }
                    }
                }
            }
        }
    }
}