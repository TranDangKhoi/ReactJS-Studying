# Lưu ý khi sử dụng field và props khi tách component riêng

- Phải để field đứng trước props thì mới có thể nhận dạng được value
- VD:

```js
<input type="text" {...field} {...props} />
```

<br>
-> field đứng trước props như trên mới chuẩn
