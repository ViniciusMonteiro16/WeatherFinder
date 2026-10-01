const chaveAPI = "3363b5de0c6f76b95467db99f6ceb517";


async function buscarClima(){


    const cidade =
    document
    .getElementById("cidade")
    .value
    .trim();



    const resultado =
    document.getElementById("resultado");



    if(cidade === ""){


        resultado.innerHTML =
        `
        <p>
        Digite uma cidade.
        </p>
        `;


        return;

    }



    resultado.innerHTML =
    `
    <p>
    Carregando...
    </p>
    `;



    try{


        const resposta =
        await fetch(

        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveAPI}&units=metric&lang=pt_br`

        );



        if(!resposta.ok){

            throw new Error();

        }



        const dados =
        await resposta.json();



        resultado.innerHTML =


        `

        <div class="card">


            <h2>
            ${dados.name}
            </h2>


            <img
            src="https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png"
            >


            <div class="info">


                <p>
                Temperatura:
                ${dados.main.temp}°C
                </p>


                <p>
                Sensação térmica:
                ${dados.main.feels_like}°C
                </p>


                <p>
                Umidade:
                ${dados.main.humidity}%
                </p>


                <p>
                Clima:
                ${dados.weather[0].description}
                </p>


            </div>


        </div>


        `;



    }catch(error){


        resultado.innerHTML =

        `

        <p>
        Cidade não encontrada ou erro na API.
        </p>

        `;


    }


}