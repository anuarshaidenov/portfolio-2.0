const BgBubbles = ({ width, height, className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1440 973"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || ''}
    >
      <g id="bg-bubbles">
        <path
          id="bubble-4"
          d="M-8.22223 147.668C-8.22223 147.668 -146.722 160.668 -108.222 303.668C-69.7223 446.669 -108.222 324.668 -108.222 324.668C-108.222 324.668 -193.222 488.669 -108.222 530.668C-23.2222 572.668 337.278 477.168 309.778 348.168C282.278 219.169 292.778 186.668 189.278 127.168C85.7778 67.6684 -8.22223 147.668 -8.22223 147.668Z"
          fill="#FFE3CF"
          fillOpacity="0.72"
          className="animate-bounce-from-left"
        />
        <path
          id="bubble-3"
          d="M1305 511.161C1332 526.661 1364 558.161 1341 581.161C1318 604.161 1325.5 613.161 1281.5 604.161C1237.5 595.162 1228 574.661 1234.5 535.161C1241 495.661 1278 495.661 1305 511.161Z"
          fill="#FFE3CF"
          fillOpacity="0.72"
          className="animate-scale-slow"
        />
        <path
          id="bubble-2"
          d="M206.605 650.316C276.06 690.205 301.104 782.316 280.104 873.316C259.104 964.316 225.791 987.477 112.604 964.316C-0.581757 941.154 -23.8632 886.044 -7.14252 784.39C9.57817 682.736 137.149 610.427 206.605 650.316Z"
          fill="#FFE3CF"
          fillOpacity="0.72"
          className="animate-scale-slow"
        />
        <path
          id="bubble-1"
          d="M1349.35 8.16169C1376.35 23.6617 1514 247.162 1491 270.162C1468 293.162 1431.5 382.991 1271 350.161C1110.5 317.332 1030.5 200.661 1107 74.6614C1183.5 -51.3386 1322.35 -7.33831 1349.35 8.16169Z"
          fill="#FFE3CF"
          fillOpacity="0.72"
          className="animate-bounce-from-right"
        />
      </g>
    </svg>
  );
};

export default BgBubbles;
