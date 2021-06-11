import React, { FC, useEffect, useState } from 'react';
import { config } from '@react-spring/core';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';

const AnimatingAuto: FC = () => {
  AnimatingAuto.displayName = 'ANim';
  const [ref, { height }] = useMeasure();
  const [flip, set] = useState(false);
  const props = useSpring({
    to: {
      height: height,
    },
    from: {
      height: height + 200,
    },
    reset: true,
    reverse: flip,
    delay: 50,
    config: config.molasses,

    onRest: () => set(!flip),
  });

  return (
    <animated.div style={{ overflow: 'hidden', color: 'red', background: 'red', ...props }}>
      <div ref={ref}>content</div>
    </animated.div>
  );
};

export default AnimatingAuto;
