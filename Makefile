
NAME = ft_transcendence

COMPOSE = docker compose
COMPOSE_FILE = compose.yaml

all: up

up:
	$(COMPOSE) -f $(COMPOSE_FILE) up -d --build

build:
	$(COMPOSE) -f $(COMPOSE_FILE) build

down:
	$(COMPOSE) -f $(COMPOSE_FILE) down

stop:
	$(COMPOSE) -f $(COMPOSE_FILE) stop

start:
	$(COMPOSE) -f $(COMPOSE_FILE) start

status:
	$(COMPOSE) -f $(COMPOSE_FILE) ps

bash:
	$(COMPOSE) -f $(COMPOSE_FILE) exec frontend bash

logs:
	$(COMPOSE) -f $(COMPOSE_FILE) logs -f

logs-frontend:
	$(COMPOSE) -f $(COMPOSE_FILE) logs -f frontend

shell:
	$(COMPOSE) -f $(COMPOSE_FILE) exec frontend bash

clean: down
	docker container prune -f

fclean: down
	$(COMPOSE) -f $(COMPOSE_FILE) down --rmi local --volumes --remove-orphans

re: fclean all

