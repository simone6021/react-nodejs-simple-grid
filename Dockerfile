FROM node:14 AS app-build
RUN mkdir /app
WORKDIR /app
COPY app/ /app
RUN npm install && npm run build

FROM node:14 AS server-base
RUN mkdir /server
WORKDIR /server
COPY --from=app-build /app/build ./app/build
COPY api/package*.json ./api/
COPY api/MOCK_DATA.json ./api/
WORKDIR /server/api

FROM server-base AS server-dev
COPY api/* ./
RUN npm install

FROM server-dev AS server-build
RUN npm run build

FROM server-base AS server-prod
COPY --from=server-build /server/api/build/* ./

EXPOSE 3080

CMD ["npm", "start"]
