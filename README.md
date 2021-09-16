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

Projeyi kullanabilmek için lütfen öncelikle projeyi klonlayınız. (Bunun için [git](https://git-scm.com/) kullanmanız gerekmektedir):

`git clone https://github.com/centrual/nesine_com_test.git`

Projeyi klonladıktan sonra proje klasörüne giriniz ve kullandığınız paket yöneticisi uygulamasına göre aşağıdaki komutlardan uygun olanı kullanınız:

> npm paket yöneticisi Node.js ile birlikte otomatik olarak kurulmaktadır.

> yarn paket yöneticisi için [bu adresteki yönergeleri takip ediniz](https://yarnpkg.com/)

`yarn install` veya `npm install`

Paketlerin yüklenmesi tamamlandıktan sonra aşağıdaki komutu kullanarak commit öncesinde typecheck ve lint işlemlerinin
otomatik çalışmasını ayarlayabilirsiniz:

`yarn husky install` veya `npm husky install`

ve proje kullanılmaya hazır! Tebrikler 🎉🎊

---

### Kullanılabilecek Komutlar

**Projeyi geliştirme modunda çalıştırmak için:**

```bash
npm run dev
# veya
yarn dev
```

**Projeyi derlemek için:**

```bash
npm run build
# veya
yarn build
```

**Projeyi production modunda başlatmak için:**

```bash
npm run start
# veya
yarn start
```

**Projedeki syntax hatalarını check etmek için:**

```bash
npm run lint
# veya
yarn lint
```

---

### Ek Bilgiler

- [Next.js](https://nextjs.org/) ile oluşturulmuştur.
- WebStorm IDE'si içerisinde geliştirilmiştir.
