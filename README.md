## bookselft-api
cara menjalankan
```bash
git clone https://github.com/rafia9005/bookselft-api.git

cd {name folder}

npm install

npm run start
```



## penambahan data buku
buka postman dengan method post ke url: http://localhost:9000/books

```json
[
    {
        "title": "KENANGAN INDAH",
        "author": "ALI SYAIPUDIN",
        "year": 2013,
        "publisher": "DICODING INDONESIA",
        "penerbit": "PT SINGERI NUSANTARA"
    },
    {
        "title": "INDAHNYA PERSAHABATAN",
        "author": "AHMAD RAFI",
        "year": 2020,
        "publisher": "DICODING INDONESIA",
        "penerbit": "DICODING INDONESIA"
    },
    {
        "title": "AZAB KUBUR",
        "author": "INDOSIAR",
        "year": 2023,
        "publisher": "DICODING INDONESIA",
        "penerbit": "PT AZAB KUBUR"
    }
]
```
maka buku akan di tampilkan di halaman root atau http://localhost:9000


## detail buku

untuk melihat detail buku bisa mengunakan 
http://localhost:9000/books/{id}
contoh : http://localhost:9000/books/bb1e1d9c-e1cf-4a42-b925-e0781d9176ac

## edit data buku 
buka postman dengan method PUT lalu masuk ke http://localhost:9000/books/{idBooks} pencet send

## delate buku
buka postman lalu ubah method nya menjadi delate, lalu masukan http://localhost:9000/books/{idBooks} maka secara otomatis data akan di hapus
