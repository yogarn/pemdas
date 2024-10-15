---
tags:
  - courses
  - computer-science
Creation: 2023-11-03
chapter: 7
---
# Array
## Pengantar
> Array merupakan larik atau struktur berurut yang berisi elemen yang dapat di akses melalui rujukan bilangan dan digunakan untuk menyimpan tabel dan himpunan data yang berkaitan. Tipe data dalam array **harus homogen** (hanya bisa menyimpan data dengan tipe data yang sama). 
```java
int[] nilai = new int[40];
```
:::info Kode di atas akan membuat sebuah array bertipe integer, dengan panjan array sebanyak 40 elemen.
:::

### Sifat Array
- Homogen (hanya bisa dipakai untuk satu tipe data)
- Random Access (bisa mengakses setiap elemen secara langsung melalui rujukannya)
- Merupakan variabel referensi (bukan primitif)
- Contiguous Memory Allocation (alokasi memori selalu berurutan untuk tiap elemen array)
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
:::info Array bukan merupakan tipe data primitif, sehingga harus dibuat objek nya terlebih dahulu, mirip dengan scanner
:::

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
Indeks hanya dapat bernilai 0 atau positif dengan nilai maksimumnya adalah jumlah elemen - 1
:::info Misalkan sebuah array punya size 40, maka indeksnya adalah mulai 0 hingga 39 (inklusif)
:::

### Mengisi Data Array
Dilakukan dengan menggunakan assignment operator dengan indeks tertentu.
```java
a[6] = 15;
a[3] = 27;
a[2] = a[3] - a[6]; // 12
```
### Inisialisasi Array
Array juga dapat diinisialisasi secara eksplisit, artinya kita bisa memberi nilai array tersebut pada saat kita instansiasi arraynya.  
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
:::info Singkatnya, merupakan array yang berada di dalam array.
:::
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
