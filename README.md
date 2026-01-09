# 📝 To-Do List Application

Ứng dụng quản lý công việc đơn giản, hiện đại giúp bạn theo dõi tiến độ công việc hàng ngày. Được xây dựng bằng HTML, CSS, JavaScript thuần và hỗ trợ Docker.

## 🚀 Tính năng nổi bật

- **Quản lý Task:** Thêm, sửa, xóa và đánh dấu hoàn thành công việc.
- **Theo dõi tiến độ:** Thanh Progress Bar hiển thị % hoàn thành và số lượng task.
- **Hiệu ứng ăn mừng:** Bắn pháo giấy (Confetti) khi hoàn thành 100% công việc.
- **Giao diện Sáng/Tối (Dark Mode):** Chuyển đổi linh hoạt, tự động lưu trạng thái giao diện ưa thích.
- **Lưu trữ dữ liệu:** Dữ liệu được lưu vào `LocalStorage` của trình duyệt, không bị mất khi tải lại trang.
- **Phím tắt:** Hỗ trợ phím `Enter` để thêm nhanh công việc.

## 🛠️ Công nghệ sử dụng

- **Frontend:** HTML5, CSS3 (Variables, Flexbox, Animations), JavaScript (Vanilla).
- **Libraries:** `@tsparticles/confetti` (Hiệu ứng pháo giấy).
- **Deployment:** Docker (Nginx Alpine).

## computer: Cài đặt và chạy

### Cách 1: Chạy trực tiếp

Đơn giản là mở file `index.html` bằng trình duyệt web của bạn.

### Cách 2: Chạy bằng Docker

Dự án đã được tích hợp Docker để dễ dàng triển khai.

1.  **Build Docker Image:**

    ```bash
    docker build -t todo-list .
    ```

2.  **Run Container:**
    ```bash
    docker run -d -p 8080:80 todo-list
    ```
    Sau đó truy cập `http://localhost:8080` để trải nghiệm ứng dụng.
## 👤 Author
Developed by **NamLe1808**
