import React, { useEffect, useState } from "react";
import { AddWords } from "./Addwords";
import { EditWordsForm } from "./Editwords";
import { ListWords } from "./ListWords";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const AlphaWordContainer = () => {
    /* set up state variables to handle changes - added words */
    const [addMoreWords, setAddWord] = useState([]);
    const [updateWord, setWordUpdate] = useState({
        name: "",
        alphabetName: ""
    });

    /*Adding New words*/
    const handleWordsSubmit = (name, alphabetName) => {
        const newWord = { name: name, alphabetName: alphabetName }; /* will read new entry and put in temp variable*/
        const moreWords = [...addMoreWords] /*bring in state variable*/
        moreWords.push(newWord); /* add new word to temp variable"*/
        setAddWord(moreWords); /* update state - update list/array of words*/
        /* Then add new word to database*/
        fetch("http://localhost:9000/api/alphabet/words", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newWord),
        });
    };


    /* Read from database and populate word list*/
    useEffect(() => {
        fetch("http://localhost:9000/api/alphabet/words/all", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((wordslist) => {
                // call to set state
                setAddWord(wordslist.data);
            });
    }, [addMoreWords]);

    /*Editing words*/


    //  When you click on a word on the list - find the index(unique key identifying the word)
    const handleWordClick = (wordIndex) => {
        const word = addMoreWords[wordIndex];
        /* state is loaded with the word data to be manipulated*/
        setWordUpdate(word);
    };

    const handleEditWord = (word) => {
        const findWord = addMoreWords.findIndex((wordEl) => {
            return wordEl._id === word._id;
        });
        const moreWords = [...addMoreWords];
        moreWords[findWord] = word

        setAddWord(moreWords);/* Update the database*/
        fetch(`http://localhost:9000/api/alphabet/words/${word._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(word),
        });
    };

    return (
        <Router>
            <div>
                <ListWords words={addMoreWords} handleClick={handleWordClick} />

                <Link to="/ListWords">List words</Link>
                <Link to="/AddWords">Add words</Link>
                <Link to="/EditWordsForm">Edit words</Link>
                <Switch>
                    <Route path="/AddWords">
                        <AddWords submit={handleWordsSubmit} />
                    </Route>
                    <Route path="/ListWords">
                        <ListWords words={addMoreWords} />
                    </Route>
                    <Route path="/EditWordsForm">
                        <EditWordsForm submit={handleEditWord} word={updateWord} />
                    </Route>
                </Switch>
            </div>
        </Router >
    );
};

export { AlphaWordContainer };