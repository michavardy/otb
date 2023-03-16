# Generic Fast React Mongo Application Docker-Compose
![logo](logo.png)
## Goal

the goal of this project is to provide a git clonable docker compose project that is a single command to download and build the entire full stack FastAPI backend, React Frontend, Mongo Database.


## Commands to setup
```
git clone /path/to/FAST-REACT-MONGO-GENERIC /path/to/new/project/directory
/bin/bash setup.sh          ## downloads all react files
docker-compose up           ## to start up docker-compose
docker-compose down         ## to take down docker-compose
```
# Commands to develop
```
download Dev Containers Extension
ctrl+shift+p
Dev Containers: Attach to running container
Select: container name
frontend
```
# Save container to image
```
docker commit 
```

# reset git
```
git remote -v                                   ## see what current remote repository is called; default is origin
git remote remove <remote-name> 
git remote add <remote-name> <remote-url>       ## set remote-name to origin           
git remote -v
git push -u <remote-name> <branch-name>
```

