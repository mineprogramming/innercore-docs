/**
 * Module to work with vanilla and custom particles
 */
declare namespace Particles {
    /**
     * Custom particle's animator params object
     */
    interface AnimatorDescription {
        /**
         * Animator's period in ticks, if it's less than zero or not listed,
         * it'll be particle's lifetime.
         */
        period?: number;
        /**
         * Appearance moment in the proportions of the period, default is 0
         */
        fadeIn?: number;
        /**
         * Disappearance moment in the proportions of the period, default is 0
         */
        fadeOut?: number;
        /**
         * Initial value, default is 0
         */
        start?: number;
        /**
         * Ending value, default is 0
         */
        end?: number;
    }
    /**
     * Custom particle's sub-emitter params object
     */
    interface SubEmitterDescription {
        /**
         * Emitted particle's type numeric id
         */
        type: number;
        /**
         * Additional data of the emitted particle, default is 0
         */
        data?: number;
        /**
         * Triggering chance from 0 to 1, default is 1
         */
        chance?: number;
        /**
         * Particles count for the single time, default is 1
         */
        count?: number;
        /**
         * If true, the new particle will have the velocity of the particle, 
         * that calls the sub-emitter, at the time of invocation, default is false
         */
        keepVelocity?: boolean;
        /**
         * If true, the new particle will save the emitter that was used for its creation if it had been.
         * Note: in this case we are talking about emitters, not about sub-emitters.
         */
        keepEmitter?: boolean;
        /**
         * If this value is listed, emitted particles will receive random initial speed,
         * that isn't more than value * sqrt(3)
         */
        randomize?: number;
    }
    /**
     * Custom particle type params object
     */
    interface ParticleDescription {
        /**
         * Particle's texture name from 'particle-atlas' resource directory
         */
        texture: string;
        /**
         * Minimum and maximum size of the particle
         */
        size: [number, number];
        /**
         * Minimum and maximum particle's lifetime in ticks
         */
        lifetime: [number, number];
        /**
         * Particle's render type:
         * 0 - additive,
         * 1 - without blending,
         * 2 - with blending.
         */
        render?: 0 | 1 | 2;
        /**
         * Four component color of the particle (RGBA), default is [1, 1, 1, 1]
         */
        color?: [number, number, number, number];
        /**
         * If true, particle won't go through blocks. It reduces performance if
         * there are lots of these particles, default is false.
         */
        collision?: boolean;
        /**
         * Particle's initial velocity, if it's spawned without initial speed parameter.
         * Default is [0, 0, 0]
         */
        velocity?: [number, number, number];
        /**
         * Particle's acceleration, if it's spawned without this parameter.
         * Default is [0, 0, 0]
         */
        acceleration?: [number, number, number];
        /**
         * Particle's speed modifier in the air and when touching a block.
         * Usually it's a number between 0 and 1, close to 1, but in fact it can be any value.
         * Both values are 1 by default.
         */
        friction?: {
            air?: number;
            /**
             * Note: this value makes sense only if collision param is true
             */
            block?: number;
        }
        /**
         * If false, particle's speed will be set to zero when touching a block.
         * If true, the speed will be saved. This value makes sense only if collision param is true
         */
        keepVelocityAfterImpact?: boolean;
        /**
         * Particle will lose given number of ticks from its maximum lifetime, when touching a block.
         * This value makes sense only if collision param is true. Default is 0
         */
        addLifetimeAfterImpact?: number;
        /**
         * If true, the particle will be exposed to the world's lighting.
         * If false, the particle will always have maximum brightness.
         * Enabling this parameter may reduce the performance when having lots of particles. Default is false.
         */
        isUsingBlockLight?: boolean;
        /**
         * Animators allow to change some properties of the specific particle depending on the time,
         * each animator is described as an object of definite format and can be not described, if it's not needed.
         */
        animators?: {
            /**
             * Describes the behaviour of particle's size, 
             * for the unit size the size from the type's description is taken.
             */
            size?: AnimatorDescription;
            /**
             * Describes the particle's opacity, for the unit value
             * the `alpha` in the `color` parameter from the type's description is taken.
             */
            alpha?: AnimatorDescription;
            /**
             * Describes the animation frame, if particle supports it.
             * Must have the value between 0 and 1
             * @deprecated use icon instead
             */
            texture?: AnimatorDescription;
            /**
             * Describes the animation frame, if particle supports it.
             * Must have the value between 0 and 1
             */
            icon?: AnimatorDescription;
        }
        /**
         * Sub-emitters (don't confuse with emitters) describe how specific particle can emit other particles,
         * according to some events, that may happen to it. Each sub-emitter is described as an object of definite format
         * and can be not described if it's not needed.
         */
        emitters?: {
            /**
             * Called every tick
             */
            idle?: SubEmitterDescription;
            /**
             * Called when touching a block, makes sense only if collision parameter is true
             */
            impact?: SubEmitterDescription;
            /**
             * Called at the end of particle's life
             */
            death?: SubEmitterDescription;
        }
    }
    /**
     * Spawns particle of given type on given coords 
     * with given velocity and additional parameters in the world.
     * Note: called only on the client side! Use packets to spawn particles for multiple players.
     * @param type particle type's numeric id. If you want to spawn vanilla particles,
     * see [[EParticleType]] and [[Native.ParticleType]] enums.
     * @param vx velocity for the particle by X-axis
     * @param vy velocity for the particle by Y-axis
     * @param vz velocity for the particle by Z-axis
     * @param data additional params, currently don't know how to use, just put 0
     */
    function addParticle(type: number, x: number, y: number, z: number, vx: number, vy: number, vz: number, data?: number): void;
    /**
     * Same as [[Particles.addParticle]], but applies 'far' shader to the particle
     */
    function addFarParticle(type: number, x: number, y: number, z: number, vx: number, vy: number, vz: number, data?: number): void;
    /**
     * Registers new custom particle type of given params object
     * @returns created particle type's numeric id
     */
    function registerParticleType(descriptor: ParticleDescription): number;
    /**
     * @returns [[Particles.ParticleType]] object of the particle by given id, if it exists
     */
    function getParticleTypeById(id: number): ParticleType;
    /**
     * Class to create custom particle types.
     * Mostly for internal use, you can use [[Particles.registerParticleType]] instead
     */
    class ParticleType {
        /**
         * Constructs new [[Particles.ParticleType]] object from given needed params
         */
        constructor(textureName: string, minU: number, minV: number, maxU: number, maxV: number, textureCountHorizontal: number, textureCountVertical: number, isUsingBlockLight: boolean);
        /**
         * Constructs new [[Particles.ParticleType]] object from given needed params
         * (unfinished documentation)
         */
        constructor(locationName: string, isUsingBlockLight: boolean, uv: number[], textureCountHorizontal: number, textureCountVertical: number);
        /**
         * Constructs new [[Particles.ParticleType]] object from given descriptor object
         */
        constructor(descriptor: ParticleDescription);
        /**
         * @returns following particle type's numeric id
         */
        getId(): number;
        setRenderType(renderType: 0 | 1 | 2): void;
        setRebuildDelay(delay: number): void;
        setColor(r: number, g: number, b: number, a: number): void;
        setColor(r: number, g: number, b: number, a: number, r2: number, g2: number, b2: number, a2: number): void;
        setCollisionParams(collision: boolean, keepVelocityAfterImpact: boolean, addLifetimeAfterImpact: number): void;
        setFriction(air: number, block: number): void;
        setSize(min: number, max: number): void;
        setLifetime(min: number, max: number): void;
        setDefaultVelocity(x: number, y: number, z: number): void;
        setDefaultAcceleration(x: number, y: number, z: number): void;
        setSubEmitter(name: "idle" | "impact" | "death", emitter: ParticleSubEmitter): void;
        setAnimator(name: "size" | "icon" | "alpha" | "color", animator: ParticleAnimator): void;
    }
    /**
     * Particle emitter allows to change their position after spawn.
     * It represents a coordinate system, where created particles are located
     * and which you can move however you want.
     * Note: emitter can be moved only while being in world, 
     * and it works ONLY for custom particles, not for vanilla!
     */
    class ParticleEmitter {
        /**
         * Constructs new particle emitter with origin in given coords
         */
        constructor(x: number, y: number, z: number);
        /**
         * Moves the coordinate system to given coords,
         * it will cause all particles' transfer
         */
        move(x: number, y: number, z: number): void;
        /**
         * Moves the ORIGIN of the coordinate system to given coords,
         */
        moveTo(x: number, y: number, z: number): void;
        /**
         * Sets the speed of the coordinate system by each axis in blocks per tick,
         * it can be stopped with `emitter.stop()` or `emitter.setVelocity(0, 0, 0)`
         */
        setVelocity(x: number, y: number, z: number): void;
        /**
         * Binds the origin to the given entity's position,
         * resets the coordinate system's speed
         */
        attachTo(entity: number): void;
        /**
         * Same as `attachTo(entity)`, but adds x, y and z offset to entity's coords
         */
        attachTo(entity: number, x: number, y: number, z: number): void;
        /**
         * Detaches the coords system from the entity and leaves it on the current position
         */
        detach(): void;
        /**
         * Terminates any movement of the coordinate system
         */
        stop(): void;
        /**
         * Performs the finalization of the native object of the following emitter.
         * It means that you will no longer be able to use the following emitter after calling this method,
         * and the object itself will be removed from the memory.
         * Can be used for optimization purposes
         */
        release(): void;
        /**
         * @returns the origin's coords in [[Vector]] object
         */
        getPosition(): Vector;
        /**
         * @returns the origin's coords in float array of 3 elements
         */
        getPositionArray(): [number, number, number];
        /**
         * Default is false. It means that the coords of the particles for the following emitter
         * will be specified in the absolute coordinate system, if enabled, 
         * they will need to be set relative to the current position of the emitter. 
         * This can be very convenient if you need to make a system of particles completely isolated from the movement of the emitter.
         */
        setEmitRelatively(enable: boolean): void
        /**
         * Spawns particle of given and data on given coords, 
         * without specified velocity and acceleration.
         */
        emit(type: number, data: number, x: number, y: number, z: number): void;
        /**
         * Spawns particle of given and data on given coords, 
         * with specified velocity and without specified acceleration.
         */
        emit(type: number, data: number, x: number, y: number, z: number, vx: number, vy: number, vz: number): void;
        /**
         * Spawns particle of given and data on given coords, 
         * with specified velocity and acceleration.
         */
        emit(type: number, data: number, x: number, y: number, z: number, vx: number, vy: number, vz: number, ax: number, ay: number, az: number): void;
    }
    /**
     * Animators allow to change some properties of the specific particle depending on the time.
     * Mostly for internal use, put animators' descriptors into `animators` parameter of custom particle type instead.
     */
    class ParticleAnimator {
        /**
         * Constructs new [[Particles.ParticleAnimator]] object from given needed params 
         */
        constructor(period: number, fadeInTime: number, fadeInValue: number, fadeOutTime: number, fadeOutValue: number);
        /**
         * Constructs new [[Particles.ParticleAnimator]] object from given descriptor object
         */
        constructor(descriptor: AnimatorDescription);
    }
    /**
     * Sub-emitters describe how specific particle can emit other particles,
     * according to some events, that may happen to it.
     * Mostly for internal use, put sub-emitters' descriptors into `emitters`
     */
    class ParticleSubEmitter {
        /**
         * Constructs new [[Particles.ParticleSubEmitter]] object from given needed params
         */
        constructor(chance: number, count: number, type: number, data: number);
        /**
         * Constructs new [[Particles.ParticleSubEmitter]] object from given descriptor object
         */
        constructor(descriptor: SubEmitterDescription);
        /**
         * Emitted particles will receive random initial speed
         */
        setRandomVelocity(maxRandomVelocity: number): void;
        /**
         * @param keepVelocity If true, the new particle will have the velocity of the particle, 
         * that calls the sub-emitter, at the time of invocation, default is false
         */
        setKeepVelocity(keepVelocity: boolean): void;
        /**
         * @param keepEmitter If true, the new particle will save the emitter that was used for its creation if it had been.
         * Note: in this case we are talking about emitters, not about sub-emitters.
         */
        setKeepEmitter(keepEmitter: boolean): void;
    }
}
