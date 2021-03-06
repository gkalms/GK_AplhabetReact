// import React, { useEffect, useState } from "react";
import { ListTest } from "./List.test";

export const Container = () => {
    //1: get the value when Button clicked

    const handleClickLetter = (e) => {
        const letter = e.currentTarget.value
        console.log(letter);
    }
    // 2: Use alphabet value to filter from fetched words and display
    // API call
    fetch('http://localhost:9000/api/alphabet/words/${letter}', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((getWords) => {
            setWordsList(getWords.data);
        });
}, [getWords]
);

    }
return (
    <div>
        <ListTest handleClick={handleClickLetter} />
    </div>
);
};