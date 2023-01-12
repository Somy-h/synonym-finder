import { useState, useRef } from "react";
// import { useQuery } from "react-query";
// import axios from "axios";
import { useFetchData } from "../hooks/useSynonymData";

import Button from "./button.component.js";
import "./synonymFinder.styles.scss";

const SynonymFinder = () => {
  const [queryWord, setQueryWord] = useState("");
  const inputWordRef = useRef(null);
  const {
    data: synonymData,
    refetch,
    isRefetching,
  } = useFetchData(`words?rel_syn=${queryWord}`);

  const { data: wordMeaningData, refetch: wordMeaningDataRefetch } =
    useFetchData(`words?sp=${queryWord}&md=dr&max=1`);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchSynonym();
    }
  };

  const handleSearchSynonym = async () => {
    setQueryWord(inputWordRef.current.value);
    refetch();
    wordMeaningDataRefetch();
  };

  const handleClickWord = (word) => {
    console.log(word);
    inputWordRef.current.value = word;
    handleSearchSynonym();
  };

  const synonymWords = synonymData?.data.map((wordItem) => (
    <Button
      key={wordItem.word}
      className='button-container inverted'
      onClick={() => handleClickWord(wordItem.word)}
    >
      {wordItem.word}
    </Button>
  ));

  return (
    <div className='container'>
      <input
        className='form-input'
        placeholder='...enter a word'
        name='queryWord'
        ref={inputWordRef}
        onKeyDown={handleKeyDown}
      />
      <Button isLoading={isRefetching} onClick={handleSearchSynonym}>
        Search Synonym
      </Button>
      <div className='dic-container'>{wordMeaningData?.data[0]?.defs[0]}</div>

      <div className='result-container'>{synonymWords}</div>
    </div>
  );
};
export default SynonymFinder;
