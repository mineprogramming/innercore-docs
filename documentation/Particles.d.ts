declare namespace Particles {
    function addParticle(type: number, x: number, y: number, z: number, vx: number, vy: number, vz: number, params?: number): void;

    function addFarParticle(type: number, x: number, y: number, z: number, vx: number, vy: number, vz: number, params?: number): void;

    function registerParticleType(...args): void;


    class ParticleEmitter {
        constructor(x: number, y: number, z: number);

        move(x: number, y: number, z: number): void;
        moveTo(x: number, y: number, z: number): void;
        setVelocity(x: number, y: number, z: number): void;

        attachTo(entity: number): void;
        attachTo(entity: number, x: number, y: number, z: number): void;

        detach(): void;
        stop(): void;

        getPosition(): Vector;
        setEmitRelatively(enable: boolean): void

        emit(type: number | ParticleType, data: number, x: number, y: number, z: number): void;
        emit(type: number | ParticleType, data: number, x: number, y: number, z: number, vx: number, vy: number, vz: number): void;
        emit(type: number | ParticleType, data: number, x: number, y: number, z: number, vx: number, vy: number, vz: number, ax: number, ay: number, az: number): void;

        registerParticleType(description: object): ParticleType;
    }
    class ParticleType { }
}