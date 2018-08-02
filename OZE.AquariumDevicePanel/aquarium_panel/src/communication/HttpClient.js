class HttpClient {
    baseUrl = 'http://localhost:41134/api/'

    getFullUrl = (url) => this.baseUrl.concat(url);

    handleResponse = (response) => {
        if (response.status === 200) {
            return response.json();
        }
        return Promise.reject(response);
    }

    get = (url, func) => {
        return fetch(this.getFullUrl(url))
            .then(response => response.json())
            .then(data => {
                console.log(data);
                func(data);
            })
            .catch(error => console.log(error));
    }

    getAsync = async (url) => {
        let result = await fetch(this.getFullUrl(url))
            .then(this.handleResponse)
            .then(data => {
                console.log(data);
                return data;
            })
            .catch(error => console.log(error));

        console.log(result);

        return result;
    }

    post = (url, data, func) =>{
        return fetch(this.getFullUrl(url))
        .then(response => response.json())
        .then(data => {
            console.log(data);
            func(data);
        })
        .catch(error => console.log(error));
    }
}
export default new HttpClient();