import React from 'react';
import ParticlesBg from 'particles-bg'

export default function Background(){
    return (
              <div className="background">
               <ParticlesBg color="#C0C0C0" num={120} type="cobweb" bg={true} />
              </div>
            )
}