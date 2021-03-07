// import React, { useEffect, useState } from "react";
import { ListTest } from "./List.test";

export const Container = () => {
    //1: get the value when Button clicked

    const handleClickLetter = (e) => {
        const input = e.currentTarget.value
        console.log("letter:", input);
    // 2: Use alphabet value to filter from fetched words and display
    // API call
    
    const getWordsByLetter = () => {
            fetch('http://localhost:9000/api/alphabet/words/{input}', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                data: JSON.stringify(),
            }).then((response) => {
                    console.log("response:", response)
                    return response.json()
                });
        }
    }
       
    return (
            <div>
                <ListTest handleClick={handleClickLetter} />
            </div>
        );
    };