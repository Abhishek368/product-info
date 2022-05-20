FROM nginx:alpine
COPY ./dist/apm ./usr/share/nginx/html
