declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module runtime {
                export module logger {
                    export class EventLogger extends java.lang.Object {
                        static class: java.lang.Class<EventLogger>;
                        getMessages(filter: EventLogger.Filter): java.util.List<EventLogger.Message>;
                        constructor();
                        section(section: string): void;
                        debug(tag: string, message: string): void;
                        info(tag: string, message: string): void;
                        fault(tag: string, message: string, error: java.lang.Throwable): void;
                        fault(tag: string, message: string): void;
                        getStream(type: EventLogger.MessageType, tag: string): java.io.OutputStream;
                        clear(): void;
                    }
                    export module EventLogger {
                        export class MessageType extends java.lang.Object {
                            static class: java.lang.Class<MessageType>;
                            static readonly DEBUG: MessageType;
                            static readonly INFO: MessageType;
                            static readonly FAULT: MessageType;
                            static readonly EXCEPTION: MessageType;
                            static readonly STACKTRACE: MessageType;
                        }
                        export class Message extends java.lang.Object {
                            static class: java.lang.Class<Message>;
                            readonly type: java.lang.Object;
                            readonly tag: string;
                            readonly message: string;
                            readonly section: string;
                        }
                        export class Filter extends java.lang.Object {
                            static class: java.lang.Class<Filter>;
                            filter(message: Message): boolean;
                            constructor();
                            constructor(impl: {
                                filter: (message: Message) => boolean
                            });
                        }
                    }
                }
            }
        }
    }
}