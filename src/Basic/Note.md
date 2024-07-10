## Hiểu cấu trúc thư mục dự án

Cấu trúc thư mụccho dự án React Native 0.74

README.md: Tệp này cung cấp thông tin tổng quan về dự án, cách cài đặt, sử dụng và các hướng dẫn khác.
package.json: Tệp này chứa thông tin về dự án và các phụ thuộc (dependencies) cần thiết để chạy dự án.
.gitignore: Danh sách các tệp và thư mục sẽ bị bỏ qua bởi Git, giúp tránh việc đưa các tệp không cần thiết lên kho lưu trữ.
node_modules: Thư mục này chứa tất cả các gói npm được cài đặt. Thư mục này được tự động tạo và quản lý bởi npm/yarn.
babel.config.js: Cấu hình Babel để chuyển đổi mã JavaScript hiện đại sang phiên bản tương thích với nhiều môi trường khác nhau.
metro.config.js: Cấu hình Metro bundler, trình đóng gói mặc định cho React Native.
App.js: Tệp chính của ứng dụng, chứa component gốc của ứng dụng.

src (Thư mục mã nguồn) - Tự triển khai
assets: Chứa các tài nguyên như hình ảnh, phông chữ, âm thanh, v.v.
components: Chứa các component tái sử dụng trong ứng dụng. Ví dụ: Button, Header, Footer.
screens: Chứa các màn hình chính của ứng dụng. Ví dụ: HomeScreen, LoginScreen, ProfileScreen.
navigation: Chứa cấu hình và logic điều hướng của ứng dụng, thường sử dụng React Navigation.
services: Chứa các tệp liên quan đến dịch vụ như API calls, quản lý dữ liệu.
store: Chứa các tệp liên quan đến quản lý trạng thái (Redux, MobX, hoặc Context API).
styles: Chứa các tệp định nghĩa style chung cho ứng dụng.
utils: Chứa các hàm tiện ích, công cụ dùng chung cho toàn bộ ứng dụng.
hooks: Chứa các custom hooks sử dụng trong ứng dụng.

android (Thư mục Android)
Chứa mã nguồn và cấu hình cho phiên bản Android của ứng dụng.
build.gradle: Tệp cấu hình build cho ứng dụng Android.
app: Thư mục con chứa mã nguồn của ứng dụng Android.
gradle: Thư mục chứa mã nguồn Gradle Wrapper.

ios (Thư mục iOS)
Chứa mã nguồn và cấu hình cho phiên bản iOS của ứng dụng.
Podfile: Tệp cấu hình CocoaPods để quản lý các phụ thuộc của iOS.
AppDelegate.m: Điểm bắt đầu của ứng dụng iOS.
Info.plist: Tệp cấu hình thông tin của ứng dụng iOS.
test (Thư mục kiểm thử)

Chứa các tệp kiểm thử cho các component, màn hình và logic của ứng dụng.

## React Native là gì?
