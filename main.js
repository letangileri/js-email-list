const urlApi = 'https://flynn.boolean.careers/exercises/api/random/mail';

const emailList = [];
for (let i = 0; i < 10; i++){
    axios.get(urlApi)
        .then(response => {
            // console.log(response);
            
            const result = response.data.response;

            // console.log(response.data.response);
            
            console.log(result);
            emailList.push(result)
            
        })

}
console.log(emailList);
