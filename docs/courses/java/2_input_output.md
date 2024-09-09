---
tags:
  - courses
  - computer-science
Creation: 2023-12-13
chapter: 2
---
# Input & Output
Untuk bisa menerapkan pemrograman dalam kehidupan sehari-hari, tentunya kita memerlukan yang namanya input dan output. Input pada dasarnya adalah masukan, umumnya diberikan oleh user yang menjalankan program, sementara itu output adalah sesuatu yang ditampilkan oleh program. Pada bab sebelumnya, kita sudah menggunakan salah satu contoh output, yaitu `System.out.println()`. Di bab ini, kita bisa belajar bagaimana cara menampilkan berbagai output dengan format tertentu dan juga bagaimana cara menerima input dari user.

## Operasi Output
Digunakan untuk **menampilkan nilai** data ke console/terminal. Beberapa method dari class `System` di Java yang dapat digunakan untuk menampilkan keluaran pada console/terminal adalah sebagai berikut.
```java
System.out.println();
System.out.print();
System.out.printf();
```

Data atau nilai yang ingin kita tampilkan, bisa kita masukkan sebagai argumen pada method-method di atas.

:::tip Simbol yang umum digunakan untuk menampilkan output dalam flowchart untuk output adalah berbentuk jajar genjang.
:::
### System.out.println()
`System.out` merupakan suatu **objek** yang merupakan bagian dari bahasa pemrograman Java itu sendiri. `println()` merupakan *method* yang dipanggil oleh objek `System.out` dan dapat digunakan untuk **menampilkan output** pada console yang ada di layar monitor sebagai standard output.

:::tip Intinya, `System.out.println()` bisa kita pakai untuk nampilin data ke terminal/console.
:::

Nilai data yang akan ditampilkan sebagai keluaran dituliskan sebagai **argumen** dalam tanda kurung. Tanda plus (+) bisa dipakai untuk menggabungkan lebih dari satu nilai data yang akan ditampilkan, biasanya digunakan di String (*concatenation*). Setiap penggunaan `println()` akan selalu **diakhiri dengan baris baru** pada tampilan outputnya. Berikut ini adalah contoh penggunaan `System.out.println()`.
```java
System.out.println("Hello There"); // Hello There
System.out.println("Hi " + "There"); // Hi There
System.out.println("10 + 5 = " + (10+5)); // 10 + 5 = 15

// operasi aritmatika harus berada dalam tanda kurung
// tanpa tanda kurung, bilanga akan dianggap sebagai string
System.out.println("10 + 5 = " + 10+5); // 10 + 5 = 105
```
### System.out.print()
Method ini mirip dengan method `System.out.println()`, hanya saja method ini **tidak diakhiri dengan baris baru** pada tampilan outputnya. Dengan method ini, maka output selanjutnya akan diletakkan pada baris yang sama. Penerapannya biasa digunakan untuk meminta input dari user melalui console/terminal.  

### System.out.printf()
Method ini mirip dengan `System.out.print()`, tapi dapat mengeluarkan **output dengan format tertentu**. Dengan format tertentu, output seperti tata letak, presisi, dan sebagainya dapat diatur dengan format khusus.
Spesifikasi format tersebut umumnya adalah `%[flags][width][.precision][type]`, dengan penjelasan sebagai berikut.

| Format    | Keterangan                                                                 |
| --------- | -------------------------------------------------------------------------- |
| flags     | Menentukan rata kanan, kiri, atau bertanda :                               |
|           | - None : Rata kanan                                                        |
|           | - (-)  : Rata kiri                                                         |
|           | - (+)  : Menampilkan tanda positif (+) atau negatif (-)                    |
| width     | Menentukan jumlah kolom yang disediakan                                    |
| precision | Menentukan jumlah angka di belakang titik desimal (untuk bilangan pecahan) |
| type      | Menentukan tipe variabel/nilai data yang akan ditampilkan                  |

#### Type Format
Berikut ini adalah berbagai type format yang bisa digunakan dalam `System.out.printf()`.

| Type Format | Keterangan                                                     |
| ----------- | -------------------------------------------------------------- |
| c           | Menampilkan karakter tunggal                                   |
| s           | Menampilkan String                                             |
| d           | Menampilkan bilangan integer desimal bertanda atau tanpa tanda |
| x, X        | Menampilkan bilangan integer hexadecimal tak bertanda          |
| o           | Menampilkan bilangan integer oktal tak bertanda                |
| f           | Menampilkan bilangan pecahan (titik desimal)                   |
| E atau e    | Menampilkan bilangan pecahan eksponensial                      |
| G atau g    | Menampilkan bilangan pecahan                                   |
| p           | Menampilkan pointer objek                                      |

#### Format Character
Berikut ini adalah berbagai format **karakter** yang bisa digunakan dalam `System.out.printf()`.

| Kode Format | Keterangan                                           |
| ----------- | ---------------------------------------------------- |
| "%c"        | Menampilkan sebuah karakter tunggal terformat        |
| "%nc"       | Menampilkan sebuah karakter lebar n kolom rata kanan |
| "%-nc"      | Menampilkan sebuah karakter lebar n kolom rata kiri  |

Contoh penggunaan format character adalah sebagai berikut.

```java
System.out.printf("&c\n", 65); // A
System.out.printf("&5c&5c&5c\n", 65, 66, 67); //     A    B    C
System.out.printf("&-5c&-5c&-5c\n", 65, 66, 67); // A    B    C    
```

#### Format String
Berikut ini adalah berbagai format **string** yang bisa digunakan dalam `System.out.printf()`.

| Kode Format | Keterangan                                                                     |
| ----------- | ------------------------------------------------------------------------------ |
| "%s"        | Menampilkan sebuah nilai String terformat                                      |
| "%ns"       | Menampilkan sebuah nilai String lebar n kolom rata kanan                       |
| "%-ns"      | Menampilkan sebuah nilai String lebar n kolom rata kiri                        |
| "%n.ms"     | Menampilkan rata kanan hanya m buah karakter pertama saja dengan lebar n kolom |
| "%-n.ms"    | Menampilkan rata kiri hanya m buah karakter pertama saja dengan lebar n kolom  |
Contoh penggunaan format string dapat dilihat dalam kode di bawah ini.
```java
System.out.printf("%s%c\n", "Pemrograman Java", '|'); 
System.out.printf("%30s%c\n", "Pemrograman Java", '|'); 
System.out.printf("%-30s%c\n", "Pemrograman Java", '|'); 
System.out.printf("%30.5s%c\n", "Pemrograman Java", '|'); 
System.out.printf("%-30.5s%c\n", "Pemrograman Java", '|'); 

// output
/*
Pemrograman Java|
              Pemrograman Java|
Pemrograman Java              |
                         Pemro|
Pemro                         |
*/
```
#### Format Desimal Integer
Berikut ini adalah berbagai format **desimal integer** yang bisa digunakan dalam `System.out.printf()`.

| Kode Format | Keterangan                                                                          |
| ----------- | ----------------------------------------------------------------------------------- |
| "%d"        | Menampilkan sebuah nilai signed integer terformat                                   |
| "%nd"       | Menampilkan sebuah nilai integer terformat n kolom rata kanan                       |
| "%-nd"      | Menampilkan sebuah nilai integer terformat n kolom rata kiri                        |
| "%+nd"      | Menampilkan nilai integer terformat dengan tanda (+/-) n kolom rata kanan           |
| "%-+nd"     | Menampilkan nilai integer terformat dengan tanda (+/-) n kolom rata kiri            |
| "%0nd"      | Menampilkan sebuah nilai integer terformat n kolom rata kanan dengan blank berupa 0 |  |  |
Berikut ini adalah contoh cara menampilkan desimal integer terformat.
```java
int x = 1234;
int y = 567;
long z = -567;
System.out.printf("%d %3d %8d %-8d\n",x,x,y,z);
System.out.printf("%d %+8d %+8d %+8d\n",x,x,y,z);
System.out.printf("%d %-8d %-8d %-8d\n",x,x,y,z);
System.out.printf("%d %-+8d %-+8d %-+8d\n",x,x,y,z);
System.out.printf("%d %+-8d %+-8d %+-8d\n",x,x,y,z);
System.out.printf("%d %+08d %+08d %+08d\n",x,x,y,z); 

// output
/*
1234 1234      567 -567    
1234    +1234     +567     -567
1234 1234     567      -567    
1234 +1234    +567     -567    
1234 +1234    +567     -567    
1234 +0001234 +0000567 -0000567
*/
```
#### Format Hexadecimal
Berikut ini adalah berbagai format **hexadecimal** yang bisa digunakan dalam `System.out.printf()`.

| Kode Format      | Keterangan                                                                            |
| ---------------- | ------------------------------------------------------------------------------------- |
| "%x", "%X"       | Menampilkan nilai unsigned integer terformat hexadecimal                              |
| "%nx", "%nX"     | Menampilkan format hexadecimal lebar n kolom rata kanan                               |
| "%0nx", "%0nX"   | Menampilkan format hexadecimal lebar n kolom rata kanan dengan blank berupa 0         |
| "%-nx", "-nX"    | Menampilkan format hexadecimal lebar n kolom rata kiri                                |
| "%#x", "%#X"     | Menampilkan format hexadecimal diawali dengan "0x" atau "0X"                          |
| "%#nx", "%#nX"   | Menampilkan format hexadecimal lebar n kolom rata kanan diawali dengan "0x" atau "0X" |
| "%#-nx", "%#-nX" | Menampilkan format hexadecimal lebar n kolom rata kiri diawali dengan "0x" atau "0X"  |
Contoh penggunaan format hexadecimal dapat dilihat dalam kode di bawah ini.
```java
int x = 7654;
System.out.printf("%x %X %10x %10X\n",x,x,x,x);   
System.out.printf("%x %X %-10x %-10X\n",x,x,x,x);   
System.out.printf("%x %X %010x %010X\n",x,x,x,x);   
System.out.printf("%#x %#X %#10x %#10X\n",x,x,x,x);   
System.out.printf("%#x %#X %#010x %#010X\n",x,x,x,x); 
System.out.printf("%#x %#X %#-10x %#-10X\n",x,x,x,x);

// output
/*
1de6 1DE6       1de6       1DE6
1de6 1DE6 1de6       1DE6      
1de6 1DE6 0000001de6 0000001DE6
0x1de6 0X1DE6     0x1de6     0X1DE6
0x1de6 0X1DE6 0x00001de6 0X00001DE6
0x1de6 0X1DE6 0x1de6     0X1DE6    
*/
```
#### Format Oktal
Berikut ini adalah berbagai format **oktal** yang bisa digunakan dalam `System.out.printf()`.

| Kode Format | Keterangan                                                              |
| ----------- | ----------------------------------------------------------------------- |
| "%o"        | Menampilkan nilai unsigned integer terformat oktal                      |
| "%no"       | Menampilkan format oktal lebar n kolom rata kanan                       |
| "%0no"      | Menampilkan format oktal lebar n kolom rata kanan dengan blank berupa 0 |
| "%-no"      | Menampilkan format oktal lebar n kolom rata kiri                        |
| "%#o"       | Menampilkan format oktal diawali dengan "0"                             |
| "%#no"      | Menampilkan format oktal lebar n kolom rata kanan diawali dengan "0"    |
| "%#-no"     | Menampilkan format oktal lebar n kolom rata kiri diawali dengan "0"     |
Berikut ini adalah contoh cara menampilkan oktal terformat.
```java
int x = 7654;
System.out.printf("%o %10o%c\n", x, x, '|');
System.out.printf("%o %-10o%c\n", x, x, '|');
System.out.printf("%o %010o%c\n", x, x, '|');
System.out.printf("%o %#10o%c\n", x, x, '|');
System.out.printf("%o %#10o%c\n", x, x, '|');
System.out.printf("%o %-10o%c\n", x, x, '|');

// output
/*
16746      16746|
16746 16746     |
16746 0000016746|
16746     016746|
16746     016746|
16746 16746     |
*/

```
#### Format Desimal Pecahan (Float)
Berikut ini adalah berbagai format **floating point** yang bisa digunakan dalam `System.out.printf()`.

| Kode Format | Keterangan                                                                                                                        |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| "%f"        | Menampilkan sebuah nilai float (pecahan) desimal terformat                                                                        |
| "%e"        | Menampilkan sebuah nilai float desimal terformat scientific                                                                       |
| "%g"        | Menampilkan sebuah nilai float desimal terformat yang terpendek di antara "%f" atau "%e"                                          |
| "%nf"       | Menampilkan sebuah nilai float integer terformat n kolom rata kanan                                                               |
| "%-nf"      | Menampilkan sebuah nilai float integer terformat n kolom rata kiri                                                                |
| "%n.mf"     | Menampilkan sebuah nilai float integer terformat n kolom rata kanan dengan m digit di belakang titik desimal                      |
| "%0n.mf"    | Menampilkan sebuah nilai float integer terformat n kolom rata kanan dengan m digit di belakang titik desimal dan blank berupa "0" |
| "%-+n.mf"   | Menampilkan sebuah nilai float terformat dengan tanda (+/-) n kolom rata kiri dengan m digit di belakang titik desimal            |
Berikut ini adalah contoh cara menampilkan float terformat.
```java
float x = 7654.123456789F;
double d = 7654.1234567890123456789;
System.out.printf("%f %15f %15.3f\n", x, x, x);
System.out.printf("%e %15e %15.3e\n", x, x, x);
System.out.printf("%g %15g %15.3g\n", x, x, x);
System.out.printf("%f %20f %+30.19f\n", d, d, d);

// output
/*
7654.123535     7654.123535        7654.124
7.654124e+03    7.654124e+03       7.654e+03
7654.12         7654.12        7.65e+03
7654.123457          7654.123457      +7654.1234567890120000000
*/
```
#### Format Tabel
Berikut ini adalah contoh untuk membuat **tabel** menggunakan metode pemformatan float.

:::warning Kalau masih belum paham mengenai perulangan, lebih baik skip dulu aja.
:::

```java
int n; double l; double fb;
System.out.printf("TABEL FAKTOR BUNGA MAJEMUK\n\n");
System.out.printf(" n %10s %10s %10s %10s %10s\n\n", "1.0%", "2.0%", "3.0%", "4.0%", "5.0%");
for (n=1;n<15;n++) {
    System.out.printf("%02d", n);
    for (int i=1; i<=5;i++) {
        fb = Math.pow(1.0 + i/100.0, n);
        System.out.printf("%11.7f", fb);
    }
    System.out.println();
}
System.out.println();

// output
/*
 n       1.0%       2.0%       3.0%       4.0%       5.0%

01  1.0100000  1.0200000  1.0300000  1.0400000  1.0500000
02  1.0201000  1.0404000  1.0609000  1.0816000  1.1025000
03  1.0303010  1.0612080  1.0927270  1.1248640  1.1576250
04  1.0406040  1.0824322  1.1255088  1.1698586  1.2155063
05  1.0510101  1.1040808  1.1592741  1.2166529  1.2762816
06  1.0615202  1.1261624  1.1940523  1.2653190  1.3400956
07  1.0721354  1.1486857  1.2298739  1.3159318  1.4071004
08  1.0828567  1.1716594  1.2667701  1.3685691  1.4774554
09  1.0936853  1.1950926  1.3047732  1.4233118  1.5513282
10  1.1046221  1.2189944  1.3439164  1.4802443  1.6288946
11  1.1156683  1.2433743  1.3842339  1.5394541  1.7103394
12  1.1268250  1.2682418  1.4257609  1.6010322  1.7958563
13  1.1380933  1.2936066  1.4685337  1.6650735  1.8856491
14  1.1494742  1.3194788  1.5125897  1.7316764  1.9799316
*/
```
#### Format Bilangan, Mata Uang, dan Persentase
Java menyediakan beragam format yang umum digunakan, misalnya **bilangan, mata uang**, dan **persentase**. Untuk memperoleh format bilangan, mata uang, dan persentase, maka dapat dilakukan dengan memanggil metode barikut dari class `NumberFormat`.
```java
getNumberInstance()
getCurrencyInstance()
getPercentInstance()
```
Penyesuaian format bilangan, mata uang, dan persentase pada lokal tertentu dapat diperoleh dengan memberikan argumen, misalnya locale Jerman adalah sebagai berikut.
```java
getNumberInstance(Locale.GERMANY)
getCurrencyInstance(Locale.GERMANY)
getPercentInstance(Locale.GERMANY)
```

Contoh dari pemformatan bilangan, mata uang, dan persentase ada pada kode di bawah ini.
```java
import java.text.NumberFormat;
import java.util.Locale;

public class Pemdas_prak_3 {
    public static void main(String[] args) {
        double x=100000/3.0;
        NumberFormat numberFormatter = NumberFormat.getNumberInstance(Locale.GERMANY);
        NumberFormat currFormatter = NumberFormat.getCurrencyInstance(Locale.GERMANY);
        NumberFormat percentFormatter = NumberFormat.getPercentInstance(Locale.GERMANY);
        String numberStr = numberFormatter.format(x);
        String currStr = currFormatter.format(x);
        String percentStr = percentFormatter.format(x);
        System.out.println("double 100000./3/ berformat bilangan : " + numberStr);
        System.out.println("double 100000./3/ berformat mata uang : " + currStr);
        System.out.println("double 100000./3/ berformat persentase : " + percentStr);
    }
    
}

// output
/*
double 100000./3/ berformat bilangan : 33.333,333
double 100000./3/ berformat mata uang : 33.333,33 €
double 100000./3/ berformat persentase : 3.333.333 %
*/
```
## Operasi Input
Operasi input merupakan sebuah operasi untuk **menyimpan nilai data** ke variabel tertentu melalui peralatan I/O, seperti keyboard, disk, dan lain sebagainya. Peralatan input standard adalah keyboard. 

:::tip Simbol untuk input yang umum digunakan dalam flowchart adalah berbentuk jajar genjang.
:::

Operasi input di Java melalui peralatan input standard dapat dilakukan dengan menggunakan class `Scanner`. Penggunaan class `Scanner` **memerlukan deklarasi import dan instansiasi objek** sebagai berikut.

```java
// import Scanner
import java.util.Scanner;

// instansiasi Scanner
Scanner input = new Scanner(System.in);
```

### Method Input Data
Dalam class `Scanner`, ada beberapa method yang bisa digunakan, yaitu sebagai berikut.

| Method        | Kegunaan                     |
| ------------- | ---------------------------- |
| next();       | Memasukkan string (kata)     |
| nextLine();   | Memasukkan string (kalimat)  |
| nextByte();   | Memasukkan bilangan (byte)   |
| nextShort();  | Memasukkan bilangan (short)  |
| nextInt();    | Memasukkan bilangan (int)    |
| nextLong();   | Memasukkan bilangan (long)   |
| nextFloat();  | Memasukkan bilangan (float)  |
| nextDouble(); | Memasukkan bilangan (double) |

Di bawah ini merupakan kode yang berfungsi untuk mengambil input dari user dan menampilkannya kembali.
```java
import java.util.Scanner;

public class Pemdas_prak_3 {
    public static void main(String[] args) {
        String nilaiString; byte nilaiByte; int nilaiInt; float nilaiFloat; double nilaiDouble;
        Scanner input = new Scanner(System.in);
        System.out.print("Masukkan nilai String : ");
        nilaiString = input.nextLine();
        System.out.print("Masukkan nilai byte : ");
        nilaiByte = input.nextByte();
        System.out.print("Masukkan nilai Integer : ");
        nilaiInt = input.nextInt();
        System.out.print("Masukkan nilai float : ");
        nilaiFloat = input.nextFloat();
        System.out.print("Masukkan nilai double : ");
        nilaiDouble = input.nextDouble();
        System.out.println("\nDATA YANG SUDAH DIINPUTKAN:");
        System.out.printf("Nilai String : %s\n", nilaiString);
        System.out.printf("Nilai Byte : %d\n", nilaiByte);
        System.out.printf("Nilai Int : %d\n", nilaiInt);
        System.out.printf("Nilai Float : %f\n", nilaiFloat);
        System.out.printf("Nilai Double : %.18f\n", nilaiDouble);
    }
}

// input & output
/*
Masukkan nilai String : Bahasa Pemrograman Java
Masukkan nilai byte : 121
Masukkan nilai Integer : 234567890
Masukkan nilai float : 89.7876521
Masukkan nilai double : 89.123456789012345

DATA YANG SUDAH DIINPUTKAN:
Nilai String : Bahasa Pemrograman Java
Nilai Byte : 121
Nilai Int : 234567890
Nilai Float : 89.787651
Nilai Double : 89.123456789012350000
*/
```
:::tip Input dua atau lebih variabel juga dapat dilakukan dalam satu line yang dipisahkan oleh space. Sebagai contoh adalah sebagai berikut.
:::
```java
int panjang, lebar, tinggi, volume;
Scanner input = new Scanner(System.in);
System.out.printf("%-25s %s", "Panjang, Lebar, dan Tinggi", " : ");
panjang = input.nextInt();
lebar =  input.nextInt();
tinggi =  input.nextInt();
volume = panjang * lebar * tinggi;
System.out.printf("%-25s %s %d\n","Volume", " :", volume);

// input dan output
/*
Panjang, Lebar, dan Tinggi : 3 6 9 // input
Volume                     : 162 // hasil perkalian dari panjang, lebar, dan tinggi (3 * 6 * 9).
*/
```
Dalam contoh lain, penggunaan input yang berasal dari satu line juga bisa diterapkan di berbagai tipe data. Misalnya antara integer, float, dan long. Hal tersebut dapat dilihat dari contoh berikut ini.

```java
int nilaiInteger;
float nilaiFloat;
long nilaiLong;
Scanner input = new Scanner(System.in);
System.out.printf("%-25s %s", "Integer, Float, dan Long", " : ");
nilaiInteger = input.nextInt();
nilaiFloat =  input.nextFloat();
nilaiLong = input.nextLong();
System.out.printf("%-25s %s %d\n","Integer", " :", nilaiInteger);
System.out.printf("%-25s %s %f\n","Float", " :", nilaiFloat);
System.out.printf("%-25s %s %d\n","Long", " :", nilaiLong);

// input dan output
/*
Integer, Float, dan Long   : 21 3.14 123456789 // input
Integer                    : 21
Float                      : 3.140000
Long                       : 123456789
*/
```
:::warning Perlu diperhatikan bahwa apabila dalam satu line terdapat string, maka kita harus pakai `next()` dan **bukan** `nextLine()`. 
:::

```java
Scanner input = new Scanner(System.in);
System.out.printf("%-25s %s", "Integer, String, dan Long", " : ");
int nilaiInteger = input.nextInt();
String nilaiString1 =  input.next();
String nilaiString2 =  input.next();
long nilaiLong = input.nextLong();
System.out.printf("%-25s %s %d\n","Integer", " :", nilaiInteger);
System.out.printf("%-25s %s %s\n","String 1", " :", nilaiString1);
System.out.printf("%-25s %s %s\n","String 2", " :", nilaiString2);
System.out.printf("%-25s %s %d\n","Long", " :", nilaiLong);

// input dan output
/*
Integer, String, dan Long  : 21 hello there 1234567 // input
Integer                    : 21
String 1                   : hello
String 2                   : there
Long                       : 1234567
*/

```
### Permasalahan Umum nextLine();
Ketika menggunakan `nextLine()`, biasanya muncul masalah yang biasa ditemui apabila menempatkan `nextLine()` setelah input bilangan seperti `nextInt();`. Hal tersebut disebabkan karena `nextLine()` membaca karakter newline yang tersisa dari bilangan sebelumnya. Masalah ini biasanya muncul ketika kita menggunakan multi-line input. Contoh dari permasalahan ini dapat dilihat sebagai berikut.

```java
Scanner input = new Scanner(System.in);
System.out.printf("%-10s %s", "Integer", " : ");
int nilaiInteger = input.nextInt();
System.out.printf("%-10s %s", "String", " : ");
String nilaiString =  input.nextLine();
System.out.printf("%-10s %s", "Long", " : ");
long nilaiLong = input.nextLong();
System.out.printf("%-10s %s %d\n","Integer", " :", nilaiInteger);
System.out.printf("%-10s %s %s\n","String", " :", nilaiString);
System.out.printf("%-10s %s %d\n","Long", " :", nilaiLong);

/*
// input
Integer     : 21
String      : Long        : 123456789 
// output
Integer     : 21
String      : 
Long        : 123456789
*/
```

Seperti yang dapat dilihat dalam kode di atas, input dari integer masih berjalan normal. Namun, ketika memasuki input string dan long, input dari string akan terlewati dan program langsung meminta input untuk long. Seperti yang sudah dijelaskan sebelumnya, hal ini disebabkan oleh `nextLine()` yang masih membaca sisa-sisa dari `nextInt()` sebelumnya. Oleh karena itu, untuk mengatasi masalah ini, diperlukan `nextLine()` baru untuk membaca sisa-sisa dari `nextInt()`.

Untuk mengatasi hal tersebut, kita perlu mengonsumsi karakter *newline* setelah kita meminta memanggil `nextInt()`. Hal yang sama juga berlaku pada method lain yang punya delimiter *newline* atau *whitespace*. Contoh kode yang benar bisa dilihat di bawah ini.

```java
Scanner input = new Scanner(System.in);
System.out.printf("%-10s %s", "Integer", " : ");
int nilaiInteger = input.nextInt();
System.out.printf("%-10s %s", "String", " : ");

// konsumsi sisa int sebelumnya
input.nextLine();

// input sudah bersih, sisa-sisa sudah dihabiskan oleh nextLine() sebelumnya.
String nilaiString =  input.nextLine();
System.out.printf("%-10s %s", "Long", " : ");
long nilaiLong = input.nextLong();
System.out.printf("%-10s %s %d\n","Integer", " :", nilaiInteger);
System.out.printf("%-10s %s %s\n","String", " :", nilaiString);
System.out.printf("%-10s %s %d\n","Long", " :", nilaiLong);

/*
// input
Integer     : 21
String      : hello world
Long        : 123456789
// output
Integer     : 21
String      : hello world
Long        : 123456789
*/
```

:::tip Intinya, ketika kita mau pakai `nextLine()`, dan ternyata sebelumnya terdapat input yang hanya mengambil data dengan delimiter whitespace, kita perlu menggunakan `nextLine()` terlebih dahulu untuk membersihkan input.
:::
