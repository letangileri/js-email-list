const urlApi = 'https://flynn.boolean.careers/exercises/api/random/mail';

let emailList = [];
for (let i = 0; i < 10; i++){
    axios.get(urlApi)
        .then(response => {
            // console.log(response);
            
            const result = response.data.response;

            // console.log(response.data.response);
            
            console.log(result);
            emailList.push(result)
            // document.writeln(emailList);
            
            
            if (emailList.length == 10){
                // document.writeln(emailList);
            }
        })
}
console.log(emailList);

// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
let emailList2 = [];

const elemButton = document.getElementById("getEmail")
const ulElem = document.getElementById('email-list')
elemButton.addEventListener('click',
    function (){
        console.log("ciao");
        for (let i = 0; i < 10; i++){
            axios.get(urlApi)
            .then(response => {
                const result = response.data.response;
                emailList2.push(result)
                console.log(emailList2);
                ulElem.innerHTML = `<li> ${result} </li>`

                // if (emailList2.length == 10){
                //     console.log("ciao");
                    
                //     ulElem.innerHTML = `<li> ${result} </li>`
                // }
                // document.writeln(result);
                
            })
        }
    }
)
