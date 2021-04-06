import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Particle, ParticleProps } from './Particle';

export default {
  title: 'GES-컴포넌트/Particle',
  component: Particle,
} as Meta;

const Template: Story<ParticleProps> = (args) => <Particle {...args} />;

export const 파티클 = Template.bind({});
파티클.args = {
  particles_number_value: 100,
  particles_number_density: false,
  size_value: 5,
  size_random: true,
  size_anim_speed: 4,
  size_anim_size_min: 0.3,
  line_linked_enable: false,
  move_random: true,
  move_speed: 2.5,
};
