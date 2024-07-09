---
tags:
  - courses
  - computer-science
Creation: 2023-11-10
chapter: 6
---
## Euclidean Distance
Rumusnya adalah $\sqrt{x^2+y^2}$
Method banyak digunakan dalam matematika, contohnya seperti $f(x) = 3x+1$, maka $f(2) = 5$ (fungsi).
## Definisi
### Pemrograman Modular
Program akan dibuat secara modular, yang mana merupakan konsep penting dalam pembuatan program. Program akan dipecah menjadi berbagai macam program kecil. keuntungannya adalah : 
- Akan lebih mudah maintenance-nya
- Akan lebih mudah dalam pembagian tugasnya
- Mencari kesalahan relatif lebih mudah
- Modifikasi dapat dilakukan tanpa mengganggu program secara keseluruhan
- Reusable
- Mempermudah dokumentasi
### Modularitas di Java
Merupakan pemrograman yang menggunakan pendekatan pemrograman berorientasi objek murni, maka modularitas java dapat meliputi :
- Paket (package) dapat tersusun dari satu atau lebih kelas atau interface
- Kelas (class) dan interface tersusun dari satu atau lebih anggota (member), baik anggota data (field)
- Metode tersusun dari satu atau lebih pernyataan, baik berupa deklarasi
### Modularitas di Pemrograman Terstruktur
Pemrograman berbasis prosedur yang memisahkan antara data dan fungsi. Tersusun atas satu atau lebih sejumlah subprogram yang dapat berupa fungsi/prosedur.
### Pemrograman Terstruktur Modular
Program dipecah-pecah menjadi beberapa subprogram dengan fungsi dan tujuan masing-masing.
### Pemrograman Modular
Sifat modul yang baik adalah : 
- Fan-In yang tinggi, makin sering modul dipanggil pengguna, nilai fan-in makin tinggi.
- Fan-Out yang rendah, makin sedikit tugas yang dilakukan oleh suatu modul makin rendah nilai fan-out. Dengan demikian, makin spesifik tugas yang dikerjakan oleh modul tersebut. 
- Self-Contained, atau dapat memenuhi kebutuhannya sendiri

**Note :** 
Jangan pernah meletakkan input/output selain di void main.
### Sekilas Tentang Metode
Sejak pertama kali menulis program java, metode pertama adalah `main()`. Metode memuat serangkaian pernyataan instruksi yang dapat dipergunakan untuk melakukan proses tertentu dan memiliki identifier atau nama.

Beberapa hal penting ang perlu diperhatikan terkait metode :
- Pemanggilan metode
- Argumen
- Kembali ke pemanggil
- Pengembalian nilai
### Metode dan Penyembunyian Informasi
Merupakan keuntungan dari penggunaan metode, sehingga pengguna tidak perlu memikirkan/memperhatikan operasi di dalam metode yang bisa jadi sangat kompleks. Rincian tersebut hanya dibutuhkan oleh pengembang metode. Gagasan bahwa pemanggilan metode harus terisolasi dari rincian operasi metode merupakan prinsip dari penyembunyian informasi (information hiding).
### Metode sebagai alat bagi programmer
- Metode tidak sama dengan program aplikasi.
- Aplikasi menyediakan layanan pada pengguna program, yang biasanya bukan programmer.
- Sebaliknya, metode menyediakan layanan untuk programmer, yang biasanya digunakan programmer.
### Pemanggilan Metode
Merupakan bagian dari ekspresi di Java.
`System.out.println("Hello 123")`
- System merupakan package
- out merupakan nama kelas
- println merupakan nama metode
### Deklarasi Metode
```java
lingkup tipe namaMetode(parameter) {
	pernyataan-pernyataan (bodi metode)
}
```
#### Lingkup
Merupakan siapa yang berhak mengakses metode tersebut.
Nilai dari lingkup (scope) : 
- public → kelas lain juga dapat mengakses
- private → hanya dapat dipanggil dari dalam kelasnya sendiri
- protected → dapat diakses juga oleh turunan dari suatu kelas
- kosong (default) → sama dengan default package (bisa diakses di paket yang sama)
#### Tipe
Menunjukkan jenis nilai yang dikirimkan kembali oleh metode. Metode yang mengembalikan nilai kepada pemanggilnya disebut fungsi (function). Jika diinginkan tidak mengembalikan nilai, maka tipe yang digunakan adalah void. Metode yang tidak mengembalikan nilai kepada pemanggilnya disebut prosedur (procedure). 
### Pengembalian Nilai Dari Metode
Untuk dapat melakukan pengiriman kembali nilai data dari sebuah metode ke pemanggilnya, digunakan `return`. Untuk void, digunakan `return;` yang berfungsi seperti `break;`

Untuk mengembalikan nilai digunakan `return ekspresi;`
### Contoh
```java
public double feetKeInci(double feet) {
	return 12 * feet;
}
```
#### If Dalam Metode
```java
public int maksimum(int x, int y) {
	if (x > y) return x;
	else return y;
}
```
### Lingkup Identifier
- Local → berada dalam method
- Global → berada di luar method dalam kelas
## Metode Recursive
Metode yang di dalamnya terdapat pernyataan yang memanggil dirinya sendiri. Memerlukan memori yang lebih banyak karena memerlukan tambahan memori untuk activation record/stack frame. Secara umum, recursive digunakan jika :
- Penyelesaian sulit dilaksanakan secara iteratif
- Efisiensi dengan cara recursive sudah memadai
- Efisiensi bukan masalah
## Static vs Non-Static
Semua instansiasi variabel dan metode di Java secara default bersifat dinamis, tidak ada keyword dynamic. Secara umum dinamis mengacu pada hal-hal yang instansiasi (pengalokasian memori) di saat run time. Setiap objek memiliki instansiasi sendiri dari setiap variabel dinamisnya. Setiap objek secara efektif memiliki salinan sendiri dari setiap metode dinamis. 

Static merujuk pada artian "secara umum berkaitan dengan kelas", dan "tidak berkaitan dengan objek secara individual". Sebuah variabel dapat dideklarasikan di luar method dengan kata kunci static. Hanya ada satu variabel n untuk semua objeknya.
```java
public class Method {
	static double pi = 3.14;
	
	public static void main(String[] args) {
		System.out.print(pi)
		System.out.print(Method.pi)
	}
}
```
Sebuah variabel static digunakan bersama oleh semua instansiasinya (objeknya), dalam arti semua instansiasi dari kelas yang memiliki variabel static mengakses pada sebuah variabel.

Sebuah metode juga dapat dideklarasikan dengan kata kunci static. Metode static berada di tingkat kelas, bukan pada tingkat objek. Metode static hanya dapat mengakses variabel static dan metode static.
```java
public static int getN() {
	return n;
}
```

Metode main() harus static karena dieksekusi pertama kali saat program dijalankan, sehingga tidak ada objek yang mengirim pesan ke metode main() tersebut. Variabel non-static tidak dapat direferensikan dari konteks static.

Sebuah variabel harus static jika secara logika menggambarkan kelas secara keseluruhan dan harus hanya satu alokasi memori untuk semua objek dari kelas yang sama. Sebuah metode harus static jika tidak menggunakan atau mempengaruhi objek yang menerima pesan (hanya menggunakan parameter saja).

Sebuah metode dinamis dapat mengakses semua variabel dinamis dan statis dan metode di kelas yang sama. Sebuah metode static tidak dapat mengakses variabel dinamis dan metode dinamis.
## Variadic Function
Pemrogram dapat membuat metode yang dapat menerima sejumlah argumen yang tidak ditentukan jumlahnya. Sebuah tipe argumen diikuti dengan simbol `...` dalam daftar argumen dari sebuah metode menunjukkan bahwa metode tersebut dapat menerima sejumlah variabel argumen dari tipe-data tertentu.
```java
public class App {
    public static double rerata(double... bil) {
        int total = 0;
        for (double d : bil) {
            total += d;
        }
        return total / bil.length;
    }

    public static void main(String[] args) {
        System.out.println(rerata(1, 2, 3, 4, 5));
    }
}
```
## Parameter Referensi
Terdapat dua cara pengiriman data melalui parameter, yaitu pass by value dan pass by reference. Pass by value berarti mengirimkan nilai data ke parameter/argumen method. Di java, setiap parameter metode yang memiliki tipe data primitif adalah pass by value.

Sementara itu, pass by reference, pemanggil memberikan akses langsung kepada metode yang dipanggil ke data pemanggil. Metode yang dipanggil dapat memanipulasi data tersebut. Pass by reference memiliki peningkatan kinerja lebih baik daripada pass by value. Di Java, setiap objek yang dipakai pengiriman pesan ke metode adalah pass by reference, termasuk array.
## Parameter Array
Pengiriman array melalui argumen metode dapat dilakukan hanya dengan menuliskan nama variabel array.
```java
public static void urutData(int[] a) {
	...
}
public static void main(String[] args) {
	int[] x = new int[100];
	urutData(x);
}
```
## Pengurutan Data (Sorting)
Ada banyak sekali algoritma-algoritma yang bisa digunakan untuk melakukan sorting nilai, salah satunya adalah bubble sort. Nilai lebih kecil diarahkan ke indeks array semakin kecil. Nilai lebih besar diarahkan ke indeks array semakin besar. Dapat digunakan nested loop untuk mewujudkan hal ini.
## Searching
Searching digunakan untuk mencari nilai data yang sesuai pada sejumlah data tertentu, misalnya array. Digunakan untuk menemukan apakah elemen sebuah array berisi nilai data yang sama dengan nilai tertentu yang dicari. Terdapat metode pencarian linear dan pencarian biner untuk mewujudkan hal tersebut.
## Pertanyaan
1. Apakah bisa ada dua method dengan nama yang sama dalam satu kelas, mungkin dengan argumen yang berbeda?
2. Jika ternyata argumen kedua method sama-sama memenuhi argumen yang diberikan, mana yang akan di eksekusi?
3. Kapan menggunakan public, protected, private, atau default?