#!/usr/bin/env bash

# Requires  docker, docker-compose, node, npm

docker compose start

npm run start

docker compose stop
