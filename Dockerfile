FROM nginx:latest
COPY default.conf /etc/nginx/conf.d/
COPY Aursmoen/ /usr/share/nginx/html/Aursmoen/
COPY Riserveien16 /usr/share/nginx/html/Riserveien16/
COPY Aktiv_demo /usr/share/nginx/html/Aktiv_demo

