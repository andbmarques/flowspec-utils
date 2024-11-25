//IMPORTA O MÓDULO PARA EXECUTAR COMANDOS BASH
const { exec } = require("child_process");
//IMPORTA A LIB DE DATA E HORA
const moment = require("moment");

//DEFINE UMA FUNÇÃO ANONIMA QUE RETORNA O COMANDO BASH
const exabgpStatus = () =>
  exec("systemctl status exabgp", (error, stdout, stderr) => {
    if (error || stderr) {
      console.log(
        moment().format("lll") +
          " | EXABGP | ERRO | SERVIÇO PARADO > REINICIANDO..."
      );
      exec("systemctl start exabgp", (error, stdout, stderr) => {
        if (error || stderr) {
          console.log(
            moment().format("lll") +
              " | EXABGP | ERRO | NÃO FOI POSSÍVEL INICIAR O SERVIÇO"
          );
          return;
        }
        console.log(
          moment().format("lll") +
            " | EXABGP | SUCESSO | SERVIÇO INICIADO"
        );
      });
      return;
    }
    console.log(
      moment().format("lll") + " | EXABGP | SUCESSO | SERVIÇO RODANDO"
    );
  });

//EXPORTA A FUNÇÃO
module.exports = { exabgpStatus };
