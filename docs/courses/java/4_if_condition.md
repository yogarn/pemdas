---
tags:
  - courses
  - computer-science
Creation: 2023-12-13
chapter: 4
---

# Percabangan

Dalam sebuah algoritma, umumnya terdapat beberapa instruksi yang harus dijalankan apabila suatu syarat dipenuhi (bernilai benar) dan sebaliknya.

Dalam struktur percabangan bersyarat, suatu instruksi atau sekelompok instruksi dapat dilewati, sementara instruksi lain dijalankan. Pernyataan percabangan bersyarat terdiri dari:

- **If**
- **Else If**
- **Else**
- **Switch Case**

## If dan Else

Jika **ekspresi** boolean bernilai **true**, maka **statement** atau **blok** statement akan **dijalankan**.

```java
if (ekspresi boolean) statement;
if (ekspresi boolean) {
	statement1;
	statement2;
}
```

Jika ekspresi boolean true, maka `statement1` atau blok `statement1` yang dilaksanakan. Jika bernilai false, maka `statement2` atau blok `statement2` yang dilaksanakan.

```java
if (ekspresi boolean) statement1;
else statement2;

if (ekspresi boolean) {
	statement1;
} else {
	statement2;
}
```

Kalau masih bingung, coba perhatikan contoh implementasi if-else berikut.
```java
int a = 3;
if (a % 2 == 0) {
	System.out.println("Genap");
} else {
	System.out.println("Ganjil");
}
```
Kode di atas akan menampilkan output `Genap`, hal tersebut karena pada percabangan pertama, `a % 2 == 0` bernilai `true`, sehingga blok statement di dalamnya akan dijalankan.

:::danger Else hanya bisa dipakai setelah if, tidak bisa berdiri sendiri.
:::

## If dan Else If

Penggunaan else if juga dapat digunakan untuk menguji berbagai kondisi. Pengecekan akan dilakukan dari atas ke bawah, jika ekspresi boolean pada if pertama bernilai false, maka akan dilanjutkan ke else if kedua, dan seterusnya.

```java
if (ekspresi boolean1) statement1;
else if (ekspresi boolean2) statement2;
else if (ekspresi boolean3) statement3;
.....
.....
else statementN;
```

:::danger Else if hanya bisa dipakai setelah if, tidak bisa berdiri sendiri.
:::

## Nested If Else

Penggunaan if-else dapat disusun secara bertingkat, atau disebut juga dengan **nested if-else**. Dalam nested if-else, if-else diletakkan di dalam if-else lainnya.

```java
if (ekspresi boolean1) {
	if (ekspresi boolean2) {
		statement1;
	} else {
		statement2;
	}
} else {
	statement3;
}
```

Dalam kode di atas, terdapat dua if-else yang di-nest. Jika `ekspresi boolean1` bernilai true, maka akan dilakukan pengecekan `ekspresi boolean2`. Jika bernilai true, maka `statement1` yang dijalankan, jika false, maka `statement2` yang dijalankan. Jika `ekspresi boolean1` bernilai false, maka `statement3` yang dijalankan.

:::danger **Sebisa mungkin hindari nested if-else**, karena akan membuat kode menjadi sulit dibaca.
:::

:::tip Ikuti *The Happy Path*, yaitu gunakan if hanya pada kondisi yang benar-benar diperlukan.
:::

## Switch-case

Pernyataan switch-case dapat dipergunakan sebagai **pengganti pernyataan if-else** jika nested if-else terlalu banyak, sehingga menjadi sulit dibaca. Namun, switch-case tidak dapat menerima ekspresi berupa logika layaknya pada if-else, melainkan **menggunakan nilai constant**.

```java
switch (ekspresi integer) {
	case constant1: statements1; break;
	case constant2: statements2; break;
	.....
	.....
	[ default: statements; ]
}
```

Pernyataan switch mengevaluasi ekspresi, kemudian melihat isi case constant. Jika nilai ekspresi ada di dalam constant list, maka pernyataan dieksekusi. **Jika tidak ada yang cocok, pernyataan default yang dieksekusi**.

hanya **byte, short, chart, dan int dengan tipe data primitif** yang dapat digunakan untuk switch.

```java
int a = 4;
switch (a) {
	case 1:
		System.out.println("Satu");
		break;
	case 2:
		System.out.println("Dua");
		break;
	case 3:
		System.out.println("Tiga");
		break;
	default:
		System.out.println("Bukan 1, 2, atau 3");
		break;
}
```

Dalam kode di atas, terdapat variabel `a` yang bernilai 4. Karena tidak ada case yang bernilai 4, maka blok default yang akan dijalankan.

:::danger **Jangan lupa pakai break** di setiap case, jika tidak maka akan terjadi _fall-through_, yaitu eksekusi akan dilanjutkan ke case selanjutnya tanpa memperhatikan kondisi.
:::

## Implementasi

Dalam implementasinya, penggunaan if statement bisa dibilang lebih _versatile_ jika dibandingkan dengan penggunaan switch case. **Switch case hanya dapat menerima nilai konstan** yang bersifat statis dan tetap, sementara **if statement bisa menerima nilai berupa logika** yang menggunakan berbagai macam operasi.