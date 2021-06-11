import React, { FC, useEffect, useState } from 'react';
import { config } from '@react-spring/core';
import { useSpring, animated } from 'react-spring';
// import useMeasure from 'react-use-measure';

const CssKeyframes: FC = () => {
  // const [ref, { height }] = useMeasure();
  const [state, set] = useState(true);
  //   const [flip, set] = useState(false);
  const props = useSpring({ x: state ? 1 : 0, delay: 50, config: config.molasses });
  const { x, y } = useSpring({ x: 0, y: 0 });

  return (
    <div>
      <animated.div
        style={{
          width: '100%',
          textAlign: 'center',
          transform: props.x
            .to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.5, 1, 0.5, 1, 1, 1.03, 1],
            })
            .to((x) => `scale(${x})`),
        }}
        onClick={() => set(!state)}
      >
        오우야!!
      </animated.div>
      <animated.div style={{ x, y }}>asdasd</animated.div>
    </div>
  );
};

export default CssKeyframes;
