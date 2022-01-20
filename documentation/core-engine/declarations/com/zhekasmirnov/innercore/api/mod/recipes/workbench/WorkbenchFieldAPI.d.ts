declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module recipes {
                        export module workbench {
                            export class WorkbenchFieldAPI extends java.lang.Object {
                                static class: java.lang.Class<WorkbenchFieldAPI>;
                                readonly container: WorkbenchField;
                                constructor(field: WorkbenchField);
                                getFieldSlot(i: number): ui.container.AbstractSlot;
                                decreaseFieldSlot(i: number): void;
                                prevent(): void;
                                isPrevented(): boolean;
                            }
                        }
                    }
                }
            }
        }
    }
}