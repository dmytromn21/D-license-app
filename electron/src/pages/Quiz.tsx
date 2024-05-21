import questions from "../questions.json";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { updateScore } from "../app/slices/index";
import { FireworksProvider } from "../components/Fireworks";
import { useNavigate } from "react-router-dom";
import { useInterval } from "../components/useInterval";

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [fadeIt, setFadeIt] = useState(false);
  const [couter, setCouter] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useInterval(() => {
    if (couter < 10) {
      setCouter(couter + 1);
    } else {
      console.log("done");
      handleNext();
    }
  }, 1000);

  const handleAnswerOption = (answer: any) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
    console.log(selectedOptions);
  };

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
    setCouter(0);
  };

  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      questions[i].answerOptions.map(
        (answer) =>
          answer.isCorrect &&
          answer.answer === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      );
    }
    setScore(newScore);
    dispatch(updateScore(newScore));
    setShowScore(true);
    if (newScore > 2) {
      setTimeout(() => {
        setFadeIt(true);
      }, 4000);
    }
  };

  return (
    <div className="flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] justify-center items-center">
      {!showScore && (
        <>
          <div className="flex w-full justify-between mb-1">
            <span className="text-base font-medium text-blue-700 dark:text-white">
              REMAINED
            </span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">
              {10 - couter}s
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: couter * 10 + "%" }}
            ></div>
          </div>
        </>
      )}
      {showScore ? (
        <h1 className="text-3xl font-semibold text-center text-white">
          You scored {score} out of {questions.length}{" "}
          {score > 2 ? (
            <>
              <strong>Congratulations</strong>
              {fadeIt ? (
                <button
                  onClick={() => navigate("/submit")}
                  className="w-1/3 py-3 mt-10 bg-indigo-600 rounded-md"
                >
                  <small>complete</small>
                </button>
              ) : (
                <FireworksProvider win />
              )}
            </>
          ) : (
            <>
              <strong>Try Again</strong>
              <button
                onClick={() => {
                  setScore(0);
                  setShowScore(false);
                  setCurrentQuestion(0);
                  setSelectedOptions([]);
                  setCouter(0);
                }}
                className="w-1/3 py-1 mt-10 bg-indigo-600 rounded-md"
              >
                <small>Try Again</small>
              </button>
            </>
          )}
        </h1>
      ) : (
        <>
          <div className="flex flex-col items-start w-full">
            <h4 className="mt-10 text-xl text-white/60">
              Question {currentQuestion + 1} of {questions.length}
            </h4>
            <div className="mt-4 text-2xl text-white flex justify-between w-full items-center">
              {questions[currentQuestion].question}
              {questions[currentQuestion].image && (
                <div className="mt-4 text-2xl text-white">
                  <img src={questions[currentQuestion].image} alt="" />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full">
            {questions[currentQuestion].answerOptions.map((answer, index) => (
              <div
                key={index}
                className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-white/10 rounded-xl bg-white/5"
                onClick={(e) => handleAnswerOption(answer.answer)}
              >
                <input
                  type="radio"
                  name={answer.answer}
                  value={answer.answer}
                  checked={
                    answer.answer ===
                    selectedOptions[currentQuestion]?.answerByUser
                  }
                  onChange={(e) => handleAnswerOption(answer.answer)}
                  className="w-6 h-6 bg-black"
                />
                <p className="ml-6 text-white">{answer.answer}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center w-full mt-4 text-white">
            {/* <button
              onClick={handlePrevious}
              className="w-[49%] py-3 bg-indigo-600 rounded-lg"
            >
              Previous
            </button> */}
            <button
              onClick={
                currentQuestion + 1 === questions.length
                  ? handleSubmitButton
                  : handleNext
              }
              className="w-1/2 py-3 bg-indigo-600 rounded-lg"
            >
              {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
