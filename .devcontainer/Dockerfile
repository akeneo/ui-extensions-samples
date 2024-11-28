FROM mcr.microsoft.com/devcontainers/typescript-node:22-bookworm

ARG DEV_UID
ARG DEV_GID

RUN mkdir -p /home/vscode/
RUN echo "export DEV_UID="${DEV_UID} >> /home/vscode/.bashrc
RUN echo "export DEV_GID="${DEV_GID} >> /home/vscode/.bashrc

RUN apt-get update && apt-get upgrade -y

RUN npm install -g @go-task/cli