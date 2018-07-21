class HttpClient {
    baseUrl = 'http://localhost:41134/api/'

    getFullUrl = (url) => this.baseUrl.concat(url);

    get = (url) => {
        fetch(this.getFullUrl(url))  
            .then(response => response.json())
            .catch(error => console.log(error))
    }

    getAsync = async (url) => {
        let result = await fetch(this.getFullUrl(url))
                                .then(response => { return response.json()})
                                .catch(error => console.log(error));
        
        console.log(result);

        return result;
    }
}
export default new HttpClient();