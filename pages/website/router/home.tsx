import { IoMdCheckmarkCircleOutline } from "react-icons/io";

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
    <div className="flex flex-col-reverse h-full container text-center space-y-20 sm:flex-row">
      <div className="mt-40 flex flex-col gap-4 text-center sm:flex-1">
        <div>
          <h1 className="text-white text-3xl font-extrabold">Lapis Bot</h1>
          <p className="text-white text-lg font-extrabold">
            enjoy the new card collector bot
          </p>
        </div>
        <div className="flex flex-col gap-1 w-full justify-evenly items-center">
          <div className="flex items-center">
            <IoMdCheckmarkCircleOutline className="text-white mr-1"></IoMdCheckmarkCircleOutline>
            <p className="text-white -tracking-wider">
              Trade Items with your friends
            </p>
          </div>
          <div className="flex items-center">
            <IoMdCheckmarkCircleOutline className="text-white mr-1"></IoMdCheckmarkCircleOutline>
            <p className="text-white -tracking-wider">
              Gift cards to your friends
            </p>
          </div>
          <div className="flex items-center">
            <IoMdCheckmarkCircleOutline className="text-white mr-1"></IoMdCheckmarkCircleOutline>
            <p className="text-white -tracking-wider">
              Create your own card album
            </p>
          </div>
        </div>
        <div className="mt-5">
          <a
            className="p-4 bg-blue-400 rounded-xl transition-all delay-200 ease-in cursor-pointer hover:bg-slate-500 hover:text-white"
            href=""
          >
            Invite Lapis
          </a>
        </div>
      </div>
      <div className="relative w-full h-[40vh] sm:flex-1">
        <div className="absolute w-[60%] h-full m-auto left-0 top-0 bottom-0 right-0">
          {createCards}
        </div>
      </div>
    </div>
  );
};

export default LapisHome;
