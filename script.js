require("dotenv").config();

const {
  ipTablesF,
  ipTablesX,
  showIpTables,
} = require("./components/iptables.js");
const { supervisorStatus } = require("./components/checkSupervisor.js");
const { execBatch } = require("./components/execBatch.js");

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
if (process.env.CLEAR_ANNOUNCEMENTS == "true") execBatch();
