# Nesine.com Test

### React Case Study:

---

- Mail içerisinde gönderilen "bulten_data.json" datası kullanılarak 3000 farklı event alt alta listelenecek.
- [Videoda](https://streamable.com/oldp4d) örneklendiği gibi oranların üzerine tıklandığında sepete eklenecek ve aynı
  orana tekrar tıklandığında sepetten çıkarılacak.
- Oran sepete eklendiğinde, eklenen orana sepette yanıp sönme efekti verilecek. (Seçilen oranın sepette background rengi
  değişebilir)
- Uygulama responsive olmalı ve 375px çözünürlüğüne kadar destek vermelidir. (Mobil görünümde sepet sayfanın herhangi
  bir yerinde sticky açılır-kapanır olabilir)
- Uygulama eski bir mobil cihazdan test edileceğinden, 3000 elemanlı datanın ekranda render olma maliyetlerinin
  düşünülmesi ve gerekli optimizasyonların yapılması gerekiyor.

### Gerekenler:

---

- React Hooks kullanılması
- EcmaScript6 + Eslint (Airbnb)
- Sass
- Webpack
- Context API / Redux
- Projenin github üzerinden gönderilmesi

### + Olarak Değerlendirilecekler:

---

- Render maliyetini düşürecek performans çözümleri
- CRA (Create React App) kullanılmaması
- Tercihen Context API kullanılması
- Unit test (Jest)
- Server-side rendering (SSR)

---

## Başlarken:

Merhaba Nesine.com ekibi 🖐,

Kullandığınız paket yöneticisi uygulamasına göre aşağıdaki komutlardan uygun olanı kullanınız:

`yarn install` veya `npm install`

Paketlerin yüklenmesi tamamlandıktan sonra aşağıdaki komutu kullanarak commit öncesinde typecheck ve lint işlemlerinin
otomatik çalışmasını sağlayabilirsiniz:

`yarn husky install` veya `npm husky install`

Proje WebStorm IDE'si içerisinde geliştirilmiştir.

This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
