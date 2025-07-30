FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:stable-alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d

WORKDIR /usr/share/nginx/html
COPY scripts/write-env.sh /docker-entrypoint.d/write-env.sh

RUN chmod +x /docker-entrypoint.d/write-env.sh

EXPOSE 80
ENTRYPOINT ["/docker-entrypoint.d/write-env.sh"]
CMD ["nginx", "-g", "daemon off;"]