class HttpClient {
    get = (url) => {
        fetch(url)  
            .then(response => response.json())
            .then(json => console.log(json));
    }
}
export default new HttpClient();