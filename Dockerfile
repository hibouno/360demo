FROM nginx:latest
COPY default.conf /etc/nginx/conf.d/
COPY Aursmoen/ /usr/share/nginx/html/Aursmoen/
COPY Demoveien1 /usr/share/nginx/html/Demoveien1/
COPY Aursmoen2 /usr/share/nginx/html/Aursmoen2
COPY beforeafter /usr/share/nginx/html/beforeafter/
COPY julehilsen  /usr/share/nginx/html/julehilsen/
COPY skisenter /usr/share/nginx/html/bjorkelangenskisenter/
COPY Kontor /usr/share/nginx/html/kontor/
COPY minigalleri /usr/share/nginx/html/minigalleri/
COPY opcbeta /usr/share/nginx/html/opcbeta/
COPY index.html /usr/share/nginx/html/
