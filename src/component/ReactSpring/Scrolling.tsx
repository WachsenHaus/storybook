import React, { FC, useState } from 'react';
import { config } from '@react-spring/core';
import { useSpring, animated } from 'react-spring';

function Scrolling() {
  const [flip, set] = useState(false);

  const words = ['We', 'came.', 'We', 'saw.', 'We', 'kicked', 'its', 'ass.'];

  const { scroll } = useSpring({
    //단어의 높이 * 단어 갯수를 구하여 스크롤의 높이를 계산하고, 총 높이로 한번에 스크롤 해버리는것.
    //(words.length - 1) * 200

    from: { scroll: 0 },
    to: {
      scroll: 200,
    },
    reset: true,
    reverse: flip,
    delay: 50,
    config: config.molasses,
    onRest: () => set(!flip),
  });
  const { background } = useSpring({
    //단어의 높이 * 단어 갯수를 구하여 스크롤의 높이를 계산하고, 총 높이로 한번에 스크롤 해버리는것.
    //(words.length - 1) * 200

    from: { background: 'linear-gradient(to right, #009fff, #ec2f4b)' },
    to: {
      background: 'linear-gradient(to right, #dbe2e7, #360008)',
    },
    reset: true,
    reverse: flip,
    delay: 50,
    config: config.molasses,

    onRest: () => set(!flip),
  });

  return (
    <animated.div
      style={{
        position: 'relative',
        width: '100%',
        height: 200,
        overflow: 'auto',
        fontSize: '0.5em',
        background: background,
      }}
      scrollTop={scroll}
    >
      {words.map((word, i) => (
        <div key={`${word}_${i}`} style={{ width: '100%', height: 200, textAlign: 'center' }}>
          {word}
        </div>
      ))}
      {/* {background} */}
    </animated.div>
  );
}

export default Scrolling;
