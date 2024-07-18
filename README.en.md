# memgraph-lab

#### Description
memgraph-lab test

#### Software Architecture
Software architecture description
Only for testing purposes

root@ubuntu:~# docker history f8566c0b20f0
IMAGE          CREATED         CREATED BY                                      SIZE      COMMENT
f8566c0b20f0   2 weeks ago     CMD ["node" "dist-backend/index.js"]            0B        buildkit.dockerfile.v0
<missing>      2 weeks ago     EXPOSE map[3000/tcp:{}]                         0B        buildkit.dockerfile.v0
<missing>      2 weeks ago     RUN /bin/sh -c npm i pino-pretty # buildkit     5.22MB    buildkit.dockerfile.v0
<missing>      2 weeks ago     COPY /app/CHANGELOG.md ./CHANGELOG.md # buil…   33.1kB    buildkit.dockerfile.v0
<missing>      2 weeks ago     COPY /app/.env ./.env # buildkit                1.52kB    buildkit.dockerfile.v0
<missing>      2 weeks ago     COPY /app/dist-frontend ./dist-frontend # bu…   31.2MB    buildkit.dockerfile.v0
<missing>      2 weeks ago     COPY /app/dist-backend ./dist-backend # buil…   5.69MB    buildkit.dockerfile.v0
<missing>      4 weeks ago     WORKDIR /app                                    0B        buildkit.dockerfile.v0
<missing>      15 months ago   /bin/sh -c #(nop)  CMD ["node"]                 0B
<missing>      15 months ago   /bin/sh -c #(nop)  ENTRYPOINT ["docker-entry…   0B
<missing>      15 months ago   /bin/sh -c #(nop) COPY file:4d192565a7220e13…   388B
<missing>      15 months ago   /bin/sh -c apk add --no-cache --virtual .bui…   7.78MB
<missing>      15 months ago   /bin/sh -c #(nop)  ENV YARN_VERSION=1.22.19     0B
<missing>      15 months ago   /bin/sh -c addgroup -g 1000 node     && addu…   160MB
<missing>      15 months ago   /bin/sh -c #(nop)  ENV NODE_VERSION=18.15.0     0B
<missing>      15 months ago   /bin/sh -c #(nop)  CMD ["/bin/sh"]              0B
<missing>      15 months ago   /bin/sh -c #(nop) ADD file:9a4f77dfaba7fd2aa…   7.05MB
