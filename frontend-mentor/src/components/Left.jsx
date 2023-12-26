import data from "../../data.json";

const reaction = data[0];
const memory = data[1];
const verbal = data[2];
const visual = data[3];

const overall = Math.floor(
  (reaction.score + memory.score + verbal.score + visual.score) / data.length
);

export default function Left() {
  return (
    <div
      className="left-side flex flex-col items-center 
                  box-border w-full md:w-72 h-100 py-8 rounded-3xl bg-gradient-to-b
                  from-borderBlue to-70% to-borderPurple"
    >
      <h4 className="text-lightWhite text-lg">Your Result</h4>
      <div
        className="flex flex-col items-center w-36 h-36 
                    justify-center m-7 rounded-full bg-gradient-to-t
                    from-persianBlue to-45% to-violetBlue"
      >
        <span className="font-bold text-5xl text-white">{overall} </span>
        <span className="text-lightWhite text-sm">of 100</span>
      </div>
      <h4 className="text-white text-2xl font-semibold mb-3">Great</h4>
      <p className="text-center px-12 text-lightWhite text-sm">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
