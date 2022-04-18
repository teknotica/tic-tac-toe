import { FC } from "react";
import { animated, useSpring } from "react-spring";

import { IconProps } from "../../types";

const AnimFeTurbulence = animated("feTurbulence");
const AnimFeDisplacementMap = animated("feDisplacementMap");

export const PeachIcon: FC<IconProps> = ({
  width = 50,
  height = 50,
  id = "peachIcon",
  ...props
}) => {
  const { freq, scale, transform, opacity } = useSpring({
    from: {
      scale: 10,
      opacity: 0,
      transform: "scale(0.8)",
      freq: "0.0175, 0.0",
    },
    to: { scale: 150, opacity: 1, transform: "scale(1)", freq: "0.0, 0.0" },
    config: { duration: 250 },
  });

  return (
    <animated.svg
      style={{ transform, opacity }}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 372.79 366.477"
      {...props}
    >
      <defs>
        <filter id={`water-${id}`}>
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
      <g filter={`url(#${`water-${id}`})`}>
        <switch>
          <g>
            <g
              strokeMiterlimit={10}
              stroke="#000"
              strokeWidth={0.036}
              clipRule="evenodd"
              fillRule="evenodd"
            >
              <animated.path d="M120.17 49.875c-24.714 3.593-43.784 9.579-60.546 20.953-17.36 11.288-31.043 26.768-41.049 47.376C8.4 139.164-1.179 166.614.018 194.324c1.198 27.193 11.204 61.058 25.399 86.458 13.769 25.229 31.472 48.917 58.067 63.455 26.682 14.198 68.243 25.314 100.57 21.466 32.07-4.361 66.533-20.781 89.881-45.924 22.748-25.569 41.989-69.783 46.865-104.93 4.532-35.405.427-76.966-18.559-104.93-19.496-28.307-64.654-51.739-95.184-62.001-30.96-10.283-61.92-1.817-86.89 1.946z" />
              <animated.path
                d="M125.47 53.723c-23.688 3.335-43.528 9.579-60.547 21.038-17.189 11.374-30.958 26.597-40.964 47.292-10.343 20.87-19.836 48.92-18.553 76.2 1.369 27.023 12.145 59.179 27.366 83.98 15.137 24.458 36.773 48.489 62.942 61.488 26.083 12.571 62.77 18.472 92.275 14.11 29.331-4.618 60.631-19.927 82.012-40.963 20.952-21.638 37.627-52.424 43.445-85.434 5.299-33.183 7.094-80.902-10.778-110.83-18.299-29.932-67.475-56.101-97.062-67.303-29.93-11.214-56.52-3.261-80.13.416z"
                fill="#F7A122"
              />
              <animated.path d="M174.82 46.882c15.991 6.585 32.583 14.024 49.773 23.005 17.019 8.722 36.687 22.491 52.763 29.76 16.081 6.841 31.044 7.525 42.93 12.657 11.461 5.131 18.644 7.354 26.855 18.557 8.208 11.203 15.562 27.194 22.405 48.318 1.884-15.82 2.991-31.642 2.991-47.805-.17-16.334 1.797-35.576-2.991-48.831-5.131-13.342-15.566-23.091-26.34-30.274-10.945-7.355-20.267-8.21-38.569-13.169-18.897-5.388-50.369-18.814-72.264-17.532-21.89 1.363-40.62 9.487-57.55 25.308z" />
              <animated.path
                d="M185.51 46.882c17.875 5.986 34.462 13.255 50.798 21.465 15.994 8.21 30.958 21.124 45.925 27.879 15.052 6.415 31.555 7.013 42.932 11.716 11.116 4.447 16.076 6.841 23.43 16.078 7.098 9.407 13.599 21.892 19.5 39.081-.427-17.531-1.03-32.496-1.456-45.924-.683-13.512 1.967-24.458-1.968-34.122-4.272-10.005-12.396-18.044-22.405-24.458-10.003-6.585-20.354-8.552-37.627-14.11-17.873-5.645-46.777-20.183-66.877-19.584-20 .511-37.19 7.523-52.24 21.976z"
                fill="#61A228"
              />
              <animated.path d="M233.4 39.1c9.663 1.453 32.495 5.986 43.445 10.262 10.43 4.02 10.346 10.091 19.496 14.624 8.982 4.361 23.176 4.19 33.693 11.715 10.263 7.526 29.076 32.07 27.369 32.754-2.311.342-26.34-24.373-39.085-30.274-12.74-6.157-25.996-2.564-36.087-6.414-10.091-4.36-14.281-12.571-24.46-18.044-10.69-5.558-34.037-11.801-38.055-14.111-4.2-2.57 4.1-2.314 13.68-.517zM176.27 57.658c-12.656 1.967-25.398 2.993-38.569 3.42-13.596.342-37.456-.256-40.536-1.453-2.907-1.283 14.71-4.619 22.493-6.329 7.525-1.968 14.881-3.507 22.405-4.961-9.406-20.267-13.94-32.838-14.624-38.996-.769-6.157 8.466 4.362 11.204 2.908 2.48-1.796 1.624-11.802 5.387-12.229 3.762-.342 14.794 4.19 17.617 10.262 2.48 5.902-4.447 16.25-1.966 24.459 2.57 8.124 7.78 15.221 16.59 22.919z" />
              <animated.path
                d="M162.08 53.296c-3.334-3.849-5.558-9.066-6.329-15.651-.854-7.012 2.138-18.729 1.027-23.945-1.539-5.131-4.79-7.525-9.75-6.842-2.052 5.217-4.191 8.124-6.414 9.749-2.308 1.37-4.618.771-7.27-1.453 4.191 7.782 6.843 14.623 9.237 21.465 2.138 6.67 3.164 12.742 3.421 18.558 4.875.941 8.296 1.283 11.203 1.025 2.56-.255 4.18-1.452 4.87-2.906z"
                fill="#B0722E"
              />
              <animated.path d="M187.48 70.828c15.478 2.138 29.248 8.124 41.988 17.617 12.574 9.407 24.289 18.301 33.184 39.509 8.467 20.953 17.617 56.786 18.558 86.375.854 29.759-3.423 59.093-13.172 90.307 10.093-17.274 16.764-36.858 20.012-60.033 3.253-23.347 3.935-54.305-.938-78.079-5.22-24.203-13.256-48.319-29.764-64.482-16.94-16.076-39.69-26.253-69.87-31.212zM15.669 209.97c.085 20.438 5.986 40.707 18.043 61.487 12.059 20.61 30.617 47.978 53.706 62.001 23.005 13.685 49.858 20.526 82.526 20.526-7.014-4.277-15.308-7.697-25.913-10.263-10.775-2.652-25.569-2.309-37.115-5.902-11.545-3.85-19.925-6.071-31.728-17.532-12.485-11.972-31.213-36.002-40.022-52.251-8.552-16.42-8.125-35.234-11.204-44.896-3.338-9.85-5.989-14.13-8.297-13.18z" />
            </g>
          </g>
        </switch>
      </g>
    </animated.svg>
  );
};