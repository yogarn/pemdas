---
tags:
  - courses
  - computer-science
Creation: 2023-12-13
chapter: 4
---
# Percabangan
Dalam sebuah algoritma, sering kali beberapa instruksi harus dilaksanakan bila suatu persyaratan dipenuhi (bernilai benar) dan sebaliknya.

Dalam struktur percabangan bersyarat, suatu instruksi atau sekelompok instruksi dapat dilewati, sementara instruksi lain dijalankan. Pernyataan percabangan bersyarat terdiri dari:
- **If**
- **If Else**
- **Switch Case**
## If dan If-else
```java
if (ekspresi boolean) statement;
if (ekspresi boolean) {
	statement1;
	statement2;
}
```
Jika **ekspresi** boolean bernilai **true**, maka **statement** atau **blok** statement akan **dilaksanakan**.
```java
if (ekspresi boolean) statement1;
else statement2;

if (ekspresi boolean) {
	statement1;
} else {
	statement2;
}
```
Jika ekspresi boolean true, maka `statement1` atau blok `statement1` yang dilaksanakan. Jika bernilai false, maka `statement2` atau blok `statement2` yang dilaksanakan.
## Nested If-else
Konstruksi if-else dapat digunakan secara bertingkat.
```java
if (ekspresi boolean1) statement1; 
else if (ekspresi boolean2) statement2; 
else if (ekspresi boolean3) statement3;
.....
..... 
else if (ekspresi booleanN) statementN;
```
## Switch-case
Pernyataan switch-case dapat dipergunakan sebagai pengganti pernyataan if-else jika pernyataan if-else bertingkat terlalu banyak, sehingga menjadi sulit dibaca.
```java
switch (ekspresi integer) {
	case constant1: statements1; break; 
	case constant2: statements2; break;
	.....
	.....
	[ default: statements; ]
}
```
Pernyataan switch mengevaluasi ekspresi, kemudian melihat isi case constant. Jika nilai ekspresi ada di dalam constant list, maka pernyataan dieksekusi. Jika tidak ada yang cocok, pernyataan default yang dieksekusi.

hanya byte, short, chart, dan int dengan [[Struktur, Tipe Data, Konstanta, dan Variable Java#Tipe Data|tipe data primitif]] yang dapat digunakan untuk switch.
## Implementasi
Dalam implementasinya, penggunaan if statement bisa dibilang lebih versatile jika dibandingkan dengan penggunaan switch case. Switch case hanya dapat menerima nilai konstan yang bersifat statis dan tetap, sementara if statement bisa menerima nilai berupa logika yang menggunakan berbagai macam [[Proses Sederhana#Relasional|operator relasional]].