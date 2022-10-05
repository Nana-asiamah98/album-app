import { React } from "react";

const Italicizer = ({ word, search}) => {
  const italicizeWords = (word) => {
    if (search === "") return word;

    const splittedWords = word.split(" ");

    const filteredWords = splittedWords.filter((__val) => {
      return __val.indexOf(search) !== -1;
    });

    const structuredSentence = splittedWords.map((__main, ind) => {
      return (
        <span key={ind}>
          {filteredWords.includes(__main) ? <em> {__main} </em> : __main}
        </span>
      );
    });

    return structuredSentence;
  };

  return <div>{italicizeWords(word)}</div>;
};

export default Italicizer;
