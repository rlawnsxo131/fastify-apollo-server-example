# mariadb

```shell
# If the current path is under the docker folder
$ docker compose up -d
$ docker compose down

# If the current path is the root of the project
$ docker compose -f ./docker/docker-compose.yml up -d --build
$ docker compose -f ./docker/docker-compose.yml up -d
$ docker compose -f ./docker/docker-compose.yml down
```
