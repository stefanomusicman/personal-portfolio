import React from 'react';
import Particles from 'react-tsparticles';
import ParticlesConfig from './ParticleConfig';

const ParticlesBackground = () => {
    return(
            <Particles params={ParticlesConfig}/>
    )
}

export default ParticlesBackground;