import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';

export interface ParticleProps {
  /**
   * 파티클의 개체수를 정합니다.
   */
  particles_number_value: number;
  /**
   * 뭔지모르겠음.
   */
  particles_number_density: boolean;
  /**
   * 사이즈의 크기를 변경합니다.
   */
  size_value: number;
  size_random: boolean;
  size_anim_speed: number;
  size_anim_size_min: number;
  line_linked_enable: boolean;
  move_random: boolean;
  move_speed: number;
}
const LssBackgroundVIdeo = styled.div`
  /* width: 100%; */
  /* height: 100%; */
  /* position: fixed; */
  /* z-index: -1; */
  /* object-fit: fill; */
  /* display: none; */
  // 자식요소
  background-color: black;
  div {
    height: 100%;
  }
`;
export const Particle: React.FC<ParticleProps> = (props) => {
  console.log('렌더링');
  return (
    <LssBackgroundVIdeo>
      <Particles
        params={{
          particles: {
            number: {
              value: props.particles_number_value,
              density: {
                enable: props.particles_number_density,
              },
            },
            // shape: {
            //   image: {
            //     src: ''
            //   }
            // },
            // color: { value: ['#f39c12', '#f1c40f', '#e67e22'] },
            size: {
              value: props.size_value,
              random: props.size_random,
              anim: {
                speed: props.size_anim_speed,
                size_min: props.size_anim_size_min,
              },
            },
            line_linked: {
              enable: props.line_linked_enable,
            },
            move: {
              random: props.move_random,
              speed: props.move_speed,
              // direction: 'none',
              // out_mode: 'out'
            },
          },
        }}
      />
    </LssBackgroundVIdeo>
  );
};
