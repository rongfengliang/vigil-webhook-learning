#!/bin/sh
#!/usr/bin/env bash
set -x
DEBUG=0x*
pid=0

# SIGUSR1-handler
sigint_handler() {
  echo "my_handler"
  kill -s SIGINT `ps aux | grep 'node /usr/local/bin/0x' | head -1| awk '{print $1}'`
}

# SIGTERM-handler
term_handler() {
  if [ $pid -ne 0 ]; then
    echo  $pid
    kill -SIGTERM "$pid"
    wait "$pid"
  fi
  exit 143; # 128 + 15 -- SIGTERM
}
# setup handlers
# on callback, kill the last background process, which is `tail -f /dev/null` and execute the specified handler
trap 'kill ${!}; sigint_handler' SIGINT
trap 'kill ${!}; term_handler' SIGTERM

# run application
# yarn start &
0x -D flame app.js
pid="$!"

# wait forever
while true
do
  tail -f /dev/null & wait ${!}
done
