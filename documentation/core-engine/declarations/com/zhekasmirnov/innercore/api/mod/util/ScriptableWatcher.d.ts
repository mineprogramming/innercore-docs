declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module util {
                        export class ScriptableWatcher extends java.lang.Object {
                            static class: java.lang.Class<ScriptableWatcher>;
                            object: object;
                            constructor(obj: object);
                            isDirty(): boolean;
                            validate(): void;
                            invalidate(): void;
                            setTarget(obj: object): void;
                            refresh(): void;
                            toString(): string;
                        }
                    }
                }
            }
        }
    }
}