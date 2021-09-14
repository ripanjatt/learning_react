import Headers from "./utils/Cors";

let url = "https://wallpaperaccess.com/search?q=";
let photoURL = "https://wallpaperaccess.com/full/";

const Util = async (keyword, setPhotos) => {
    let completeURL = url + keyword.replaceAll(" ", "+");
    let response = await fetch(
        completeURL, {
            method: 'GET',
            headers: Headers
        }
    )
    let result = await response.text();
    const wallpapers = extract(result);
    setPhotos(wallpapers);
}

function extract(html) {
    let columns = (new DOMParser()).parseFromString(html, "text/html").getElementsByClassName("column collection_thumb");
    let imgs = [];
    for(let i = 0; i < columns.length; i ++) {
        imgs.push(photoURL + columns.item(i).getElementsByTagName("img").item(0).getAttribute("data-src").replace("/thumb/", ""));
    }
    return imgs;
}

export default Util;