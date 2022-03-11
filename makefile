run:
	docker-compose up -d

push:
	docker exec -it vue /usr/bin/git push
	
pull:
	docker exec -it vue /usr/bin/git pull
