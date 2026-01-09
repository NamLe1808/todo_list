# Sử dụng Nginx
FROM nginx:alpine 
# Sao chép nội dung trang web vào thư mục phục vụ của Nginx
COPY . /usr/share/nginx/html
# Mở cổng 80
EXPOSE 80