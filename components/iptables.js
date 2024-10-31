const { exec } = require("child_process");
const moment = require("moment");

const ipTablesF = () =>
  exec("iptables -t raw -F", (error, stdout, stderr) => {
    if (error || stderr) {
      console.log(
        moment().format("lll") + " | FIREWALL | ERRO |" + stderr.split(":")[2]
      );
      return;
    }
  });

const ipTablesX = () =>
  exec("iptables -t raw -X", (error, stdout, stderr) => {
    if (error || stderr) {
      console.log(
        moment().format("lll") + " | FIREWALL | ERRO |" + stderr.split(":")[2]
      );
      return;
    }
  });

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

module.exports = { ipTablesF, ipTablesX, showIpTables };
