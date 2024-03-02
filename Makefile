dev-up:
	docker compose up --build -d
dev-down:
	docker compose down
prod-up:
	docker compose -f compose.production.yaml up --build -d
prod-down:
	docker compose -f compose.production.yaml down
