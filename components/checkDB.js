//IMPORTA O MÓDULO PARA EXECUTAR COMANDOS BASH
const { exec } = require("child_process");
//IMPORTA A LIB DE DATA E HORA
const moment = require("moment");

//DEFINE UMA FUNÇÃO ANONIMA QUE RETORNA O COMANDO BASH
const mariaDbStatus = () =>
  exec("systemctl status mysql", (error, stdout, stderr) => {
    if (error || stderr) {
      console.log(
        moment().format("lll") +
          " | MYSQL | ERRO | SERVIÇO PARADO > REINICIANDO..."
      );
      exec("systemctl start mysql", (error, stdout, stderr) => {
        if (error || stderr) {
          console.log(
            moment().format("lll") +
              " | MYSQL | ERRO | NÃO FOI POSSÍVEL INICIAR O SERVIÇO"
          );
          return;
        }
        console.log(
          moment().format("lll") + " | MYSQL | SUCESSO | SERVIÇO INICIADO"
        );
      });
      return;
    }
    console.log(
      moment().format("lll") + " | MYSQL | SUCESSO | SERVIÇO RODANDO"
    );
  });

const influxDbStatus = () =>
  exec("systemctl status influxdb", (error, stdout, stderr) => {
    if (error || stderr) {
      console.log(
        moment().format("lll") +
          " | INFLUXDB | ERRO | SERVIÇO PARADO > REINICIANDO..."
      );
      exec("systemctl start influxdb", (error, stdout, stderr) => {
        if (error || stderr) {
          console.log(
            moment().format("lll") +
              " | INFLUXDB | ERRO | NÃO FOI POSSÍVEL INICIAR O SERVIÇO"
          );
          return;
        }
        console.log(
          moment().format("lll") + " | INFLUXDB | SUCESSO | SERVIÇO INICIADO"
        );
      });
      return;
    }
    console.log(
      moment().format("lll") + " | INFLUXDB | SUCESSO | SERVIÇO RODANDO"
    );
  });

//EXPORTA A FUNÇÃO
module.exports = { mariaDbStatus, influxDbStatus };
