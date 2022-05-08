# qa-app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Ödevler
- Admin olan user bilgisine göre Kategorileri göstermek ve Kategorileri düzenlemek
- Kategori listesinde 1 tane kategori seçiliyse, Soru Sor butonuna basıldığında o kategorinin otomatik olarak Soru Ekleme sayfasında set edilmesi
- Menünün açık kapalı olarak durumunun değişmesini sağlamak (Şu an için sadece kullanıcı adına basıldığında bu değişim gerçekleşmektedir)
- Comment'lerin Like ve Dislike butonlarının çalışması
- Yeni Soru ekledikten sonra Kategori listesindeki aktif olan kategorinin gösterilmesi
- Kategori Seçimi ve Search için kullanılan QueryParams bilgilerinin Global Store üzerinden yapılması
  - Örnek Senaryo : Kategori seçimi yapıldığında eğer bir arama gerçekleştirilirse, bu aramaya seçilen kategori bilgilerinin de dahil edilmesi gerekiyor.
