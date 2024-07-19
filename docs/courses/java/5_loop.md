---
tags:
  - courses
Creation: 2023-10-20
chapter: 5
---
## While
Merupakan perulangan yang terjadi apabila sebuah kondisi terpenuhi. Dalam kode di bawah ini, `x = 8` dan while memiliki kondisi `x < 10`. Variabel `x` tersebut tentunya memenuhi kondisi yang ada di dalam while, sehingga terjadi perulangan. 

Ketika `x = 8`, program akan memberi output `Hello` lalu menambah `x` dengan `1`, sehingga nilai `x` akan naik menjadi `9`. Ketika `x = 9`, program akan memberikan output `Hello` dan menaikkan `x` dengan `1` lagi. Saat ini, nilai `x = 10` dan tidak lagi memenuhi kondisi yang ada pada while, sehingga program akan berhenti.
```java
int x = 8
while (x < 10) {
	System.out.println("Hello");
	x++;
}
/*
Hello
Hello
/*
```

## Do While
Cara kerja pada do while mirip dengan while, hanya saja do while akan menjalankan instruksi terlebih dahulu, kemudian akan mengecek kondisi pada while. Jika kondisi memenuhi, maka akan menjalankan instruksi lagi, tetapi jika tidak memenuhi, maka program akan berhenti.

Hal tersebut akan menyebabkan instruksi pertama selalu dijalankan apapun kondisinya. Contohnya adalah dalam kode di bawah. nilai `i = 5` sebenarnya tidak memenuhi kondisi yang ada pada while, tetapi akan tetap di jalankan. Program kemudian baru akan berhenti setelah menjalankan instruksi pertama.
```java
int i = 5;
do {
	System.out.println("run");
	i++;
} while (i < 5);
/*
run
*/
```
## For
Berbeda dengan sebelumnya, for bisa dibilang memiliki sintak yang lebih singkat dan rapi. For memiliki bagian inisialisasi variabel, kemudian diikuti dengan kondisi, dan di akhiri dengan pengubah variabel. For dapat diisi dengan berbagai instruksi yang berada di antara kurung kurawal pada for.

Pada kode di bawah ini, for memiliki 3 bagian, yaitu `i = 0`, `i < 5`, dan `i++`. Maksudnya adalah, for akan mendeklarasikan variabel `i = 0`, kemudian akan memberikan kondisi `i < 5`. Apabila kondisi tersebut terpenuhi, maka program akan menjalankan instruksi, yaitu `System.out.println("Hello there");`. Setelah itu, program akan menaikkan nilai `i` melalui `i++`. Apabila `i` yang telah dinaikkan nilainya masih memenuhi kondisi for, maka perulangan akan terus berlanjut hingga kondisi tidak terpenuhi.
```java
for (int i = 0; i < 5; i++) {
	System.out.println("Hello there");
}
/*
Hello there
Hello there
Hello there
Hello there
Hello there
*/
```
## Break
Break dapat berfungsi untuk memberhentikan loop / perulangan yang sedang terjadi. Pada kode di bawah ini, `break` di letakkan pada kondisi `if (i = 5)` yang mana perulangan tersebut akan berhenti ketika `i = 5`.
```java
for (int i = 0; i < 100; i++) {
	if (i = 5) {
		break;
	}
	System.out.println("Yes!");
}
/*
Yes!
Yes!
Yes!
Yes!
Yes!
*/
```
## Continue
Berbeda dengan break, continue menghentikan perulangan dengan nilai `i` tertentu yang sedang dijalankan saat itu, tetapi tidak menghentikan seluruh loop / perulangan. Pada kode di bawah ini, `continue` diletakkan pada `if (i % 2 == 0)`, yang mana `continue` akan melewati instruksi setelahnya dan kembali lagi melakukan perulangan dengan nilai `i` yang sudah dinaikkan.
```java
for (int i = 0; i < 10; i++) {
	if (i % 2 == 0) {
		continue;
	}
	System.out.print(i + " ");
}
/*
1 3 5 7 9
*/
```