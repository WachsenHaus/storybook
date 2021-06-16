import React, { useEffect, useState } from 'react';
import { useTrail, animated } from 'react-spring';

const items = ['Lorem', 'ipsum', 'dolor', 'sit'];
const config = { mass: 5, tension: 2000, friction: 200 };

const UseTrailDemoPage = () => {
  const [active, set] = useState(true);
  const [trail, api] = useTrail(items.length, () => ({
    config,

    from: { opacity: 0, x: 20, height: 0, background: 'blue' },
  }));

  useEffect(() => {}, []);

  const onClick = () => {
    if (active) {
      api.start({
        opacity: 1,
        x: 20,
        height: 80,
        background: 'red',
      });
      set(false);
    }
  };

  return (
    <div className="useTrailDemoPageSection">
      <div className="useTrailDemo" onClick={onClick}>
        눌러봐요
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.to((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.div
              onClick={() => {
                // alert('dd');
                api.start({
                  opacity: 0,
                  x: 20,
                  height: 0,
                  background: 'blue',
                });
                set(true);
              }}
              style={{ height }}
            >
              {items[index]}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default UseTrailDemoPage;
