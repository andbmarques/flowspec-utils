const { exec } = require("child_process");
const moment = require("moment");

const supervisorStatus = () =>
  exec("systemctl status WANsupervisor", (error, stdout, stderr) => {
    if (error || stderr) {
      console.log(
        moment().format("lll") + " | SUPERVISOR | ERRO | " + stderr 
      );
      console.log(stdout);
      return;
    }
  });

module.exports = { supervisorStatus };
