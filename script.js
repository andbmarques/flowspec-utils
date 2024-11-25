//CONFIGURA O .ENV
require("dotenv").config();

//IMPORTA OS MÓDULOS DE LIMPEZA DE FIREWALL
const {
  ipTablesF,
  ipTablesX,
  showIpTables,
} = require("./components/iptables.js");
//IMPORTA O MÓDULO DE STATUS DO SUPERVISOR
const { supervisorStatus } = require("./components/checkSupervisor.js");
//IMPORTA O MÓDULO DE LIMPEZA DE ANÚNCIOS
const { execBatch } = require("./components/execBatch.js");
//IMPORTA O MÓDULO DE STATUS DOS BANCOS DE DADOS
const { mariaDbStatus, influxDbStatus } = require("./components/checkDB.js");
//IMPORTA O MÓDULO DE STATUS DO EXABGP
const { exabgpStatus } = require("./components/checkExaBgp.js");

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

//DEFINE A FUNÇÃO DE STATUS DOS BANCOS DE DADOS
function checkDB() {
  mariaDbStatus();
  influxDbStatus();
}

//DEFINE A FUNÇÃO DE STATUS DO EXABGP
function checkExaBgp() {
  exabgpStatus();
}

//VERIFICA NO .ENV QUAIS MODULOS DEVERÃO SER EXECUTADOS
if (process.env.MODIFY_FIREWALL == "true") modifyFirewall();
if (process.env.CHECK_SUPERVISOR == "true") checkSupervisor();
if (process.env.CHECK_DB == "true") checkDB();
if (process.env.CHECK_EXABGP == "true") checkExaBgp();
if (process.env.CLEAR_ANNOUNCEMENTS == "true") execBatch();
