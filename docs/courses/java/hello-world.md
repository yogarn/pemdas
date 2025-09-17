# Hello World!
Setelah mengenal sejarah singkat mengenai Java dan apa saja yang perlu disiapkan untuk membuat kode di Java, sekarang adalah waktunya kita untuk mulai membuat program sederhana.
Jadi gimana sih cara bikin program Java sederhana dan menjalankannya?

## Struktur Dasar

```java
public class Main {                             // main class
	public static void main(String[] args) {    // main method
		System.out.println("Hello World");      // statement
        System.out.println("Halo Dunia");       // statement lain
	}
}
```
Semuanya dimulai dari struktur singkat di atas.
Potongan kode tersebut adalah contoh struktur utama kode Java yang pasti akan kalian temui di banyak kode-kode Java lain. 
Struktur tersebut terdiri atas *main class*, *main method*, dan juga *statement*.

:::tip :open_book: Not-So-Important Notes
_Don't worry_ kalau masih belum terlalu paham sama struktur dasar di atas, kamu akan pelan-pelan memahaminya seiring bertambah bab nantinya.
:::

`public class` kita pakai ketika kita ingin mendeklarasikan (atau membuat) sebuah class. 
Setelah itu, kita bisa menambahkan nama (*identifier*) dari class yang ingin kita buat. 
Dalam kode di atas, `Main` adalah nama class yang kita buat. 
Nama class tidak harus `Main`, bisa apa saja, tetapi harus mengikuti peraturan mengenai *identifier* (akan di bahas lebih lanjut di bagian selanjutnya). 
**Nama class** juga **harus sama dengan nama file** yang dibuat, i.e., file dengan nama `HelloWorld.java` juga harus punya main class dengan nama `HelloWorld`. 
Setelah membuat main class, kita bisa membuat simbol kurung kurawal (*curly braces*, i.e., `{` dan `}`) sebagai penanda bahwa semua yang ada di antara tanda kurung tersebut merupakan bagian dari main class.

`public static void` kita pakai untuk mendefinisikan sebuah method. 
Kemudian, kita bisa menambahkan nama (*identifier*) untuk dipakai sebagai nama method yang kita buat. 
Oleh karena itu, `public static void main(String[] args)` kita sebut sebagai main method, karena identifiernya adalah `main`. 
Tanda kurung yang ada setelah identifier atau nama method kita sebut sebagai **parameter** (akan dipelajari lebih lanjut di bagian selanjutnya). 
Setelah membuat main method, jangan lupa tambahkan kurung kurawal juga seperti ketika membuat class.

==**Semua kode yang berada di dalam** tanda kurung **main method akan dieksekusi** oleh Java==. 
Hal tersebut karena main method berperan sebagai _entry point_ atau sesuatu yang akan pertama kali dijalankan oleh Java. 
Kode yang ada di dalam main method, umumnya bisa berupa statement, misalnya dalam kode di atas adalah `System.out.println("Hello World");`.

::: warning :warning: Quick Reminder
Jangan lupa menambahkan tanda titik koma (semi colon, i.e., `;`) pada akhir statement.
:::

## Menjalankan Program Java
Untuk menjalankan program Java, kamu bisa coba untuk klik tombol run yang biasanya ada di pojok kanan atas (jika menggunakan Intellij, VSCode, etc).
Namun, kalau kamu pilih _old-fashioned way_ menggunakan CLI, kamu bisa coba cara di bawah ini [^1].

```shell
javac Main.java   // compile file Main.java jadi binary
java Main         // menjalankan binary hasil compile
```

Jadi gimana? Gampang kan pasti untuk bikin program Java sederhana? 
Selanjutnya kita bakalan menyelam lebih jauh mengenai variabel dan struktur tipe data yang ada di Java.

[^1]: [Java Getting Started](https://www.w3schools.com/java/java_getstarted.asp)