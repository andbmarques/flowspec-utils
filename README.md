
# FlowSpec Utils

Custom script to perform allowed functions.

## Usage

Clone repository and install dependencies.

```bash
  apt install sudo nodejs npm
  git clone https://github.com/andbmarques/flowspec-utils.git
  cd flowspec-utils
  npm install
  chmod +x script.js
```

Configure .env

```bash
  nano .env
```

Add the script to cron

```bash
*/5 * * * * cd /home/USER/flowspec-utils/ && sudo node script.js >> /var/log/flowspec-utils.log
```