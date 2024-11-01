//CONFIGURA O .ENV
require("dotenv").config();

//IMPORTA OS MÓDULOS DE LIMPEZA DE FIREWALL
const { ipTablesF, ipTablesX, showIpTables } = require("./components/iptables.js");
//IMPORTA O MÓDULO DE STATUS DO SUPERVISOR
const { supervisorStatus } = require("./components/checkSupervisor.js");
//IMPORTA O MÓDULO DE LIMPEZA DE ANÚNCIOS
const { execBatch } = require("./components/execBatch.js");

//DEFINE A FUNÇÃO DE LIMPEZA DO FIREWALL
function modifyFirewall() {
  ipTablesF();
  ipTablesX();
  showIpTables();
}

//DEFINE A FUNÇÃO DE STATUS DO SUPERVISOR
function checkSupervisor() {
  supervisorStatus();
}

//VERIFICA NO .ENV QUAIS MODULOS DEVERÃO SER EXECUTADOS
if (process.env.MODIFY_FIREWALL == "true") modifyFirewall();
if (process.env.CHECK_SUPERVISOR == "true") checkSupervisor();
if (process.env.CLEAR_ANNOUNCEMENTS == "true") execBatch();
