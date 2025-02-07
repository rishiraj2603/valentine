import React, { useState } from "react";
import OneNo from "../../assets/1stNo.jpeg";
import twoNo from "../../assets/2ndNo.jpeg";
import threeNo from "../../assets/3rdNo.jpeg";
import fourNo from "../../assets/4thNo.jpeg";
import fiveNo from "../../assets/5thNo.jpeg";
import sixNo from "../../assets/6thNo.jpeg";
import oneYes from "../../assets/1styes.jpeg";
import FirstImage from "../../assets/firstImage.jpeg";
import bg from "../../assets/bgImage.jpg";

const Yes_no = () => {
  const [noCount, setNoCount] = useState(0);
  console.log("🚀 ~ constYes_no= ~ noCount:", noCount);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const NoImage = () => {
    const noLink = [OneNo, twoNo, threeNo, fourNo, fiveNo, sixNo];

    return noLink[Math.min(noCount, noLink.length - 1)];
  };
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <img src={oneYes} alt="" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Ok Yayyyyy!!!
          </div>
        </>
      ) : (
        <>
          <img src={bg} alt="" className="absolute -z-10 left-0 right-0" />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src={noCount === 0 ? FirstImage : NoImage()}
          />

          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Yes_no;
