FROM node:lts-alpine

# Add tini as Docker image entrypoint
RUN apk add --no-cache tini

ARG DEV_UID=1000
ARG DEV_GID=1000

# Ensure the node user have the correct uid/gid
RUN deluser --remove-home node \
  && addgroup -S node -g ${DEV_GID} \
  && adduser -S -G node -u ${DEV_UID} node

# Let the node modules be installed for our node user, not root
USER node
RUN mkdir -p "/home/node/.node"
ENV ENV="/home/node/.profile"
RUN echo "prefix = /home/node/.node" | tee -a ${HOME}/.npmrc
RUN echo "PATH=\"/home/node/.node/bin:$PATH\"" | tee -a ${HOME}/.profile
RUN echo "NODE_PATH=\"/home/node/.node/lib/node_modules:$NODE_PATH\"" | tee -a ${HOME}/.profile

WORKDIR /workspace

# Install required packages
RUN npm install -g @apideck/portman
RUN npm install -g @redocly/cli@latest

ENTRYPOINT ["/sbin/tini", "--"]