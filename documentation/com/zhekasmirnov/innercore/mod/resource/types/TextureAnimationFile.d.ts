declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module mod {
                export module resource {
                    export module types {
                        export class TextureAnimationFile extends ResourceFile {
                            static class: java.lang.Class<TextureAnimationFile>;
                            constructor(rfile: ResourceFile);
                            constructor(path: NonNullable<string>);
                            constructAnimation(): org.json.JSONObject;
                            isValid(): boolean;
                        }
                    }
                }
            }
        }
    }
}