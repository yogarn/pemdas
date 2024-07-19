---
tags:
  - courses
  - computer-science
Creation: 2023-12-13
chapter: 3
---

Dikatakan proses sederhana (*simple*) karena dipandang sebagai **proses yang hanya mempunyai sebuah aliran masukan dan sebuah aliran keluaran**. Proses sederhana dalam pemrograman komputer terdiri atas : 
- Pemanggilan metode atau procedure atau function
- Perhitungan aritmetika atau logika
## Ekspresi
Ekspresi merupakan proses sederhana dalam pemrograman komputer untuk melakukan proses **perhitungan aritmetika dan logika**. Prinsip dasar perhitungan aritmetika dan logika dalam pemrograman komputer adalah melakukan perhitungan aritmetika atau logika, kemudian hasilnya disimpan dalam variabel tertentu. 

Komponen utama ekspresi adalah **operand dan operator**. Operand dapat berupa variabel, konstanta, nilai data konstan, maupun fungsi. Setiap operand harus memiliki nilai data. Operator adalah simbol yang mengolah nilai pada operand dan menghasilkan satu nilai baru. Dalam pemrograman komputer, penulisan perhitungan aritmetika/logika tidak boleh bertingkat. Oleh karena itu, setiap operator memiliki precedence dan associativity.
### Precedence dan Associativity
Precedence menentukan urutan pengerjaan operator berdasarkan prioritas. Operator yang memiliki tingkat **precedence lebih tinggi** akan **dikerjakan lebih dahulu**. Associativity menentukan urutan pengerjaan operator berdasarkan lokasinya dalam sebuah ekspresi (dari kiri/kanan). Associativity berlaku untuk operator-operator yang memiliki precedence yang sama.
### Prioritas dan Urutan Pengerjaan
| Kategori                               | Simbol                  | Nama                          | Prioritas | Urutan Pengerjaan |
| -------------------------------------- | ----------------------- | ----------------------------- | --------- | ----------------- |
| Indeks larik, kurung, dan akses elemen | `[ ]`                   | Elemen array                  | 1         | Kiri-Kanan        |
|                                        | `( )`                   | Mengubah prioritas            |           |                   |
|                                        | `.`                     | Akses anggota/elemen          |           |                   |
| Operator Unary                         | `++`                    | Pre-increment                 | 2         | Kanan-Kiri        |
|                                        | `--`                    | Pre-decrement                 |           |                   |
|                                        | `!`                     | Logika NOT                    |           |                   |
|                                        | `~`                     | Komplemen Bitwise             |           |                   |
|                                        | `-`                     | Unary minus                   |           |                   |
|                                        | `+`                     | Unary plus                    |           |                   |
|                                        | `(type)`                | Type casting                  |           |                   |
|                                        | `new`                   | Mengalokasi objek             |           |                   |
| Operator aritmetika perkalian          | `*`                     | Perkalian                     | 3         | Kiri-Kanan        |
|                                        | `/`                     | Pembagian                     |           |                   |
|                                        | `%`                     | Sisa Pembagian                |           |                   |
| Operator penambahan                    | `+`                     | Penambahan                    | 4         | Kiri-Kanan        |
|                                        | `-`                     | Pengurangan                   |           |                   |
|                                        | `+`                     | String Concatenation          |           |                   |
| Pergeseran bit                         | `<<`                    | Geser bit ke kiri             | 5         | Kiri-Kanan        |
|                                        | `>>`                    | Geser bit ke kanan            |           |                   |
| Operator Relational                    | `<=`                    | Lebih kecil sama dengan       | 6         | Kiri-Kanan        |
|                                        | `>`                     | Lebih besar                   |           |                   |
|                                        | `>=`                    | Lebih besar sama dengan       |           |                   |
|                                        | `instanceof`            | Tes referensi                 |           |                   |
|                                        | `==`                    | Sama dengan                   | 7         | Kiri-Kanan        |
|                                        | `!=`                    | Tidak sama dengan             |           |                   |
| Operator Bitwise dan Boolean (Logika)  | `&`                     | Bitwise AND                   | 8         | Kiri-Kanan        |
|                                        | `&`                     | Boolean AND                   |           |                   |
|                                        | `^`                     | Bitwise XOR                   | 9         | Kiri-Kanan        |
|                                        | `^`                     | Boolean XOR                   |           |                   |
|                                        | `｜`                     | Bitwise OR                    | 10        | Kiri-Kanan        |
|                                        | `｜`                     | Boolean OR                    |           |                   |
| Operator Logika                        | `&&`                    | Logika AND                    | 11        | Kiri-Kanan        |
|                                        | `｜｜`                    | Logika OR                     | 12        | Kiri-Kanan        |
| Operator Ternary                       | `?:`                    | Operator kondisi              | 13        | Kanan-Kiri        |
| Operator Penugasan Majemuk             | `=, +=, -=, *=, /=, %=` | Operator penugasan aritmetika | 14        | Kanan-Kiri        |
|                                        | `&=, ^=, ｜=, <<=, >>=`  | Operator penugasan bitwise    |           |                   |
### Operator dengan Prioritas dan Urutan Pengerjaan
$$
x\leftarrow \frac{xy+yz}{xy-yz}
$$
Persamaan matematika di atas, apabila ditulis dalam bahasa pemrograman Java akan menjadi seperti berikut.
```java
x = (x*y+y*z)/(x*y-y*z);
```
Dalam kode tersebut, semua operasi perkalian dalam tanda kurung akan diselesaikan terlebih dahulu, lalu kemudian akan dijumlahkan dengan hasil perkalian lain. Kemudian, bagian atas (pembilang) akan dibagi dengan bagian bawah (penyebut). Terakhir, hasil semua operasi tersebut akan dimasukkan ke dalam variabel x.
## Operator
Didasarkan atas jumlah operan (operand), operator dapat dibedakan menjadi tiga jenis, yaitu : 
- **Unary Operator**
	Memerlukan 1 Operand
- **Binary Operator**
	Memerlukan 2 Operand
- **Ternary Operator**
	Memerlukan 3 Operand
### Penugasan (Assignment)
Termasuk binary operator. Digunakan untuk memberikan nilai kepada suatu operand dengan sintak sebagai berikut.
```
operand1 operator operand2
```
`operand1` harus berupa variabel, sedangkan `operand2` dapat sembarang operand, termasuk variabel dari `operand1`. Urutan pengerjaan (associativity) operator penugasan dari kanan ke kiri. Berikut ini adalah contoh dari operator penugasan.
```java
x = 2; // konstanta
x = y; // variabel lain
x = 2 * y; // ekspresi
a = sin(y); // fungsi
```
Tipe hasil operasi disesuaikan dengan tipe operand sebelah kiri.
```java
int x = 7/2; // nilai x sama dengan 3
float y = 3; // nilai y sama dengan 3.000
```
### Logika
Digunakan untuk melakukan operasi logika

| Simbol | Fungsi |
| ------ | ------ |
| `&&`   | AND    |
| `｜｜`   | OR     |
| `!`    | NOT       |
Tabel Kebenaran Operator Logika : 

| A     | B     | !A    | A && B | A \|\| B |
| ----- | ----- | ----- | ------ | -------- |
| True  | True  | False | True   | True     |
| True  | False | False | False  | True     |
| False | True  | True  | False  | True         |
| False | False | True  | False  |  False        |
Operand pada operator logika harus mempunyai nilai boolean, yaitu true atau false.
```java
int x = 5, int y = 0, a;
boolean b;
a = x && y; // error
b = (x > y) && (y >= 0) // ok
```
### Aritmetika
| Simbol | Fungsi              | Contoh       |
| ------ | ------------------- | ------------ |
| `+`    | Penambahan          | `x = y + 6`  |
| `-`    | Pengurangan         | `y = x - 5`  |
| `*`    | Perkalian           | `y = y * 3`  |
| `/`    | Pembagian           | `z = x / y`  |
| `%`    | Modulo              | `A = 10 % 3` |
| `++`   | Increment           | `x++`        |
| `--`   | Decrement           | `z--`        |
| `()`   | Menaikkan Prioritas | `x = (2 + 3) * 5`             |
#### Modulo
Memiliki simbol `%` dan termasuk binary operator. Digunakan untuk **menghitung sisa hasil bagi**. Misalnya dalam kasus pengujian apakah integer `n` bernilai genap atau ganjil, dapat digunakan kode berikut.
```java
n % 2 = 0; // genap
n % 2 = 1; // ganjil
```
#### Increment dan Decrement
Memiliki simbol `++` untuk increment dan `--` untuk decrement. Termasuk **unary operator**. Increment berfungsi untuk menaikkan nilai [[Struktur, Tipe Data, Konstanta, dan Variable Java#Variabel|variabel]] dengan 1, sedangkan Decrement berfungsi untuk menurunkan nilai variabel dengan 1. Posisinya bisa di depan (pre) atau di belakang (post) variabel.
```java
n++; // post increment
++n; // pre increment
n--; // post decrement
--n; // pre decrement
```
Jika statement increment stand alone, maka `n++;` atau `++n;` sama, artinya dengan `n = n + 1;` dan jika statement decrement stand alone, maka `n--;` atau `--n` sama artinya dengan `n = n - 1;`

Jika `++n` dan `n++` sebagai statement yang terikat dalam ekspresi lainnya (sub ekspresi), keduanya mempunyai arti yang berbeda.
- `++n`$\rightarrow$ **n ditambah 1, baru diproses terhadap ekspresinya**
- `n++`$\rightarrow$ **n langsung diproses terhadap ekspresinya tanpa ditambah 1 terlebih dahulu, pada saat selesai baru n ditambah 1**

Contoh perbedaan dari pre-increment dan post-increment dapat dilihat pada kode di bawah ini.
```java
int a;
int i = 1;
a = i++;
System.out.println("a = " + a);
System.out.println("i = " + i);
/*
a = 1
i = 2
*/
```
```java
int a;
int i = 1;
a = ++i;
System.out.println("a = " + a);
System.out.println("i = " + i);
/*
a = 2
i = 2
*/
```
Setiap ekspresi yang berbentuk `<variabel> = <variabel><operator><exp>` dapat diganti dengan `<variabel><operator> = <exp>`. Operator ini sering disebut dengan **Combined Operator**.

| Ekspresi     | Dapat Diganti Dengan |
| ------------ | -------------------- |
| `a = a + b`; | `a += b;`            |
| `a = a - b;` | `a -= b;`            |
| `a = a * b;` | `a *= b;`            |
| `a = a / b;` | `a /= b;`            |
| `a = a % b;` | `a %= b;`            |
| `a = a ^ b;` | `a ^= b;`                     |
Contohnya adalah sebagai berikut.
```java
x *= y + 1;
x = x * (y + 1)
// keduanya sama
```
### Relasional
Digunakan untuk **membandingkan dua nilai**, dan hasilnya **true atau false**.

| Simbol | Fungsi                       |
| ------ | ---------------------------- |
| `==`   | Sama Dengan                  |
| `!=`   | Tidak Sama Dengan            |
| `<`    | Lebih Kecil Dari             |
| `>`    | Lebih Besar Dari             |
| `<=`   | Lebih Kecil atau Sama Dengan |
| `>=`   | Lebih Besar atau Sama Dengan |
| `?:`   | Conditional Assignment                             |
#### Conditional Expressions
Conditional Expressions menggunakan **ternary operator** (`?:`)
`sintaksis =  exp1 ? exp2 : exp3;`
Jika `exp1` bernilai true, maka `exp2` akan dieksekusi. Sebaliknya, jika `exp1` bernilai false, maka `exp3` dieksekusi.
```java
z = (a > b) ? a : b
/*
Jika (a > b) bernilai benar, maka z = a
Sebaliknya, jika (a > b) bernilai salah, maka z = b
*/
```
### Bitwise

| Simbol | Fungsi       | Contoh   |
| ------ | ------------ | -------- |
| `&`    | AND          | `A & B`  |
| `｜`   | OR           | `A ｜ B` |
| `^`    | XOR          | `A ^ B`  |
| `~`    | Complement 1 | `~A`     |
| `>>`   | Shift Right  | `A >> 3` |
| `<<`   | Shift Left   | `B << 2`         |
Operasi Bitwise dilakukan bit per bit.
```java
int a = 24; int b = 35; int c;
c = a & b; // nilai c = 0
c = a | b; // nilai c = 59

/*
a = 24 (desimal) = 011000 (biner)
b = 35 (desimal) = 100011 (biner)
(a & b) per bit menghasilkan : 000000 (biner) atau 0 (desimal)
(a | b) per bit menghasilkan : 111011 (biner) atau 59 (desimal)
*/

```
#### XOR
Dua buah bit di-XOR-kan akan menghasilkan 1 jika kedua bit tersebut berbeda, dan akan menghasilkan 0 jika kedua bit tersebut sama.
```java
int A, B = 45;
A = B ^ 75; // nilai A = 102

/*
Desimal 45 binernya 0101101
Desimal 75 binernya 1001011
Kemudian bit per bit di-XOR-kan maka hasilnya 1100110 atau 102 desimal
*/
```
#### Komplemen
Dengan operator komplemen (~), maka setiap bit bernilai 0 akan diubah menjadi 1 dan sebaliknya.
```java
int A, B = 0xC3;
A = ~B; // nilai A = 0xFFFFFF3C

/*
0xC3 binernya 11000011
Di-komplemenkan hasilnya 0011 1100 atau dalam notasi hexadecimal menjadi 3C
*/
```
#### Shift
Operator shift-right (>>n) dapat dipergunakan untuk menggeser n bit ke kanan dan diberi nilai 0 (nol) sejumlah n bit dari paling kiri yang ditinggalkan. Sementara itu, operator shift-left (<<n) dapat dipergunakan untuk menggeser n bit ke kiri dan diberi nilai 0 (nol) sejumlah n bit paling kanan yang ditinggalkan.
```java
int A, B = 78;
A = B >> 3; // nilai A = 9
A = B << 2; // nilai A = 312

/*
78 binernya 00100 1110
Geser kekanan 3 bit : 000001001 = 9
Geser kekiri 2 bit : 100111000 = 312
*/
```
## Kelas Math
Terdapat pada paket java.lang yang diperlukan untuk berbagai operasi matematika seperti sinus, cosinus, akar kuadrat, dan sebagainya. Kelas Math mempunyai 2 konstanta, yaitu PI dan E. Konstanta tersebut didefinisikan sebagai berikut.
```java
public static final double E = 2.71828182845904523354;
public static final double PI = 3.14159265358979323846;
```
Kelas Math mempunyai sejumlah metode sebagaimana dapat dilihat pada tabel berikut.

| Metode               | Keterangan                                                                                          |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| abs()                | Menghasilkan nilai absolut                                                                          |
| acos()               | Menghasilkan nilai arc cosine                                                                       |
| asin()               | Menghasilkan nilai arc sine                                                                         |
| atan()               | Menghasilkan nilai arc tangent                                                                      |
| atan2()              | Menghasilkan nilai komponen theta pada koordinat polar                                              |
| cbrt()               | Menghasilkan nilai akar pangkat tiga                                                                |
| ceil()               | Menghasilkan nilai terkecil yang lebih besar atau sama dengan a                                     |
| copySign()           | Menghasilkan nilai bertipe data sama dengan magnitude dengan tanda sesuai dengan tanda pada sign    |
| cos()                | Menghasilkan nilai cosine                                                                           |
| cosh()               | Menghasilkan nilai hyperbolic cosine                                                                |
| exp()                | Menghasilkan nilai $e^a$                                                                            |
| expm1()              | Menghasilkan nilai $e^a-1$                                                                          |
| floor()              | Menghasilkan nilai terbesar yang lebih kecil atau sama dengan a                                     |
| getExponent()        | Menghasilkan nilai unbiased exponent yang digunakan dalam representasi dari a                       |
| hypot()              | Menghasilkan nilai sqrt(x2 + y2) tanpa intermediate overflow atau underflow                         |
| IEEEremainder()      | Menghasilkan nilai hasil pembagian f1 dan f2 dengan standart IEEE754                                |
| log()                | Menghasilkan nilai logaritma $a(^{e}log\:a)$                                                        |
| log10()              | Menghasilkan nilai logaritma (10) dari $a(^{10}log\: a)$                                            |
| log1p()              | Menghasilkan nilai logaritma natural dari jumlah argumen dan 1                                      |
| max()                | Menghasilkan nilai maksimum dari a dan b                                                            |
| min()                | Menghasilkan nilai minimum dari a dan b                                                             |
| nextAfter()          | Menghasilkan nilai decimal pecahan berdekatan dengan argumen pertama ke arah argumen kedua          |
| nextUp()             | Menghasilkan nilai decimal berdekatan dengan d ke arah positif tak hingga bertipe double            |
| pow()                | menghasilkan nilai $a^b$                                                                            |
| random()             | Menghasilkan nilai acak antara 0.0 dan 1.0                                                          |
| rint()               | Menghasilkan nilai bilangan bulat terdekat dari a                                                   |
| round()              | Menghasilkan nilai bilangan bulat terdekat dari a bertipe int                                       |
| signum()             | Nol jika argumen adalah nol, 1,0 jika argumen lebih besar dari nol, -1.0 jika argumen kurang dari 0 |
| sin()                | (Menghasilkan nilai sine)                                                                           |
| sinh()               | Menghasilkan nilai hyperbolic sine                                                                  |
| sqrt()               | Menghasilkan nilai akar kuadrat dari a                                                              |
| tan(0)               | Menghasilkan nilai tangent                                                                          |
| tanh()               | Menghasilkan nilai hyperbolic tangent                                                               |
| toDegrees(x, angrad) | Menghasilkan nilai sudut dalam derajat sebagai hasil konversi dari argumen dalam radian             |
| toDegrees(x, angdeg) | Menghasilkan nilai sudut dalam derajat sebagai hasil konversi dari argumen dalam derajat                                                                                                    | 
