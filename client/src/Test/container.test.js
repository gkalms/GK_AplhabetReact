import { ListTest } from "./List.test";

export const Container = () => {
    
    const getWordsByLetter = (input) => {
            fetch(`http://localhost:9000/api/alphabet/words/${input}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                data: JSON.stringify(),
            }).then((response) => {
                    // console.log("Log 3 Response:", response.json())
                    return response.json()
            
                });
        }

        const handleClickLetter = (e) => {
            const input = e.currentTarget.value
            console.log("log 1 Letter:", input);
            getWordsByLetter(input); 
            console.log("Log 2 function:", getWordsByLetter);
    }
       
    return (
            <div>
                <ListTest handleClick={handleClickLetter} />
            </div>
        );
    };