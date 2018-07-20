class HttpClient {
    baseUrl = ''

    get = (url) => {
        let fullUrl = this.baseUrl.concat(url);

        let response;

        fetch(fullUrl)  
            .then(response => response.json())
            .then(json => response = json);

        return response;
    }
}
export default new HttpClient();