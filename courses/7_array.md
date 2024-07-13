---
tags:
  - courses
  - computer-science
Creation: 2023-11-03
chapter: 7
---
## Pengantar
Array → Larik atau struktur berurut yang berisi elemen individu yang dapat di akses melalui rujukan bilangan dan digunakan untuk menyimpan tabel dan himpunan data yang berkaitan. Tipe data dalam array harus homogen.
```java
int[] nilai = new int[40];
```
### Sifat Array
- Homogen
- Random Access
- Merupakan variabel referensi (bukan primitif)
- Contiguous Memory Allocation (alokasi memori selalu berurutan)
## Penggunaan
### Deklarasi Array
```java
type[] namaArray;
type namaArray[];

int[] a;
int a[];
```
### Instansiasi Objek Array
Array termasuk variabel referensi, maka agar variabel array dapat diakses harus diinstansiasi lebih dulu dengan menggunakan keyword `new`.
```java
namaArray = new tipe[jumlah elemen];
a = new int[10];
```
Deklarasi dan instansiasi juga dapat digabung menjadi 1 line, contohnya sebagai berikut.
```java
type[] namaArray = new type[jumlah_elemen];
type namaArray[] = new type[jumlah_elemen];
```
### Cara Akses Elemen Array
Cara mengakses array adalah sebagai berikut.
```java
namaArray[indeks];
a[i];
```
Indeks hanya dapat bernilai 0 atau positif dengan nilai maksimumnya adalah (jumlah elemen - 1)
### Mengisi Data Array
Dilakukan dengan menggunakan assignment operator dengan indeks tertentu.
```java
a[6] = 15;
a[3] = 27;
a[2] = a[3] - a[6]; // 12
```
### Inisialisasi Array
Array dapat diinisialisasi secara eksplisit.
```java
int b[] = new int[] {1, 2, 3, 4, 5};
```

```java
int a[] = new int[5];
for (int i = 0; i < 5; i++) {
	a[i] = 0;
}
// [0, 0, 0, 0, 0]
```
## Array 2 Dimensi
Merupakan sebuah array yang memiliki indeks baris dan kolom.
```java
int a[][] = new int[3][4];
```
Baris dapat mempunyai jumlah kolom yang berbeda
```java
int b[][];
b = new int[2][];
b[0] = new int[5];
b[1] = new int[2];
```
