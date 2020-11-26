FROM nginx:latest
COPY default.conf /etc/nginx/conf.d/
COPY Aursmoen/ /usr/share/nginx/html/Aursmoen/
COPY Demoveien1 /usr/share/nginx/html/Demoveien1/
COPY Aursmoen2 /usr/share/nginx/html/Aursmoen2
COPY index.html /usr/share/nginx/html/
