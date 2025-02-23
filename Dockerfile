FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENV VITE_API_URL=http://localhost:8082/api/v1

EXPOSE 5173

CMD [ "yarn", "run", "dev", "--host", "0.0.0.0" ]
