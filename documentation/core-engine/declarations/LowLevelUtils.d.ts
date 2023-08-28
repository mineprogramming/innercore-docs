declare namespace LowLevelUtils {
    type Type_pack = "resource" | "behavior" | "behaviour";

    export function setLoadingTip(tip: string): void;
    export function addRuntimePack(typeStr: string, name: string)
}