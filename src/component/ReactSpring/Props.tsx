import React, { FC, useEffect, useState } from 'react';
import { config } from '@react-spring/core';
import { useSpring, animated } from 'react-spring';

const PropsFC: FC = () => {
  const [flip, set] = useState(false);

  const props = useSpring({
    //단어의 높이 * 단어 갯수를 구하여 스크롤의 높이를 계산하고, 총 높이로 한번에 스크롤 해버리는것.
    //(words.length - 1) * 200

    from: { background: 'linear-gradient(to right, #009fff, #ec2f4b)', transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)' },
    to: {
      background: 'linear-gradient(to right, #dbe2e7, #360008)',
      transform: 'translate3d(10px,0,0) scale(0.6) rotateX(0deg)',
    },

    reset: true,
    reverse: flip,
    delay: 50,
    config: config.molasses,

    onRest: () => set(!flip),
  });
  useEffect(() => {});
  return (
    <animated.div
      style={{
        // vector: [0, 10, 30],
        display: 'block',
        padding: 20,
        color: 'red',
        fontSize: 50,
        // height: 400,
        // background: 'linear-gradient(to right, #009fff, #ec2f4b)',
        boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)',
        borderBottom: '10px solid #2D3747',
        // shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
        textShadow: '0px 5px 15px rgba(255,255,255,0.5)',
        ...props,
      }}
    >
      "asdasd"
    </animated.div>
  );
};

export default PropsFC;
