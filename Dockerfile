FROM node:23 AS builder
# https://hub.docker.com/_/node
# Debian GNU/Linux 12

ARG INSTALL_PATH=/usr/local/bin/dsastack

WORKDIR ${INSTALL_PATH}

COPY . .

RUN chown -R node:node ${INSTALL_PATH}

USER node
# uid=1000(node) gid=1000(node) groups=1000(node)

RUN ["npm", "install"]

CMD ["npm", "run", "start:dev:host"]