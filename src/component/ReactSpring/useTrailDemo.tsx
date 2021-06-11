import React, { useEffect, useState } from 'react';
import { useTrail, animated } from 'react-spring';

const items = ['Lorem', 'ipsum', 'dolor', 'sit'];
const config = { mass: 5, tension: 2000, friction: 200 };

const UseTrailDemoPage = () => {
  const [active, set] = useState(true);
  //   const [trail,api] = useTrail(items.length, {
  //     config,
  //     opacity: toggle ? 1 : 0,
  //     x: toggle ? 0 : 20,
  //     height: toggle ? 80 : 0,
  //     from: { opacity: 0, x: 20, height: 0 },
  //   });
  const [trail, api] = useTrail(items.length, () => ({
    config,
    // opacity: toggle ? 1 : 0,
    // x: toggle ? 0 : 20,
    // height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  }));

  useEffect(() => {}, []);

  const onClick = () => {
    if (active) {
      api.start({
        opacity: 1,
        x: 0,
        height: 80,
      });
      set(false);
    }
  };

  return (
    <div className="useTrailDemoPageSection">
      <div className="useTrailDemo" onClick={onClick}>
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
                alert('dd');
                api.start({
                  opacity: 0,
                  x: 20,
                  height: 0,
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
