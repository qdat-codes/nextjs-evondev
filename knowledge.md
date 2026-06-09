# Common

- Metadata là những thông tin của trang web, thường là để tối ưu cho việc SEO
- title: tiêu đề của trang web
- description: Mô tả của trang web

# Next/font

- Google fonts
  Import: `import { Manrope } from "next/font/google";`
  Khai báo:`const manrope = Manrope({ subsets: ["latin"] })`
- Font weight
  weight: font weight của chữ, chuỗi hoặc là mảng
- Subset
  subset: kiểu chữ, thông thường là latin
- Variables
  variable: tên biến để sử dụng trong global css
- Mulitple fonts: font custom sẽ được viết vào bên trong fonts.ts, thư mục fonts được kháo báo bên trong public
  export const myLocalFont = localFont({
  src: [
  {
  path: "../public/fonts/MyFont-Regular.woff2",
  weight: "400",
  style: "normal",
  },
  {
  path: "../public/fonts/MyFont-Bold.woff2",
  weight: "700",
  style: "normal",
  },
  ],
  variable: "--font-my-local", // CSS variable name
  });
- Local fonts
- Taiwind fonts

## Typescript

- ComponentProps<"svg">: lấy ra tất cả các props của thẻ svg

## Next/ Link

- Link
- href: đường dẫn, có thể truyền vào là 1 chuỗi hoặc object
```js
<Link
  href={{
    pathname: url,
    query: { slug: "bai-1" },
  }}
/>
```
- replace: thay thế đường dẫn và không lưu lại trong lịch sử
- scroll: mặc định là `true` nghĩa là khi nhấn vào link thì sẽ scroll lên cùng, nếu không muốn scroll thì thiết lập scroll = `false`
- prefetch: 
