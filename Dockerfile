
FROM debian:bookworm

WORKDIR /app

RUN apt-get update && \
    apt-get install -y curl ca-certificates && \
    curl -fsSL https://deb.nodesource.com/setup_22.x -o /tmp/nodesource_setup.sh && \
    bash /tmp/nodesource_setup.sh && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/* /tmp/nodesource_setup.sh

COPY profile/package*.json ./

RUN npm install

COPY profile/ ./

EXPOSE 3002

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
