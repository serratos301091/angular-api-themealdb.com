# Dockerfile
FROM node:16
LABEL authors="Jose Alberto Serratos Osorio"

# Agregamos un usuario
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/usr/src/app
RUN mkdir $HOME
WORKDIR $HOME

# Instalamos angular cli en nuestra imágen
RUN npm install -g @angular/cli@13.*

# Puerto entorno dev
EXPOSE 4200

