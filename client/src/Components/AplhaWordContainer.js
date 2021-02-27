import React, { useEffect, useState } from "react";
import { AddWords } from "./Addwords";
import { ListWords } from "./ListWords";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const AlphaWordContainer = () => {
    /* set up state variables to handle changes - added words */
    const [addMoreWords, setAddWord] = useState([]);

    /* Get the alphabet list to populate alphabet dropdown*/


    const handleWordsSubmit = (name, alphabet) => {
        const newWord = { name: name, alphabet: alphabet}; /* will read new entry and put in temp variable*/
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
                // call to set state
                setAddWord(wordslist.data);
            });
    }, []);

    return (
        <Router>
            <div>
                <Link to="/AddWords">Add words</Link>
                <Link to="/ListWords">List words</Link>
                <Switch>
                    <Route path="/AddWords">
                        <AddWords submit={handleWordsSubmit} />
                    </Route>
                    <Route path="/ListWords">
                        <ListWords words={addMoreWords} />
                    </Route>
                </Switch>
            </div>
        </Router >
    );
};

export { AlphaWordContainer };