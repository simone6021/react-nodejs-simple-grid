FROM node:14 AS server-base
RUN mkdir -p /server
WORKDIR /server
COPY api/package*.json ./api/
COPY api/data ./api/data

EXPOSE 3080

FROM server-base AS server-dev
WORKDIR /server/api
COPY . ./
RUN npm install

FROM server-dev AS api-build
RUN npm run build

FROM node:14 AS app-build
RUN mkdir /app
WORKDIR /app
COPY app/ /app
RUN npm install && npm run build

FROM server-base AS server-build
COPY --from=api-build /server/api/build ./build
COPY --from=app-build /app/build ./app/build

CMD ["npm", "run", "start"]
