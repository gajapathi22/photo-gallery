const API_URL = process.env.REACT_APP_API_URL;

console.log(API_URL)
const getImages = async(nextCursor) => {
   const params = new URLSearchParams();


   if(nextCursor){
    params.append('next_cursor',nextCursor)
   }

    const response = await fetch(`${API_URL}/photos?${params}`);
    const responseJson = await response.json();

    return responseJson;
};

export const searchImage= async(searchValue,nextCursor)=>{
    const params = new URLSearchParams();
    params.append(`expression`,searchValue)

    if(nextCursor){
        params.append('next_cursor',nextCursor)
    }

    const response = await fetch(`${API_URL}/search?${params}`);
    const responseJson =await response.json();

    return responseJson
}

export { getImages}


