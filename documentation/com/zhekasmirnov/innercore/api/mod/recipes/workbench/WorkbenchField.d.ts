declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module recipes {
                        export module workbench {
                            export class WorkbenchField extends java.lang.Object {
                                static class: java.lang.Class<WorkbenchField>;
                                constructor();
                                constructor(impl: {
                                    asScriptableField: () => ui.container.AbstractSlot[],
                                    getFieldSlot: (i: number) => ui.container.AbstractSlot;
                                });
                                asScriptableField(): ui.container.AbstractSlot[];
                                getFieldSlot(i: number): ui.container.AbstractSlot;
                            }
                        }
                    }
                }
            }
        }
    }
}