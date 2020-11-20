FROM nginx:latest
COPY default.conf /etc/nginx/conf.d/
COPY Aursmoen/ /usr/share/nginx/html/Aursmoen/
COPY Riserveien16 /usr/share/nginx/html/Riserveien16/
COPY Aursmoen2 /usr/share/nginx/html/Aursmoen2
COPY index.html /usr/share/nginx/html/
