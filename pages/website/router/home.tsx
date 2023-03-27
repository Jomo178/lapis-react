const LapisHome = () => {
  var images = [
    "https://lapisbot.xyz/getcard/1670351337902-534619073.png",
    "http://lapisbot.xyz/getcard/1660400285670-502358732.png",
    "http://lapisbot.xyz/getcard/PrideJoy.png",
    "https://cdn.discordapp.com/attachments/970412272398794762/1010533741283774534/jeansum22.png",
  ];

  var createCards = images.map((i, n) => {
    return (
      <svg
        key={n}
        style={{
          position: "absolute",
          zIndex: 5 - n,
          left: 30 * n,
          top: 5 * n,
        }}
        width="252"
        height="298"
        viewBox="0 0 252 298"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          x="-1.65128"
          y="50.5283"
          width="192.433"
          height="258.709"
          rx="27.5"
          transform="rotate(-15.5 -1.65128 50.5283)"
          fill={`url(#pattern${n})`}
          stroke="white"
          strokeWidth="1"
        />
        <defs>
          <pattern
            id={`pattern${n}`}
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref={`#image0_201_${n}`}
              transform="translate(0 -0.0548345) scale(0.00229358 0.00172577)"
            />
          </pattern>
          <image id={`image0_201_${n}`} width="436" height="613" href={i} />
        </defs>
      </svg>
    );
  });

  return (
    <div className="flex flex-col-reverse container mx-auto sm:flex-row">
      <div className="m-40">
        <h1>Lapis Bot</h1>
        <p className="lapis_font">enjoy the new card collector bot</p>
        <br />
        <ul className="section_one_content__features">
          <li>
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 117 117"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title />
              <desc />
              <defs />
              <g
                fill="none"
                fillRule="evenodd"
                id="Page-1"
                stroke="none"
                strokeWidth="1"
              >
                <g fillRule="nonzero" id="correct">
                  <path
                    d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z"
                    fill="#17AB13"
                    id="Shape"
                  />
                  <path
                    d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z"
                    fill="#4A4A4A"
                    id="Shape"
                  />
                </g>
              </g>
            </svg>
            <p className="lapis_font">Trade Items with your friends</p>
          </li>
          <li>
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 117 117"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title />
              <desc />
              <defs />
              <g
                fill="none"
                fillRule="evenodd"
                id="Page-1"
                stroke="none"
                strokeWidth="1"
              >
                <g fillRule="nonzero" id="correct">
                  <path
                    d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z"
                    fill="#17AB13"
                    id="Shape"
                  />
                  <path
                    d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z"
                    fill="#4A4A4A"
                    id="Shape"
                  />
                </g>
              </g>
            </svg>
            <p className="lapis_font">Gift cards to your friends</p>
          </li>
          <li>
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 117 117"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title />
              <desc />
              <defs />
              <g
                fill="none"
                fillRule="evenodd"
                id="Page-1"
                stroke="none"
                strokeWidth="1"
              >
                <g fillRule="nonzero" id="correct">
                  <path
                    d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z"
                    fill="#17AB13"
                    id="Shape"
                  />
                  <path
                    d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z"
                    fill="#4A4A4A"
                    id="Shape"
                  />
                </g>
              </g>
            </svg>
            <p className="lapis_font">Create your own card album</p>
          </li>
        </ul>
        <div>
          <a className="link_buttons lapis_font" href="">
            Invite Lapis
          </a>
        </div>
      </div>
      <div className="relative">{createCards}</div>
    </div>
  );
};

export default LapisHome;
