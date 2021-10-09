declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module types {
                            /**
                             * Object containing binding names as keys and string values as gui textures
                             * names
                             */
                            export type BindingSet = {[key: string]: string};
                            /**
                             * Object representing window style. Window styles allows to customize the 
                             * way your windows look like
                             */
                            export class UIStyle extends java.lang.Object {
                                static class: java.lang.Class<UIStyle>;
                                /**
                                 * Classic (0.16.*-like) windows style
                                 */
                                static readonly CLASSIC: UIStyle;
                                /**
                                 * Default windows style
                                 */
                                static readonly DEFAULT: UIStyle;
                                static readonly LEGACY: UIStyle;
                                /**
                                 * Adds gui texture name to use for the specified window part
                                 * @param key binding name
                                 * @param name gui texture name
                                 */
                                addBinding(key: string, name: string): void;
                                /**
                                 * Gets texture binding bt its name. Searches first in the additional 
                                 * styles, then in the current style, then in all its parents
                                 * @param key binding name
                                 * @param fallback value to return on binding failure
                                 * @returns gui texture name if current object, additional styles or one 
                                 * of the parents contains such a binding name, fallback otherwise. 
                                 */
                                getBinding(key: string, fallback: string): string;
                                /**
                                 * Adds an additional style object to the current style
                                 * @param style additional style object to be added
                                 */
                                addStyle(style: UIStyle): void;
                                /**
                                 * Constructs new [[UIStyle]] object
                                 * with bindings from [[UIStyle.DEFAULT]]
                                 */
                                constructor();
                                /**
                                 * Constructs new [[UIStyle]] object
                                 * from given [[BindingSet]] object
                                 */
                                constructor(bindings: BindingSet);
                                /**
                                 * @returns a copy of the current style. Only style bindings of the 
                                 * current style are copied, no parent/additional styles are copied
                                 */
                                copy(): UIStyle;
                                /**
                                 * Specifies parent style object for the current style
                                 * @param style style to be set as parent
                                 */
                                inherit(style: UIStyle): void;
                                /**
                                 * Adds all values from given [[BindingSet]] object
                                 */
                                addAllBindings(bindings: BindingSet): void;
                                /**
                                 * @returns [[java.util.Collection]] containing all binding names
                                 * from the current style object
                                 */
                                getAllBindingNames(): java.util.Collection<string>;
                                /**
                                 * If name is a style value (starts with "style:"), returns 
                                 * corresponding gui texture name, else returns input string
                                 * @param name style value or bitmap name
                                 */
                                getBitmapName(name: string): string;
                                getIntProperty(name: string, fallback: number): number;
                                getFloatProperty(name: string, fallback: number): number;
                                getDoubleProperty(name: string, fallback: number): number;
                                getStringProperty(name: string, fallback: string): string;
                                getBooleanProperty(name: string, fallback: boolean): boolean;
                                setProperty(name: string, value: any): void;
                                static getBitmapByDescription(style: UIStyle, description: string): memory.BitmapWrap;
                            }
                        }
                    }
                }
            }
        }
    }
}