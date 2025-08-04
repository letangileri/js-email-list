const urlApi = 'https://flynn.boolean.careers/exercises/api/random/mail';

axios.get(urlApi)
    .then(response => {
        console.log(response);
        
        const result = response.data.response;

        console.log(response.data.response);
        
        console.log(result);
        
    })