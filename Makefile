DEV_PROJECT_NAME := fandle-${USER}
DEV_DOCKER_SERVICES_DEFAULT := node


dev-init:
	@docker-compose up -d ${DEV_DOCKER_SERVICES_DEFAULT}

dev-stop:
	@docker-compose down
