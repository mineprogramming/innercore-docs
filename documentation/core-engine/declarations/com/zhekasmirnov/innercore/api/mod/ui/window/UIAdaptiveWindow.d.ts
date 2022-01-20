declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module window {
                            export class UIAdaptiveWindow extends UIWindowGroup {
                                static class: java.lang.Class<UIAdaptiveWindow>;
                                constructor(content: WindowContent);
                                setContent(content: WindowContent): void;
                                /**
                                 * Sets style profile for the current [[AdaptiveWindow]]
                                 * @param profile 0 for classic profile, 1 for default profile
                                 */
                                setProfile(profile: 0 | 1): void;
                                /**
                                 * Forces [[AdaptiveWindow]] to be displayed using some profile
                                 * @param profile 0 for classic profile, 1 for default profile or -1 not
                                 * to force any profile. By default forced profile is -1
                                 */
                                setForcedProfile(profile: 0 | 1): void;
                                open(): void;
                            }
                        }
                    }
                }
            }
        }
    }
}