//IMPORTA O MÓDULO PARA EXECUTAR COMANDOS BASH
const { exec } = require("child_process");
//IMPORTA A LIB DE DATA E HORA
const moment = require("moment");

//DEFINE UMA FUNÇÃO ANONIMA QUE RETORNA O COMANDO BASH
const supervisorStatus = () =>
  exec("systemctl status WANsupervisor", (error, stdout, stderr) => {
    if (error || stderr) {
      console.log(
        moment().format("lll") +
          " | SUPERVISOR | ERRO | SERVIÇO PARADO > REINICIANDO..."
      );
      exec("systemctl start WANsupervisor", (error, stdout, stderr) => {
        if (error || stderr) {
          console.log(
            moment().format("lll") +
              " | SUPERVISOR | ERRO | NÃO FOI POSSÍVEL INICIAR O SERVIÇO"
          );
          return;
        }
        console.log(
          moment().format("lll") +
            " | SUPERVISOR | SUCESSO | SERVIÇO INICIADO"
        );
      });
      return;
    }
    console.log(
      moment().format("lll") + " | SUPERVISOR | SUCESSO | SERVIÇO RODANDO"
    );
  });

//EXPORTA A FUNÇÃO
module.exports = { supervisorStatus };
