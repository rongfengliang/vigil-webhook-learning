#!/bin/sh
ab  -p content.json -T application/json  -c 10 -n 20000 http://localhost:3000/