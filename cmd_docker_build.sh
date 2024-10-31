#!/bin/bash

REPOSITORY=127.0.0.1:5000
TAG=dsastack:1.0

docker build -t $REPOSITORY/$TAG .
