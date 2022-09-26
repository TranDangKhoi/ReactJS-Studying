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

- Later

## 9. useEffect là gì?

- Thường được dùng khi làm việc liên quan tới những side effects
- side effects là những cái vấn đề khi mà ta xử lý bên trong function nhưng mà lại ảnh hưởng ở bên ngoài

VD:

- function demo(){
  document.title = "Demo";
  }
  -> đây là 1 ví dụ về side effect. Function trên không return lại giá trị gì cả, nhưng lại thực hiện 1 chức năng nhất định gây ra tác động ở bên ngoài

## 10. Cleanup function là gì

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

## 11. Mount, Update, Unmount trong React

## 12. useRef và useState giống và khác nhau thế nào ?

- Cả hai đều chứa dữ liệu của chúng trong khi render và update UI, nhưng chỉ có useState là gây ra tình trạng re-render
- useRef trả về 1 object có một property bên trong object là current nắm giữ giá trị của useRef
  VD:

```js
const number = useRef(2);
console.log(number.current);
// Ouput: 2
```

- Còn useState thì ngược lại, useState sẽ trả ra một array với 2 giá trị, giá trị thứ nhất nắm giữ giá trị của state, còn cái thứ hai là một thứ có thể nói là một thứ dùng để cập nhật, chỉnh sửa lại giá trị của state

- Cái property current của useRef là một giá trị có thể thay đổi được (mutable) nhưng biến state của useState thì không. Ngược lại với property current của useref, bạn không nên trực tiếp gán giá trị cho biến state của useState, Thay vào đó, luôn luôn sử dụng cái updater function (function dùng để cập nhật, chỉnh sửa state) như cách mà React Team viết trong docs
  <br>VD:

```js
// useRef
const count = useRef(0);
count.current = 10;
console.log(count.current); // Ouput: 10
// useState
const [count, setCount] = useState(0);
setCount(10);
console.log(count); // Ouput: 10
```

- useState và useRef, cả 2 đều đồng thời được coi là data Hooks, nhưng chỉ useRef mới có thể sử dụng vào các lĩnh vực khác nằm trong application, để truy cập trực tiếp vào component của React hay vào DOM Elements
  <br>
  -> Về cơ bản, thì useRef không gây re-render còn useState thì có và useRef thường sử dụng để truy cập vào DOM hoặc vào components. Vậy nên sử dụng useState khi bạn muốn update dữ liệu và muốn update UI, còn nếu bạn chỉ muốn lấy ra data trong quá trình mount tới khi unmount thì useRef là sự lựa chọn dành cho bạn

## 13. React Hook Form

- reset: Reset toàn bộ form hoặc chỉ các trường nhất định
- watch : Theo dõi xem checkbox checked thì thực hiện chức năng gì và ngược lại
- isSubmitting : Khi form đang trả dữ liệu về backend
- isDirty: Khi giá trị default value được thay đổi và quay trở lại thì component sẽ re-render
- dirtyField: Trả về giá trị boolean khi các field bị thay đổi so với default values (true khi thay đổi, false khi giống default values)
- Nếu không set default value thì default value sẽ là ""
- Muốn sử dụng được inValid ta cần thêm mode vào hook useForm

## 14. createPortal

- Lôi một component hoặc 1 đoạn code đang nằm trong một element nào đó ra ngoài cùng và nằm cùng cấp với div root
- Công dụng:
- Dùng để ẩn/hiện modal bởi modal lúc nào cũng cần phải nằm bên ngoài cùng bởi tính chất phải sử dụng nhiều z-index
- Dùng để ẩn/hiện dropdown nếu như lỡ chẳng may thằng cha của nó có overflow-hidden
- Dùng để ẩn/hiện tooltip

## 15. Context

- Context sẽ cung cấp cho ta 1 phương pháp để chia sẻ những giá trị giữa các component với nhau

## 16. Props Drilling là gì

- Prop drilling là điều xảy ra khi bạn cần truyền dữ liệu từ một component cha xuống một component thấp hơn trong cây component, drilling - khoan vào các component khác mà các component đấy có thể không cần giá trị props, trong khi chỉ một vài component là cần thôi

## 17. Lazy Initialize State

## 18. useLocalStorage

- Là 1 hook được viết sẵn trên useHook

## 19. Ý nghĩa của các component trong React-Router-Dom v6

- BrowserRoutes : Dùng để bọc thằng <App/> -> enable chức năng router cho website

- Routes: Dùng để chứa các <Route/>

- Route: Dùng để config path cho các <Link/> và lựa chọn nội dung cho mỗi link, nếu không dùng thẻ này mà chỉ dùng <Link/> trang sẽ bị trắng tinh khôi hoặc trang sẽ bị lỗi 404

- Link: giống như thẻ a, dùng đẻ điều hướng tới các trang khác mà không bị reload

- NavLink: Cũng giống link nhưng thường sử dụng để làm navigation bar hoặc các link cần thuộc tính isActive

- Outlet: Đóng vai trò giống như content của trang khi ta sử dụng Nested Routes và nhét Navigation Bar vào trong Routes

- useParams :
  - Trong useParam có 1 thứ gọi là slug, vậy nó là gì ?
  - Ví dụ giờ ta có một api :<br>
    fetching.com/blog?search=hello-world
  - // slug sẽ là thứ nằm sau blog/
  - VD: localhost:3000/blog/hello-world
  - Thì slug sẽ = hello-world

## 20. Higher Order Components

- Khi ta phát triển một component, và nó sử dụng đi, sử dụng lại một logic nào đó và chúng ta muốn sử dụng cái logic đó từ component này qua component kia mà không cần phải viết lại -> THÌ ta sẽ phải sử dụng HOCS
- Kỹ thuật này cùng với render props thường được sử dụng trước khi hình thành ra khái niệm custom hooks

- VD:
  - Giờ ta có component A sử dụng axios để fetch data về, và khi data chưa được fetch về ta sẽ có một hiệu ứng loading
  - Ở component B và component C, ta cũng sẽ sử dụng axios để fetch data về, nhưng ta lại không muốn viết lại logic của hiệu ứng loading, mà muốn sử dụng lại nó
    -> Ta sẽ phải áp dụng HOCS để làm việc này

## 21. Vấn đề khi sử dụng HOCS

1. Giả dụ giờ ta có 1 props data được truyền vào bên trong Component ở file withLoading

```js
function withLoading(Component) {
  return (props) => {
    useEffect(() => {
      // Fetching data code...
    }, []);
    return (
      <Component
        data={data} // Đây là props data 💛
        {...props}
      ></Component>
    );
  };
}

export default withLoading;
```

- Sau đó bên file App.js ta cũng tạo ra một biến có tên là data

```js
const data = [1, 2, 3];
```

- Truyền vào bên trong components ở bên dưới, VD:

```js
<Homepage data={data}></Homepage>
```

- Thì vô hình chung, khi bạn get ra data ở Homepage thì data sẽ không còn là data mà bạn fetch được từ api ở file withLoading.js nữa, mà sẽ là data được lấy từ data ở App.js

2. Nếu sau này bạn tạo thêm các file sử dụng nhiều HOCS khác nhau mà muốn sử dụng ở nhiều components cũng gây ra rất nhiều trắc trở, khó khăn khi debug.- Ví dụ là ở 3 components A, B, C đi, cả 3 component này đều sử dụng withLoading.js, withErrorBoundaries.js, withSearch.js,...

- Thì ở phần

```js
export default ComponentName;
```

- Bạn sẽ phải bọc tất cả các HOCS kia vào mỗi cái trong 3 components đó, sau này còn rất nhiều lỗi phát sinh, nó báo lỗi mình không biết lỗi trong file nào rất khó debug.

```js
// Component A:
export default withLoading(withErrorBoundaries(withSearch(ComponentA)));
// Component B:
export default withLoading(withErrorBoundaries(ComponentA));
// Component C:
export default withLoading(withErrorBoundaries(withSearch(ComponentC)));
// Giờ mà lỗi thì ối dồi ôi luôn, không biết đang conflict với cái nào
```

## 22. Lifting State

- Là trường hợp khi bạn tạo state ở component cha và truyền xuống component con
- Nhược điểm: Khi làm dự án lớn nếu ta cứ liên tục chọc ngoáy state của thg component cha xuống component con rồi truyền qua hàng đống component khác như vậy thì mình đã nói rồi -> nó sẽ gây ra hiện tượng props drilling

# Props Render - một phương pháp để xử lí Lifting State & Props Drilling

- Props Render là một hình thức chia sẻ code giữ các React components bằng cách dùng một đối tượng props có giá trị là một function
  VD:

```js
// Bên file Header.js tạo 1 component Header
const Header = (props) => props.render();

export default Title;
// Bên file App.js thực hiện render ra nội dung:
<Header render={(yourName) => <h1>Hello {yourName}</h1>}></Header>;
```

- Hoặc ta cũng có thể sử dụng props.children() như sau:

```js
// Bên file Header.js tạo 1 component Header và thực hiện 1 số thao tác như sau:
const Header = (props) => props.children();

// Bên file App.js thực hiện nhét nội dung vào giữa thẻ đóng và thẻ mở của Component Header
<Header>{(yourName) => <h1>Hello {yourName}</h1>}
```

- Vài lưu ý khi sử dụng props rendering:

  - Ví dụ, bạn đang có một ComponentA, bên trong ComponentA lại có 1 component khác nữa (tạm gọi là ComponentB) và bên trong ComponentB lại có ComponentC và mỗi component đó đều sử dụng props render như sau:

  ```js
  const MyComponent = () => {
    return (
      <div>
        <ComponentA>
          {(value) => (
            <div>
              <ComponentB>
                {(value2) => (
                  <div>
                    <ComponentC>
                      {(value3) => (
                        <div>
                          <span>Hahaha</span>
                        </div>
                      )}
                    </ComponentC>
                  </div>
                )}
              </ComponentB>
            </div>
          )}
        </ComponentA>
      </div>
    );
  };
  ```

  - Nhìn vào code ở bên trên thì chúa Giê Su cũng chỉ muốn hiện lên và nói với bạn rằng kys

- Cũng có kha khá các thư viện nổi tiếng hiện nay vẫn sử dụng render props, điển hình như là Formik, Downshift và React Router

# Tổng quan sơ lược lại về HOCS, Render Props và Custom hooks

- Dùng cái nào là theo quyết định của leader, mỗi cái đều có một ưu điểm riêng, nên học cả 3 để hiểu cả 3, đồng thời hiểu được cách dùng để học các thư viện, đọc code người khác, phỏng vấn, ...

# React Composition (Compound Component)

- Dùng để chia nhỏ component thành các components nhỏ hơn để dễ dàng xử lí và maintain, hạn chế việc xây dựng quá nhiều components và giống nhau
- VD ta code như sau:

```js
// file Accordion.js
const Accordion = () => {
  const [show, setShow] = useState(false);
  const handleToggleShow = () => {
    setShow((show) => !show);
  };
  return (
    // Something...
  );
};

// file Editable.js
const Editable = () => {
  const [edit, setEdit] = useState(false);
  const handleToggleEdit = () => {
    setEdit((edit) => !edit);
  };
  return (
    // Something...
  );
};
```

- Thì ở 2 đoạn code trên bạn có thấy đoạn code nằm trên dòng return nó giống y đúc nhau không... Nếu là "CÓ" thì bạn đoán chuẩn rồi, giờ ta sẽ cùng tìm cách làm thế nào để làm code gọn hơn, dễ hiểu hơn

- Ta sẽ sử dụng custom hooks kết hợp với context, trong đó:
  - Custom Hook sẽ viết logic để xử lí việc đóng mở accordion, edit section
  - Context sẽ sử dụng để rút ngắn code, lược bớt props truyền vào component từ đó giúp component trông gọn gàng hơn, sau này ai muốn xem code thì dễ debug và maintain hơn

# Props Collection - học từ Kentc Dodds (aka creator of Remix)

- Props Collection (Props được lưu dưới dạng danh sách)
- Ví dụ bây giờ bạn muốn thực hiện 2 hoặc nhiều chức năng cùng một lúc khi click vào một thẻ nào đó, ví dụ như sau:

```js
// Function bật/tắt
function useToggle() {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn(!on);
  };
  return {
    on,
    handleToggle,
  };
}

// Trong component invoke chức năng khi onClick
<button
  onClick={() => {
    console.log("Hello man"); // function thứ nhất
    handleToggle(); // function thứ hai
  }}
>
  Nhấn vào tôi >.<
</button>;
```

- Thì bạn có thể thấy cách này trông không được hay cho lắm, vì vậy nên ta có thể sử dụng kiến thức về props collection vọc được từ Kentc Dodds:

```js
// Function bật/tắt
function useToggle() {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn(!on);
  };
  // toggleProps
  return {
    on,
    toggleProps: {
      onClick: handleToggle, // thực hiện chức năng handleToggle nằm ở bên trên
    },
  };
}
// Trong component thực hiện các chức năng nằm trong toggleProps:
<button {...toggleProps}>
  Nhấn vào tôi >.<
</button>;

```

- Nhưng như vậy là chưa đủ để có thể invoke 2 function cùng 1 lúc, ta sẽ cùng tiếp tục tìm hiểu tới phần tiếp theo

# Props Getter

- Như bạn thấy ở nội dung trên thì đó là cách truyền 1 object là toggleProps, chứa 1 function vào trong 1 element/component

- Giờ ta sẽ tìm hiểu xem làm cách nào để sử dụng props getter

- Props getter được sử dụng nhằm mục đích chính là để code trông sạch hơn, chứ không truyền props loạn xạ vào trong component, ngoài ra còn hỗ trợ bạn khi bạn muốn inject thêm code vào 1 sự kiện nào đó (onClick, onChange, ...etc)

- Nói vậy có thể bạn chưa hiểu thì bây giờ mình sẽ ví dụ một trường hợp như sau:
  - Buổi sáng thứ 7, bạn thức dậy và điều đầu tiên bạn làm là BẬT công tắc đèn lên để DẬY ĐÁNH RĂNG
  - Nhưng sang buổi sáng chủ nhật, bạn được nghỉ ngơi nên bạn chỉ bật công tắc đèn và nằm đó tiếp không thực hiện bất kì thứ gì khác
- Giờ ta áp dụng vào code:

```js
function useToggle() {
  const [on, setOn] = useState(false);
  const batDen = () => {
    setOn(true);
  };
  function getToggleProps({ onClick, ...props } = {}) {
    return {
      onClick: () => {
        onClick && onClick(); // Nếu mà trong getToggleProps mà có 1 props là onClick thì thực hiện function onClick nằm trong props đó
        batDen(); // Thực hiện chức năng bật đèn lên
      },
      ...props,
    };
  }
  return {
    on,
    getToggleProps,
  };
}
// Sáng thứ 7
const SangThu7 = () => {
  return (
    <>
      <button
        {...getToggleProps({
          onClick: () => {
            dayDanhRang(); // lúc này ta sẽ inject đoạn code dayDanhRang vào đây, bởi vì sáng thứ 7 ta bật đèn xong đánh răng mà
          },
        })}
      >
        {on ? "Đèn đang bật" : "Đèn đang tắt"}
      </button>
      ;
    </>
  );
};
// Sáng chủ nhật
const SangChuNhat = () => {
  return (
    <>
      <button
        {...getToggleProps()} // lúc này ta không truyền gì vào cả, bởi vì sáng chủ nhật ta chỉ dậy bật đèn và nằm đó thôi mà, chứ không làm gì thêm
      >
        {on ? "Đèn đang bật" : "Đèn đang tắt"}
      </button>
      ;
    </>
  );
};
```

- Đây là 1 ví dụ đơn giản về props getter và props collection hoy, còn rất nhiều thứ khác và nói thật thì cái này rất khó viết và khó học
- Sau này các dự án ở công ty thường sẽ không sử dụng các cách mình đã và đang chuẩn bị viết thêm sau đây, họ thường sẽ viết custom hooks và context nhiều hơn, và đa số là đều đã và đang sử dụng Redux, Zustard rồi, các code này chỉ để tham khảo, học thêm để biết thêm kiến thức áp dụng vào project cá nhân hoặc để hiểu khi đọc code của người khác (phòng trường hợp người ta sử dụng cách này) thôi ^^ thui nói tới đây thui cya
