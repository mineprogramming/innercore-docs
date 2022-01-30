declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module mod {
                    export class ModGraphics extends globalThis.java.lang.Object {
                        static class: globalThis.java.lang.Class<ModGraphics>;
                        constructor();
                        constructor(dir: globalThis.java.io.File);
                        getNamedGroup(name: string): globalThis.java.util.HashMap<string, android.graphics.Bitmap>;
                        getGroup(name: string): globalThis.java.util.Collection<android.graphics.Bitmap>;
                        getAllBitmaps(): globalThis.java.util.List<android.graphics.Bitmap>;
                    }
                }
            }
        }
    }
}