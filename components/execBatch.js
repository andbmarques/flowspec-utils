//IMPORTA A LIB DE DATA E HORA
const moment = require("moment");

async function execBatch() {
  //Define as constantes de acesso a API
  const apiUrl = process.env.WAN_API_URL;
  const apiUser = process.env.WAN_API_USER;
  const apiUserPass = process.env.WAN_API_PASS;

  // Realiza um try/catch para capturar erros caso falhe a chamada a api
  try {
    //Realiza a chamada a api
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/html",
        Authorization: "Basic " + btoa(apiUser + ":" + apiUserPass),
      },
      body: JSON.stringify({
        batch_action: "Clear",
      }),
    });

    //Verifica se a resposta está OK, caso não esteja retorna um erro.
    if (!response.ok)
      throw new Error(
        "HTTP Error: " + response.status + " " + response.statusText
      );

    //Se tudo ocorrer OK retorna um aviso.
    console.log(
      moment().format("lll") + " | WANGUARD | SUCESSO | ANÚNCIOS LIMPOS"
    );
  } catch (error) {
    //Informa um erro via console
    console.log(moment().format("lll") + " | WANGUARD | ERRO | ERRO AO LIMPAR ANÚNCIOS | " + error.message );
  }
}

module.exports = { execBatch };
