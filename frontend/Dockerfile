FROM node:18 AS builder

WORKDIR /test-app-face

COPY package.json /test-app-face/

COPY src/ /test-app-face/src

COPY public/ /test-app-face/public

RUN npm install --no-audit

RUN npm run build

FROM nginx

COPY --from=builder /test-app-face/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]


