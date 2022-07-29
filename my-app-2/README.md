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
