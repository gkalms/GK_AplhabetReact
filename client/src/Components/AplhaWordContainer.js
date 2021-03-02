import React, { useEffect, useState } from "react";
import { AddWords } from "./Addwords";
import { EditWords } from "./Editwords";
import { DeleteWord } from "./Deletewords";
import { ListWords } from "./ListWords";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const AlphaWordContainer = () => {
    /* set up state variables to handle changes - added words */
    const [wordslist, setWordsList] = useState([]);
    const [updateWord, setUpdateWord] = useState({name: "", alphabetName: ""});
    const [deleteWord, setDeleteWord] = useState({name: "",alphabetName: ""});

    /*Adding New words*/
    const handleWordsSubmit = (name, alphabetName) => {
        const newWord = { name: name, alphabetName: alphabetName }; /* will read new entry and put in temp variable*/
        const addWords = [...wordslist] /*bring in state variable*/
        addWords.push(newWord); /* add new word to temp variable"*/
        setWordsList(addWords); /* update state - update list/array of words*/
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
                setWordsList(wordslist.data);
            });
    }, [wordslist]);
    
    /*Editing words*/
    //  When you click on a word on the list - find the index(unique key identifying the word)
    const handleWordClick = (wordIndex) => {
        const word = wordslist[wordIndex];
        /* set to-be-state*/
        setUpdateWord(word);
        setDeleteWord(word);
    };
    const handleEditWord = (word) => {
        const findWord = wordslist.findIndex((wordEl) => {
            return wordEl._id === word._id;
        });
        const addWords = [...wordslist];
        addWords[findWord] = word
        setWordsList(addWords);
        fetch(`http://localhost:9000/api/alphabet/update-word/${word._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(word),
        }).then((response) => {
            console.log('PUT response:', response);
        })
    };

    // Delete words
    const handleDeleteWord = (word) => {
        const findWord = wordslist.findIndex((wordEl) => {
            return wordEl._id === word._id;
        });
        const removeWord = [...wordslist];
        removeWord[findWord] = word
        setWordsList(removeWord);
        fetch(`http://localhost:9000/api/alphabet/delete-word/${word._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(word),
        }).then((response) => {
            console.log('PUT response:', response);
        })
    };

    return (
        <Router>
            <div>
                <ListWords words={wordslist} handleClick={handleWordClick} />
                <Link to="/ListWords">List</Link>
                <Link to="/AddWords">Add</Link>
                <Link to="/EditWords">Edit</Link>
                <Link to="/DeleteWord">Delete</Link>
                <Switch>
                    <Route path="/AddWords">
                        <AddWords submit={handleWordsSubmit} />
                    </Route>
                    <Route path="/ListWords">
                        <ListWords words={wordslist} />
                    </Route>
                    <Route path="/EditWords">
                        <EditWords submit={handleEditWord} word={updateWord} />
                    </Route>
                    <Route path="/DeleteWord">
                        <DeleteWord submit={handleDeleteWord} word={deleteWord} />
                    </Route>
                </Switch>
            </div>
        </Router >
    );
};

export { AlphaWordContainer };