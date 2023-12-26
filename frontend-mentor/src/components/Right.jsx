import data from "../../data.json";

const reaction = data[0];
const memory = data[1];
const verbal = data[2];
const visual = data[3];

export default function Right() {
  return (
    <div
      className="right-side flex flex-col items-center 
        box-border w-full md:w-72 h-100 py-8 pl-6 shadow pr-5 rounded-r-xl"
    >
      <h3 className="self-start text-lg font-semibold mb-5">Summary</h3>
      <div
        className="flex bg-red h-12 w-full rounded-2xl mb-3
         items-center p-3 justify-between"
      >
        <div className="flex">
          <img src={reaction.icon} alt="" className="mr-2" />
          <h2 className="text-red font-semibold">{reaction.category}</h2>
        </div>
        <div className="flex">
          <p className="font-semibold pr-2">{reaction.score}</p>
          <p>/ 100</p>
        </div>
      </div>
      <div
        className="flex bg-orange h-12 w-full rounded-2xl mb-3
         items-center p-3 justify-between"
      >
        <div className="flex">
          <img src={memory.icon} alt="" className="mr-2" />
          <h2 className="text-orange font-semibold">{memory.category}</h2>
        </div>
        <div className="flex">
          <p className="font-semibold pr-2">{memory.score} </p>
          <p className=""> / 100</p>
        </div>
      </div>
      <div
        className="flex bg-green h-12 w-full rounded-2xl mb-3
         items-center p-3 justify-between"
      >
        <div className="flex">
          <img src={verbal.icon} alt="" className="mr-2" />
          <h2 className="text-green font-semibold">{verbal.category}</h2>
        </div>
        <div className="flex">
          <p className="font-semibold pr-2">{verbal.score} </p>
          <p> / 100</p>
        </div>
      </div>
      <div
        className="flex bg-blue h-12 w-full rounded-2xl mb-3
         items-center p-3 justify-between"
      >
        <div className="flex">
          <img src={visual.icon} alt="" className="mr-2" />
          <h2 className="text-blue font-semibold">{visual.category}</h2>
        </div>
        <div className="flex">
          <p className="font-semibold pr-2">{visual.score} </p>
          <p>/ 100</p>
        </div>
      </div>
      <button
        className="mt-2 text-sm bg-buttonGray text-white w-full h-full rounded-3xl hover:bg-gradient-to-b
                  from-borderBlue to-70% to-borderPurple"
      >
        Continue
      </button>
    </div>
  );
}
