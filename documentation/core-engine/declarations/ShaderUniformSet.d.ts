declare class ShaderUniformSet {
    lock(): ShaderUniformSet;
    unlock(): ShaderUniformSet;
    setUniformValueArr(uniformSet: string, uniformName: string, value: number[]): ShaderUniformSet;
    setUniformValue(uniformSet: string, uniformName: string, ...value: number[]): ShaderUniformSet;
}