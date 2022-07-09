## Những kiến thức cơ bản cho người mới bắt đầu học React (Chương 1)

## **1. Props là gì? ( cơ bản )** <br>

- Props là một object, và là từ viết tắt của Properties.
  _ Bạn có thể hình dung Props khá giống với các Attribute của các thẻ HTML vậy ! <br>
  _ Ví dụ về đoạn mã HTML như sau: <br>
  **img src="img_girl.jpg" width="500" height="600"**
  -> Hầu hết các attribute như width, src, height cũng có thể được coi là Props của các thẻ img,<br>
  Props được xem là một trong những cách giúp truyền dữ liệu từ các component cha xuống với các component con.<br>

## 2. JSX là gì?

- JSX là một cú pháp mở rộng cho JavaScript.
  -> JSX = Javascript + XML. Nó biến cú pháp dạng gần như XML về thành Javascript. Giúp người lập trình có thể code ReactJS bằng cú pháp của XML thay vì sử dụng Javascript. Các XML elements, attributes và children được chuyển đổi thành các đối số truyền vào React.createElement. Khi sử dụng hook phải sử dụng ở trong functional component

## 3. Children Props là gì?

## 4. State là gì?

- State là thông tin được lưu bên trong component đó và componenent đó có thể tùy chỉnh cái state đó (những thông tin đó)
  VD: Làm trang signup
  -> Trong signup sẽ có username, password, email, ... đây là những thông tin thuộc component của trang Signup

* Để dùng state thì sẽ sử dụng một cái hook gọi là useState

## 5. React Hook là gì?

- React Hook là tính năng mới ở trong React, cho phép ta sử dụng state và các tính năng khác của react mà không cần phải sử dụng class

## 6. useState là gì?

- useState cho phép chúng ta khai báo local state trong Function Component cách mà trước để chỉ dùng cho Class Component
  - const [state, setState] = useState(initialStateValue)
  - Như trên, chúng ta có thể hiểu
  - state: định nghĩa tên của state nó có thể là đơn giá trị hoặc object,.. (là tham số của useState)
  - setState: định nghĩa tên function dùng cho việc update state (là thamg số của useState)
  - initialStateValue: là giá trị ban đầu của state.
- VD:

* Giờ ta sẽ ví dụ một bài tập về toggle checkbox của máy iphone, và yêu cầu của bài tập là khi ta click vào checkbox đó thì khối màu trắng sẽ di chuyển qua phải và thay đổi background. Vậy ta sẽ làm thế nào?
* Đầu tiên code css cho khối màu trắng và background xám của nó ở trạng thái tắt và bật (khi bật sẽ addClass active vào)
* Sau khi code xong CSS rồi ta sẽ bắt đầu sử dụng useState cùng với destructuring array
* Như sau:
  - const[on,setOn] = useState(false);
  - state : on (giá trị)
  - setState : setOn (tên của state, dùng để update state)
  - initialStateValue : false (giá trị ban đầu của state ý ở đây là khi mở trang web lên thì checkbox sẽ đang ở dạng tắt)

## 7. Những nguyên tắc khi sử dụng hook

- Phải sử dụng ở phía trên cùng
- Không được viết ở bên trong vòng lặp
- Không được viết ở bên trong câu điều kiện
- Không được viết ở bên trong function

## 8. Stale state là gì?
