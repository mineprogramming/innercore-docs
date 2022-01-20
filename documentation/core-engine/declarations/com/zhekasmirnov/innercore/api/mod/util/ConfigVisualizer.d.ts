declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module util {
                        export class ConfigVisualizer extends java.lang.Object {
                            static class: java.lang.Class<ConfigVisualizer>;
                            /**
                             * Constructs new [[ConfigVisualizer]] instance with specified elements 
                             * names prefix
                             * @param config configuration file to be loaded
                             * @param prefix elements names prefix used for this visualizer
                             */
                            constructor(config: innercore.mod.build.Config, prefix: string);
                            /**
                             * Constructs new [[ConfigVisualizer]] instance with default elements 
                             * names prefix (*config_vis*)
                             * @param config configuration file to be loaded
                             */
                            constructor(config: innercore.mod.build.Config);
                            /**
                             * Removes all elements with current element name prefix. In other 
                             * words, removes all elements that were created by this 
                             * [[ConfigVisualizer]] instance
                             * @param elements target [[WindowContent.elements]] section
                             */
                            clearVisualContent(elements: UI.ElementSet): void;
                            /**
                             * Creates elements in the window to visualize configuration file
                             * @param elements target [[WindowContent.elements]] section
                             * @param prefs top left position of the first element. Default position 
                             * is (0, 0, 0)
                             */
                            createVisualContent(elements: UI.ElementSet, prefs?: Partial<Vector>): void;
                        }
                    }
                }
            }
        }
    }
}