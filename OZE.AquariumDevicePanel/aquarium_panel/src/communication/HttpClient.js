class HttpClient {
    baseUrl = 'https://localhost:44348/'

    getFullUrl = (url) => this.baseUrl.concat(url);

    get = (url) => {
        fetch(this.getFullUrl(url))  
            .then(response => response.json())
            .then(json => console.log(json));
    }

    getAsync = async (url) => {
        let response = await fetch(this.getFullUrl(url));
        let json = await response.json();
        
        console.log(json);
        return json;
    }
}
export default new HttpClient();