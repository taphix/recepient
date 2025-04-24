# Используем официальный образ Nginx
FROM nginx:alpine

# Копируем файлы сайта в папку, которую использует Nginx
COPY . /usr/share/nginx/html

# Копируем конфигурационный файл Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80 для HTTP
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]