---
tags:
  - courses
  - computer-science
Creation: 2023-12-13
chapter: 1
---

# Struktur, Tipe Data, Konstanta, dan Variable Java

> Gimana sih, caranya membuat program java?

Dalam bahasa pemrograman Java, terdapat struktur dan berbagai tipe data. Dalam artikel ini, kalian akan belajar mengenai struktur, jenis-jenis tipe data, penggunaan konstanta, dan variabel di Java.

## Struktur Program Java

```java
// main class
public class Main {
  // main method
	public static void main(String[] args) {
		System.out.println("Hello World"); // statement
    System.out.println("Halo Dunia"); // statement lain
	}
}
```

Kode di atas adalah contoh struktur utama kode Java yang pasti akan kalian temui di banyak kode-kode Java lain. Struktur tersebut terdiri atas *main class*, *main method*, dan juga *statement*.  

`public class` kita pakai ketika kita ingin mendeklarasikan (atau membuat) sebuah class. Setelah itu, kita bisa menambahkan nama (*identifier*) dari class yang ingin kita buat. Dalam kode di atas, `Main` adalah nama class yang kita buat. Nama class tidak harus `Main`, bisa apa saja, tetapi harus mengikuti peraturan mengenai *identifier* (akan di bahas lebih lanjut di bawah). **Nama class** juga **harus sama dengan nama file** yang dibuat, i.e., file dengan nama `HelloWorld.java` juga harus punya main class dengan nama `HelloWorld`. Setelah membuat main class, kita bisa membuat simbol kurung kurawal (*curly braces*, i.e., `{` dan `}`) sebagai penanda bahwa semua yang ada di antara tanda kurung tersebut merupakan bagian dari main class.

`public static void` kita pakai untuk mendefinisikan sebuah method. Kemudian, kita bisa menambahkan nama (*identifier*) untuk dipakai sebagai nama method yang kita buat. Oleh karena itu, `public static void main(String[] args)` kita sebut sebagai main method, karena identifiernya adalah `main`. Tanda kurung yang ada setelah identifier atau nama method kita sebut sebagai **parameter** (akan dipelajari lebih lanjut di bab selanjutnya). Setelah membuat main method, jangan lupa tambahkan kurung kurawal juga seperti ketika membuat class.  

**Semua kode yang berada di dalam** tanda kurung **main method akan dieksekusi** oleh Java. Hal tersebut karena main method berperan sebagai entry point atau sesuatu yang akan pertama kali dijalankan oleh Java. Kode yang ada di dalam main method, umumnya bisa berupa statement, misalnya dalam kode di atas adalah `System.out.println("Hello World");`. 

::: danger Jangan lupa menambahkan tanda titik koma (semi colon, i.e., `;`) pada akhir statement.
:::

### Karakter Spesial

Di Java, terdapat **karakter-karakter spesial** yang cukup sering digunakan dalam program. Misalnya saja kurung kurawal atau *curly braces* yang sebelumnya kita pakai untuk mendefinisikan sebuah class dan method, lalu tanda kurung yang kita pakai sebagai parameter dalam *main method*, dan sebagainya. Untuk lebih lengkapnya bisa lihat pada tabel berikut ini.

| Character | Nama                 | Deskripsi                                      |
| --------- | -------------------- | ---------------------------------------------- |
| `{}`      | Tanda Kurung Kurawal | Digunakan sebagai penanda blok untuk statement |
| `()`      | Tanda Kurung         | Digunakan dalam methods sebagai parameter      |
| `[]`      | Tanda Kurung Siku    | Digunakan untuk array                          |
| `//`      | Double Slash         | Digunakan untuk komentar                       |
| `""`      | Tanda Petik Ganda    | Menandai sebuah string                         |
| `;`       | Titik Koma           | Digunakan untuk mengakhiri sebuah statement    |

### Komentar

Komentar **tidak akan dieksekusi** dalam program dan **tidak menambah ukuran** dari *bytecodes*. Ada tiga macam komentar di Java, yaitu sebagai berikut.

```java
/* semua karakter yang berada di antara tanda ini akan diabaikan */
// semua karakter akan diabaikan hingga akhir baris
/** semua karakter yang berada di dalam tanda ini akan diabaikan dan membuat dokumentasi otomatis dengan tool javadoc */
```

**Tujuan utama komentar adalah untuk dibaca sesama manusia**, bisa untuk tujuan dokumentasi atau sekedar memberi tahu flow dari program yang kita buat.

::: details Kok bisa sih, komentar tidak menambah ukuran dari bytecodes? Padahal kan ketika kita membuat komentar, kita menambahkan karakter baru ke file java kita? 

Nah yang dimaksud bytecodes ini itu ukuran setelah program kita di compile. Codingan Java yang kita ketik itu akan di compile terlebih dahulu oleh Java Compiler. Java compiler ini akan *ignore* atau *skip* komentar-komentar yang kita buat, sehingga tidak memengaruhi ukuran program setelah di compile. 
:::

### Karakter

Program Java (baik *syntax*, *identifier*, ataupun *literal*) ditulis menggunakan subset karakter *Unicode* [^1], yaitu sebagai berikut.

- Huruf besar A-Z
- Huruf kecil a-z
- Digit 0-9
- Karakter khusus seperti `!`, `&`, `+`, `\`, `_`, dan lain sebagainya
- Kode kontrol (Seperti `formfeed` dan `newline`)
  Unicode tidak hanya huruf latin, melainkan juga digunakan huruf-huruf bangsa lain, seperti Jepang, Korea, Jerman, dan bahkan Bengali. Memori yang digunakan adalah 2 byte (16 bit)

::: details Bisa ga sih, coding Java pakai Aksara Jawa?
Kode program **Java** itu **hanya bisa ditulis pakai karakter-karakter yang ada di atas**, tidak bisa pakai Aksara Jawa, Aksara Mandarin, Aksara Cyrillic, atau yang lain.
:::

## Keyword dan Identifier
Setiap bahasa pemrograman umumnya memiliki *keywords* (atau *reserved identifier*) yang tidak bisa kita gunakan sebagai identifier. Jadi, kita tidak bisa menggunakan keywords sebagai nama class, nama method, atau bahkan nama variabel dalam program kita. Supaya lebih paham apa maksudnya, coba perhatikan materi berikut ini.

### Keyword
> Merupakan **identifier khusus** dan **tidak diperbolehkan** digunakan **untuk identifier lain**. 

Contohnya itu bisa kita lihat pada tipe data dan berbagai *syntax* umum (e.g., `public`, `static`, `class`, etc) Java. Berikut adalah daftar lengkap mengenai keywords yang ada di Java [^2].

### Identifier
> Merupakan **nama berbagai elemen program**, e.g., nama variabel, *method*, *class*, *keyword*, etc. 

**Karakter pertama** harus **berupa huruf** atau `_` atau `$`. Namun dianjurkan untuk tidak menggunakan `_` dan `$`. **Karakter kedua dan seterusnya** dapat berupa **huruf atau angka**. Huruf besar dianggap berbeda dengan huruf kecil (*case sensitive*). **Tidak ada batas** panjang, tetapi **tidak boleh menggunakan keyword**. 

::: tip `nama`, `x1`, `total`, `cubic`, `namaPegawai`, `_hello` adalah contoh identifier yang *valid* dan benar.
:::

::: danger `1kali`, `int`, `public` adalah contoh identifier yang *invalid* dan salah.
:::

## Literal
> Apa aja sih, nilai data yang bisa disimpan di Java?

Literal pada dasarnya itu merupakan **nilai data** yang kita tuliskan pada program kita, bisa berupa angka, teks, atau yang lainnya. Secara teknis, kita bisa bagi jadi lima macam, yaitu **Integer**, **Floating Point**, **Boolean**, **Character**, dan **String**.

### Integer
Literal integer atau bilangan bulat dapat direpresentasikan dalam **bentuk desimal** (10), **oktal** (8), dan **heksadesimal** (16). Hanya bentuk desimal yang boleh diberi tanda positif (+) dan negatif (-). Bentuk oktal ditandai dengan angka `0` di awal. Sedangkan bentuk heksadesimal diawali dengan `0x` atau `0X`.  

```java
175 // bilangan desimal 175 (10)
075 // bilangan oktal 178 (8) = 61 desimal
0x75 atau 0X75 // bilangan heksadesimal 75 (16) = 117 desimal
-75 // negatif 75 desimal
+75 // positif 75 desimal
```

### Floating Point
Merupakan **representasi dari bilangan desimal** yang **mempunyai titik desimal** (bagian pecahan), misalnya `7.4567`. Literal floating point **boleh bertanda positif (+), negatif (-), maupun tidak bertanda**. Misalnya `+7.4567, -7.4567, 7.4567`. Penulisan literal floating point dapat menggunakan notasi standar maupun ilmiah/*scientific*.  

Secara default, floating point itu bertipe `double` (64 bit). Kalau ingin dijadikan menjadi `float` (32 bit), maka kita harus menambahkan simbol huruf `f` atau `F` di akhir bilangan. Misalnya `7.4567f` atau `7.4567F`.   

```java
0.75 // 0,75 atau 75/100
+0.1 // +0,1 atau 1/10
-0.9876 // negatif 0,9876
2.0e2 atau 2e2 // 2*(10**2)
2E+25 // 2*(10**25)
-75e-011 // -75*(10**(-11))
+75.E25F // +75*(10**25) bertipe float (32 bit)
```

### Karakter
Literal karakter direpresentasikan sebagai **karakter Unicode tunggal** dan dituliskan dengan diapit **tanda petik tunggal** (*single quote*, i.e., `'`). Contohnya adalah sebagai berikut.  

```java
'A' // karakter huruf A kapital
'a' // karakter huruf a standard
'8' // karakter angka 8, bukan angka 8
'#' // karakter simbol hashtag
```

### String
Literal String pada dasarnya merupakan kumpulan dari karakter. String **bisa berisi karakter khusus** seperti `newline`, `tab`, dan sebagainya. String dituliskan dengan diapit tanda petik ganda (*double quote*, i.e., `"`). Berikut adalah contoh dari literal string.  

```java
"Bahasa\nKomputer" // Memberi newline antara bahasa dan komputer
"Nama\t:\tHerman" // antara "Nama" dengan ":" dan ":" dengan "Herman" terdapat horisontal tab
"Teks\"Hallo\"" // kata Hallo diapit oleh tanda petik ganda
```

### Escape Sequences
Escape sequence biasanya dipakai dalam String.

```java
\b // backspace
\t // horizontal tab
\n // new line, line end
\r // carriage return
\' // single quote
\" // double quote
\\ // backslash
\xdd // notasi hexadecimal
\ddd // notasi octal
```

Biar ga bingung, coba perhatikan cuplikan statement Java berikut ini.

```java
System.out.println("Hello World\nHalo Dunia");
```

Kode di atas akan memberikan output sebagai berikut, perhatikan escape sequences `\n` yang akan memberikan *new line* alias baris baru.

```
Hello World
Halo Dunia
```

Untuk contoh-contoh lain bisa dilihat di referensi berikut [^3].

### Boolean
Literal boolean dipakai untuk menuliskan nilai yang berisi **true** atau **false** alias benar atau salah. Penulisannya adalah sebagai berikut.  

```java
true // benar
false // salah
```

## Tipe Data
Java memiliki 8 tipe **data primitif**, dengan rincian berikut.  

| Tipe Data | Memori | Nilai Minimum             | Nilai Maksimum             |
| --------- | ------ | ------------------------- | -------------------------- |
| byte      | 8 bit  | -128                      | 127                        |
| short     | 16 bit | -32768                    | 32767                      |
| int       | 32 bit | -2147483648               | 2147483648                 |
| long      | 64 bit | -9223372036854775808      | 9223372036854775808        |
| float     | 32 bit | ±1.40239846E-45           | ±3.40282347E+38            |
| double    | 64 bit | ±4.94065645841246544E-324 | ±1.7976931348623157 0E+308 |
| char      | 16 bit | \u0000                    | \uFFFF                     |
| boolean   |        | true or false             |

Selain tipe data primitif, Java juga memiliki tipe data **non-primitive** seperti **String, Character, Integer, dan lain sebagainya**. Tipe data non-primitif tersebut dapat ditandai dengan keyword **huruf awal** keyword berupa **kapital**. Tipe data non-primitive tersebut akan dipelajari lebih lanjut pada pemrograman lanjut.

## Variabel
Merupakan sebuah **identifier untuk menyimpan nilai data** yang **dapat diubah nilai datanya**. Variabel memiliki tipe data dan identifier. Tipe data menandakan tipe nilai data yang dapat disimpan di variabel tersebut. Identifier variabel harus mengikuti aturan umum identifier. Deklarasi variabel dapat dilakukan dengan cara berikut ini.  

```java
// tipe-data identifier [, identifier] [= nilai awal];
// tanda [] bersifat opsional
// contoh deklarasi variabel
int a;
float ipSem, ipKum, ipLulus;
double minimum = 0.0, maksimum = 1250000.0;
boolean cek, lulus = false;
```

### Case
Perlu diperhatikan bahwa penulisan variabel dalam Java biasanya menggunakan Camel Case atau Pascal Case. Berikut adalah contoh dari berbagai case yang sering digunakan dalam semua bahasa pemrograman.  

```java
int nilaiAkhir, nilaiTugas, nilaiPraktikum // camel case
int NilaiAkhir, NilaiTugas, NilaiPraktikum // pascal case
int nilai_akhir, nilai_tugas, nilai_praktikum // snake case
int nilai-akhir, nilai-tugas, nilai-praktikum // kebab case
int NILAI_AKHIR, NILAI_TUGAS, NILAI_PRAKTIKUM // screaming snake case
```

## Konstanta dan Enum
Dalam pemrograman, konstanta berarti nilai yang tidak dapat diubah. Konstanta-konstanta itu bisa ditampung dalam sebuah tipe data khusus, yaitu enum.

### Konstanta
Merupakan identifier untuk menyimpan nilai data yang **tidak dapat diubah nilai datanya**. Konstanta memiliki tipe data, identifier, dan nilai konstan. Tipe data menandakan tipe nilai data yang disimpan di konstanta tersebut. Identifier konstanta harus mengikuti aturan umum identifier. Deklarasi konstanta dapat dilihat melalui kode berikut.  

```java
// final tipe-data identifier = nilai [, identifier = nilai];
// tanda [] bersifat opsional
// contoh deklarasi konstanta
final int K = 100;
final double MIN = 0.0, MAKS = 1000000.0;
final double PI = 3.142;
```

Konstanta dituliskan dengan **huruf kapital semua**, seperti screaming snake case.

### Enum
Merupakan sebuah tipe data spesial yang memungkinkan suatu **variabel berisi konstanta yang sudah didefinisikan** sebelumnya. Enum biasanya digunakan untuk himpunan bernama. Contohnya adalah sebagai berikut  

```java
/* lampu lalu lintas hanya bisa red, yellow, green
tingkat kesulitan hanya bisa mudah, sedang, sulit
hari hanya bisa senin, selasa, rabu, kamis, jumat, sabtu, minggu
arah mata angih hanya bisa utara, timur, selatan, barat */

// deklarasi enum
// public enum NamaEnum {KONSTANTA1, KONSTANTA2}
enum LampuLaluLintas {RED, YELLOW, GREEN};
enum Kesulitan {MUDAH, SEDANG, SULIT};
enum Hari {SENIN, SELASA, RABU, KAMIS, JUMAT, SABTU, MINGGU};
enum Arah {UTARA, TIMUR, SELATAN, BARAT};

// penggunaan enum
LampuLaluLintas light = LampuLaluLintas.RED;
Kesulitan level = Kesulitan.MUDAH;
Hari hari = Hari.MINGGU;
Arah arah = Arah.SELATAN;
```

Enum juga dapat didefinisikan seperti layaknya kelas/class. Hal tersebut akan dibahas pada materi pemrograman lanjut/berorientasi objek dengan Java.

[^1]: [What is Unicode? - GeeksforGeeks](https://www.geeksforgeeks.org/what-is-unicode/)
[^2]: [List of Java keywords - Wikipedia](https://en.wikipedia.org/wiki/List_of_Java_keywords)
[^3]: [Java Escape Sequences - GeeksforGeeks](https://www.geeksforgeeks.org/escape-sequences-in-java/)