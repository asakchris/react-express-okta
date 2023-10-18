FROM node:20-alpine AS base
ENV NODE_ENV=production
RUN mkdir -p /home/node/app
RUN chown -R node:node /home/node && chmod -R 770 /home/node
WORKDIR /home/node/app

COPY --chown=node:node ./package.json ./package.json
COPY --chown=node:node ./package-lock.json ./package-lock.json
USER node
RUN npm install --loglevel warn --production

COPY --chown=node:node ./bin ./bin
COPY --chown=node:node ./middleware ./middleware
COPY --chown=node:node ./routes ./routes
COPY --chown=node:node ./app.js ./app.js

EXPOSE 3100
CMD ["npm", "run-script", "prod"]
