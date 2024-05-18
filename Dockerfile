FROM node:20.10.0 as base

WORKDIR /app


COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
