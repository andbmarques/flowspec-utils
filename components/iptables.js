//IMPORTA O MÓDULO PARA EXECUTAR COMANDOS BASH
const { exec } = require("child_process");
//IMPORTA A LIB DE DATA E HORA
const moment = require("moment");

//DEFINE UMA FUNÇÃO ANONIMA QUE RETORNA O COMANDO BASH
const ipTablesF = () =>
  exec("iptables -t raw -F", (error, stdout, stderr) => {
    if (error || stderr) {
      console.log(
        moment().format("lll") + " | FIREWALL | ERRO |" + stderr.split(":")[2]
      );
      return;
    }
  });

//DEFINE UMA FUNÇÃO ANONIMA QUE RETORNA O COMANDO BASH
const ipTablesX = () =>
  exec("iptables -t raw -X", (error, stdout, stderr) => {
    if (error || stderr) {
      console.log(
        moment().format("lll") + " | FIREWALL | ERRO |" + stderr.split(":")[2]
      );
      return;
    }
  });

//DEFINE UMA FUNÇÃO ANONIMA QUE RETORNA O COMANDO BASH
const showIpTables = () =>
  exec("iptables -t raw -L", (error, stdout, stderr) => {
    if (error || stderr) {
      console.log(
        moment().format("lll") + " | FIREWALL | ERRO |" + stderr.split(":")[2]
      );
      return;
    }
    console.log(moment().format("lll")+ " | FIREWALL | SUCESSO | REGRAS LIMPAS");
    return;
  });

//EXPORTA AS FUNÇÕES
module.exports = { ipTablesF, ipTablesX, showIpTables };
