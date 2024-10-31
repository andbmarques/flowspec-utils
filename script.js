require("dotenv").config();

const {
  ipTablesF,
  ipTablesX,
  showIpTables,
} = require("./components/iptables.js");
const { supervisorStatus } = require("./components/checkSupervisor.js");

function modifyFirewall() {
  ipTablesF();
  ipTablesX();
  showIpTables();
}

function checkSupervisor() {
  supervisorStatus();
}

if (process.env.MODIFY_FIREWALL == "true") modifyFirewall();
if (process.env.CHECK_SUPERVISOR == "true") checkSupervisor();
