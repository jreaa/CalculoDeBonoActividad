'use strict'
window.addEventListener('load', function() {
    const btn = document.getElementById("btn");
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        let urlApi = "../../controller/calculo.php";

        const promise = async () => {
            const form = document.getElementById("form");
            let data  = new FormData(form);
            try{
                const response = await fetch(urlApi, {
                    method: 'POST',
                    body: data
                });
                const value = await response.json();

                document.getElementById("result").style.display = "block";
                let resultFinal = document.getElementById("resultFinal");
                resultFinal.innerHTML = '';
                resultFinal.append(value);
                
            }catch(error){
                console.log(error);
            }
        
        }
        promise();
    })
})