import React, { FC, useState } from 'react';
import { config } from '@react-spring/core';
import { useSpring, animated } from 'react-spring';

export type SpringTypes = {
  tension: number;
  friction: number;
};

const SpringConfig: FC<SpringTypes> = (props) => {
  SpringConfig.displayName = 'SpringConfig';
  const [flip, set] = useState(false);
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 1,
    delay: 200,
    config: {
      tension: props.tension,
      friction: props.friction,
    },
    onRest: () => set(!flip),
  });
  return <animated.div>{number.to((n) => n.toFixed(2))}</animated.div>;
};

export default SpringConfig;
