#!/usr/bin/env bash

# Requires  docker, docker-compose, node, npm

docker-compose up -d
npm run start
docker-compose down
