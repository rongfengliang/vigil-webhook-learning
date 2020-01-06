#!/bin/sh
ab  -p content.json -T application/json  -c 10 -n 20000 http://127.0.0.1:3000/