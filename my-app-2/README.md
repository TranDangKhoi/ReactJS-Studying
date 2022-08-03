# useEffect là gì?

- Thường được dùng khi làm việc liên quan tới những side effects
- side effects là những cái vấn đề khi mà ta xử lý bên trong function nhưng mà lại ảnh hưởng ở bên ngoài

VD:

- function demo(){
  document.title = "Demo";
  }
  -> đây là 1 ví dụ về side effect. Function trên không return lại giá trị gì cả, nhưng lại thực hiện 1 chức năng nhất định gây ra tác động ở bên ngoài

# Cleanup function là gì

- Nói dễ hiểu thì:
  Khi các bạn đang ở trang chủ (homepage) chẳng hạn mà các bạn muốn chuyển sang một trang khác bất kì như trang Contact, About, ... thì khi ở trang chủ có một tính năng gì đó mà sang trang khác bạn lại không cần nó nữa thì bạn cần phải cleanup nó đi
  -> sử dụng clean up function để làm việc đó như sau

```js
useEffect(
  function callback() {
    // side-effects
    return function cleanup() {
      //cleanup...
    };
  },
  [deps]
);
```

- Dưới đây là ảnh sơ đồ useEffect hook để giúp bạn hiểu hơn về cleanup
  ![useEffect lifecycle](https://user-images.githubusercontent.com/88824627/181787967-13243cae-fa00-4f98-80d2-6d4c542763cf.svg)

# Mount, Update, Unmount trong React

# useRef và useState giống và khác nhau thế nào ?

- Cả hai đều chứa dữ liệu của chúng trong khi render và update UI, nhưng chỉ có useState là gây ra tình trạng re-render
- useRef trả về 1 object có một property bên trong object là current nắm giữ giá trị của useRef
  VD:

```js
const number = useRef(2);
console.log(number.current);
// Ouput: 2
```

- Còn useState thì ngược lại, useState sẽ trả ra một array với 2 giá trị, giá trị thứ nhất nắm giữ giá trị của state, còn cái thứ hai là một thứ có thể nói là một thứ dùng để cập nhật, chỉnh sửa lại giá trị của state

VD:

```js
// useRef
const count = useRef(0);
count = 10;
console.log(count); // Ouput: 10
// useState
const [count, setCount] = useState(0);
setCount(10);
console.log(count); // Ouput: 10
```

- Cái property current của useRef là một giá trị có thể thay đổi được (mutable) nhưng biến state của useState thì không. Ngược lại với property current của useref, bạn không nên trực tiếp gán giá trị cho biến state của useState, Thay vào đó, luôn luôn sử dụng cái updater function (function dùng để cập nhật, chỉnh sửa state) như cách mà React Team viết trong docs
- useState và useRef, cả 2 đều đồng thời được coi là data Hooks, nhưng chỉ useRef mới có thể sử dụng vào các lĩnh vực khác nằm trong application, để truy cập trực tiếp vào component của React hay vào DOM Elements
  <br>
  -> Về cơ bản, thì useRef không gây re-render còn useState thì có và useRef thường sử dụng để truy cập vào DOM hoặc vào components
