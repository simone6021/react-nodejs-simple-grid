FROM node:14 AS app-base
RUN mkdir -p /app
WORKDIR /app
COPY . ./
RUN npm install

ENV REACT_APP_HOST=""

EXPOSE 3000

CMD ["npm", "run", "start"]
