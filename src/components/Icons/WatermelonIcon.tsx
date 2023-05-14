import type { FunctionComponent } from "react";
import { animated, useSpring } from "react-spring";

import { IconProps } from "../../types";

const AnimFeTurbulence = animated("feTurbulence");
const AnimFeDisplacementMap = animated("feDisplacementMap");

export const WatermelonIcon: FunctionComponent<IconProps> = ({
  width = 50,
  height = 50,
  id = "watermelonIcon",
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
      viewBox="0 0 392.194 311.398"
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
              <animated.path d="M204.54.02c-10.764 7.776-20.735 16.308-30.492 26.28-9.792 9.828-15.228 18.504-27.684 32.832-12.744 14.364-32.688 37.008-46.908 52.524-14.112 15.264-25.632 26.64-37.044 39.42-11.52 12.708-21.024 24.409-31.428 37.043-10.548 12.709-20.592 25.309-30.96 38.484 17.496 15.877 35.784 29.592 55.836 41.725 19.98 12.131 35.424 23.219 63.288 30.492 27.864 7.127 69.876 14.256 102.28 12.203 32.22-2.268 65.951-15.119 90.071-25.344 23.868-10.367 39.456-25.129 52.992-36.107 13.536-11.016 22.536-20.736 27.685-29.557-14.473-19.801-28.584-39.455-43.164-59.543-14.58-20.233-30.42-42.625-43.633-60.517-13.355-17.892-23.939-30.996-35.64-45.972-11.771-15.12-23.004-29.34-34.236-43.632A8843.652 8843.652 0 01204.533.032z" />
              <animated.path
                d="M204.54 5.204c-6.048 3.852-12.563 8.964-19.691 15.48-7.2 6.552-16.164 15.156-23.004 23.436-6.876 8.1-9.9 15.624-17.82 25.344-8.136 9.756-18.648 20.268-30.024 32.364-11.592 12.132-26.1 26.136-37.98 39.384-11.88 13.068-22.716 27.144-32.364 38.483a1940.206 1940.206 0 01-24.886 28.59c10.224 8.713 22.932 17.641 38.952 27.217 16.02 9.467 35.424 23.076 56.268 29.555 20.808 6.48 44.964 9.324 67.068 8.93 21.888-.648 45.396-6.336 63.324-12.205 17.784-6.012 27.252-12.707 42.696-23.004 15.371-10.367 31.355-23.004 48.779-38.447-16.775-25.596-35.64-53.964-57.708-86.76-22.14-32.91-46.22-68.334-73.62-108.37zM208.28 3.8l24.408 10.296a2534.996 2534.996 0 0167.536 85.392c23.364 30.816 46.62 62.639 71.28 97.559l-29.557 2.342c-24.228-35.316-46.943-68.437-69.408-101.3-22.46-32.874-43.56-63.798-64.26-94.29z"
                fill="#f66"
              />
              <animated.path
                d="M373.38 200.32l-29.521 2.34 7.488 15.947 34.235.936-12.2-19.23z"
                fill="#C2FF80"
              />
              <animated.path
                d="M350.88 222.36c-.9 3.852-7.524 10.225-20.16 19.26-12.816 9.109-33.084 25.344-55.368 34.705-22.464 9.143-51.408 17.207-77.4 20.16-25.992 2.879-51.12 1.943-76.896-2.809 8.028 4.283 19.404 7.561 34.704 9.828 15.228 2.305 35.424 5.688 56.268 3.779 20.809-2.16 45.72-7.848 67.536-15.947 21.744-8.281 44.784-21.205 61.92-32.365 16.956-11.158 29.916-22.139 39.42-33.768-10-.93-20.01-1.86-30.02-2.83z"
                fill="#408000"
              />
              <animated.path
                d="M338.68 204.54l7.523 15.48c-17.748 16.957-36.611 30.889-57.708 42.229-21.168 11.268-43.416 20.16-68.004 25.307-24.732 4.969-54.432 6.912-78.804 4.717-24.552-2.34-43.704-7.236-66.6-18.287-22.86-11.232-45.684-26.857-69.444-47.846l9.864-12.672c15.048 12.42 30.672 23.221 47.844 32.832 17.028 9.504 33.84 19.152 53.928 24.373 20.088 5.148 44.244 7.344 65.664 6.588 21.313-.793 41.328-4.031 61.452-11.268 20.088-7.453 41.688-22.033 57.708-32.365 15.84-10.36 27.76-19.83 36.58-29.08z"
                fill="#C2FF80"
              />
              <animated.path d="M165.59 121.05c-2.304.504-6.732 10.008-8.424 14.076-1.872 3.96-3.744 7.74-1.872 9.396 1.908 1.476 10.98 1.44 13.608-.504 2.448-2.196 1.944-7.812 1.404-11.7-.62-3.9-2.56-11.82-4.72-11.28zM253.32 59.132c1.116 2.664 2.772 6.948 4.68 9.396 1.801 2.304 6.013 5.76 6.12 4.68-.107-1.188-3.996-7.812-6.12-11.268-2.195-3.564-5.724-8.856-6.552-9.36-.79-.432.75 3.744 1.87 6.552zM279.56 85.412c1.08 2.556 2.844 7.02 4.716 9.36 1.836 2.304 5.94 6.048 6.084 4.716-.144-1.584-3.924-9.576-6.084-13.14-2.268-3.456-5.76-7.452-6.588-7.524-.75-.144.65 3.816 1.87 6.588zM300.7 124.8c1.116 2.664 2.772 6.948 4.68 9.396 1.729 2.412 5.652 5.364 6.084 4.68.288-.972-1.655-6.372-3.743-9.828-2.232-3.564-7.74-10.08-8.893-10.8-1.19-.69.68 3.81 1.87 6.55zM242.52 131.38c-2.304.504-6.732 10.008-8.424 14.076-1.836 3.852-3.816 7.848-1.908 9.36 1.908 1.44 10.979 1.512 13.608-.468 2.447-2.16 1.943-7.884 1.403-11.736-.65-3.92-2.48-11.73-4.68-11.23zM214.37 174.51c-2.304.504-6.731 10.008-8.424 14.076-1.872 3.959-3.744 7.74-1.872 9.396 1.908 1.439 10.98 1.512 13.608-.469 2.448-2.16 1.943-7.885 1.403-11.736-.62-3.89-2.56-11.81-4.72-11.27zM114.47 162.81c-2.304.504-6.732 10.008-8.424 14.076-1.836 3.852-3.816 7.848-1.908 9.359 1.908 1.439 10.98 1.512 13.608-.469 2.448-2.16 1.944-7.883 1.404-11.736-.65-3.92-2.49-11.73-4.68-11.23zM126.17 105.1c-2.016.396-5.544 8.352-7.092 11.772-1.404 3.24-3.312 6.516-1.548 7.884 1.62 1.26 9.252 1.224 11.376-.396 1.944-1.836 1.692-6.588 1.188-9.828-.62-3.3-2.06-9.81-3.93-9.42zM170.88 75.08c-1.692.36-4.896 7.272-6.12 10.188-1.26 2.844-2.808 5.58-1.332 6.804 1.404 1.152 7.92.936 9.828-.36 1.8-1.548 1.368-5.724 1.044-8.496-.47-2.88-1.8-8.46-3.42-8.136zM203.71 43.184c-1.692.36-4.896 7.272-6.12 10.188-1.26 2.844-2.808 5.58-1.333 6.804 1.404 1.152 7.92.936 9.829-.36 1.8-1.548 1.367-5.724 1.044-8.496-.47-2.88-1.8-8.46-3.42-8.136zM212.17 97.112c-1.584.36-4.969 7.272-6.12 10.188-1.225 2.844-2.88 5.58-1.368 6.804 1.368 1.152 8.028.936 9.864-.36 1.836-1.476 1.296-5.724 1.008-8.46-.43-2.84-1.83-8.528-3.38-8.168zM159.5 189.06c-2.232.504-6.804 10.008-8.46 14.074-1.872 3.961-3.744 7.74-1.872 9.396 1.908 1.439 10.98 1.512 13.608-.467 2.448-2.16 1.944-7.885 1.404-11.736-.64-3.88-2.48-11.8-4.68-11.26z" />
            </g>
          </g>
        </switch>
      </g>
    </animated.svg>
  );
};
