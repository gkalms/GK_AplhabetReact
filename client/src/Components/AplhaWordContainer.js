import React, { useEffect, useState } from "react";
import { AddWords } from "./Addwords";
import { ListWords } from "./ListWords";

const AlphaWordContainer = () => {
    /* set up state variables to handle changes - added words */
    const [addMoreWords, setAddWord] = useState([]);

    const handleWordsSubmit = (name, alphabet) => {
        const newWord = { name: name, alphabet: alphabet }; /* will read new entry and put in temp variable*/
        const moreWords = [...addMoreWords] /*bring in state variable*/
        moreWords.push(newWord); /* add new word to temp variable"*/
        setAddWord(moreWords); /* update state - update list/array of words*/

        /* Then add new word to database*/
        fetch("http://localhost:9000/api/alphabet", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newWord),
        }).then((response) => {
            console.log("response:", response);
        });
    };
    /* Then read words from database*/
    useEffect(() => {
        fetch("http://localhost:9000/api/alphabet/words/all", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                console.log("reponse", response);
                return response.json();
            })
            .then((wordslist) => {
                console.log("word list:", wordslist);
                // call to set state
                setAddWord(wordslist.data);
            });
    }, []);

    return (
        <div>
            <ListWords words={addMoreWords} />
            <AddWords submit={handleWordsSubmit} />
        </div>
    );
};

export { AlphaWordContainer };