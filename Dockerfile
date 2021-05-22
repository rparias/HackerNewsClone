# install dependencies
FROM node:16.2.0-slim
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# build
FROM node:16.2.0-slim
WORKDIR /app
COPY --from=0 /app .
COPY . .
RUN npm run build

# nginx
FROM nginx
COPY --from=1 /app/dist /usr/share/nginx/html

#docker run --name nginx -d -p 8080:80 rparias/hackernewsclone