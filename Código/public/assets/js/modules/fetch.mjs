/*
    @author jose.inestroza@unah.edu.hn
    @version 0.1.0
    @date 2026/11/22
    @since 2026/11/22
*/

const getData = async (url) => {
    try{
        const response = await fetch(url);
        if(!response.status){
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch(error){
        console.error(error.message);
        return false;
    }
};

export{ getData };