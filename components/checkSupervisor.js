const { exec } = require("child_process");
const moment = require("moment");

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

module.exports = { supervisorStatus };
