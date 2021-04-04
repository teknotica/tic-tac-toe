import { useSpring, animated } from "react-spring";

const AnimFeTurbulence = animated("feTurbulence");
const AnimFeDisplacementMap = animated("feDisplacementMap");

export const CircleIcon = ({ color = "currentColor", ...props }) => {
  const { freq, scale, transform, opacity } = useSpring({
    from: {
      scale: 10,
      opacity: 0,
      transform: "scale(0.9)",
      freq: "0.0175, 0.0",
    },
    to: { scale: 150, opacity: 1, transform: "scale(1)", freq: "0.0, 0.0" },
    config: { duration: 1000 },
  });

  return (
    <animated.svg
      style={{ transform, opacity }}
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={60}
      viewBox="0 -256 1792 1792"
      color={color}
      {...props}
    >
      <defs>
        <filter id="water">
          <AnimFeTurbulence
            type="fractalNoise"
            baseFrequency={freq}
            numOctaves="1"
            result="TURB"
            seed="8"
          />
          <AnimFeDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            in="SourceGraphic"
            in2="TURB"
            result="DISP"
            scale={scale}
          />
        </filter>
      </defs>
      <g filter="url(#water)">
        <animated.path
          d="M1401.492 645.424q0-104-40.5-198.5t-109.5-163.5q-69-69-163.5-109.5t-198.5-40.5q-104 0-198.5 40.5t-163.5 109.5q-69 69-109.5 163.5t-40.5 198.5q0 104 40.5 198.5t109.5 163.5q69 69 163.5 109.5t198.5 40.5q104 0 198.5-40.5t163.5-109.5q69-69 109.5-163.5t40.5-198.5zm256 0q0 209-103 385.5t-279.5 279.5q-176.5 103-385.5 103t-385.5-103q-176.5-103-279.5-279.5t-103-385.5q0-209 103-385.5t279.5-279.5q176.5-103 385.5-103t385.5 103q176.5 103 279.5 279.5t103 385.5z"
          fill={color}
        />
      </g>
    </animated.svg>
  );
};

export const EquisIcon = ({ color = "currentColor", ...props }) => {
  const { freq, scale, transform, opacity } = useSpring({
    from: {
      scale: 10,
      opacity: 0,
      transform: "scale(0.9)",
      freq: "0.0175, 0.0",
    },
    to: { scale: 150, opacity: 1, transform: "scale(1)", freq: "0.0, 0.0" },
    config: { duration: 1000 },
  });

  return (
    <animated.svg
      style={{ transform, opacity }}
      color={color}
      width={60}
      height={60}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 460.775 460.775"
      {...props}
    >
      <defs>
        <filter id="water">
          <AnimFeTurbulence
            type="fractalNoise"
            baseFrequency={freq}
            numOctaves="1"
            result="TURB"
            seed="8"
          />
          <AnimFeDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            in="SourceGraphic"
            in2="TURB"
            result="DISP"
            scale={scale}
          />
        </filter>
      </defs>
      <g filter="url(#water)">
        <animated.path d="M285.08 230.397L456.218 59.27c6.076-6.077 6.076-15.911 0-21.986L423.511 4.565a15.55 15.55 0 00-21.985 0l-171.138 171.14L59.25 4.565a15.551 15.551 0 00-21.985 0L4.558 37.284c-6.077 6.075-6.077 15.909 0 21.986l171.138 171.128L4.575 401.505c-6.074 6.077-6.074 15.911 0 21.986l32.709 32.719a15.555 15.555 0 0021.986 0l171.117-171.12 171.118 171.12a15.551 15.551 0 0021.985 0l32.709-32.719c6.074-6.075 6.074-15.909 0-21.986L285.08 230.397z" />
      </g>
    </animated.svg>
  );
};
