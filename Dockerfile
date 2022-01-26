FROM node:12-alpine

RUN mkdir ~/.ssh
COPY keys /root/.ssh/
RUN ls -la ~/
RUN chmod 600 /root/.ssh/id_rsa
RUN chmod 600 /root/.ssh/known_hosts

RUN set -eux && sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories

RUN apk update \
        && apk upgrade \
        && apk add --no-cache bash \
        bash-doc \
        bash-completion \
        && rm -rf /var/cache/apk/*

RUN apk add vim git openssh
RUN git config --global user.email "master@gameai.win"
RUN git config --global user.name "master"

RUN npm install -g vuepress

