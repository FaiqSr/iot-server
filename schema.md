Berikut spesifikasi singkat untuk struktur data Firebase Realtime Database yang dipakai cron job:

- Tujuan: cron akan mencari nilai sensor untuk setiap `alatId` + `sensorType`, lalu bandingkan dengan `min_value`/`max_value` di DB.

- Path template (env): `FIREBASE_RTD_PATH_TEMPLATE`  
  - Placeholder: `{alatId}` dan `{sensorType}`  
  - Contoh default yang dipakai kode (dicoba berurutan):
    - `devices/{alatId}/sensors/{sensorType}`
    - `devices/{alatId}/{sensorType}`
    - `alat/{alatId}/sensors/{sensorType}`
    - `alat/{alatId}/{sensorType}`

- Nilai yang diterima di node:
  - Bisa berupa primitif number:
    - /devices/a1/sensors/PH = 7.5
  - Bisa berupa string berisi angka:
    - /devices/a1/sensors/PH = "7.5"
  - Bisa berupa object yang mengandung field numerik umum:
    - /devices/a1/sensors/PH = { "value": 7.5, "unit": "pH" }
    - /devices/a1/sensors/TEMP = { "current": 26.3 }
    - /devices/a1/sensors/OXYGEN = { "val": 8.2, "timestamp": 168... }
  - Jika node adalah object, cron mencoba urut: `value`, `val`, `current`, lalu iterasi properti untuk mencari properti bernilai number.

- Contoh RTDB snippets:
  - Simple number
    {
      "devices": {
        "a1": {
          "sensors": {
            "PH": 7.5
          }
        }
      }
    }
  - Object with value
    {
      "devices": {
        "a1": {
          "sensors": {
            "PH": { "value": 7.5, "unit": "pH" }
          }
        }
      }
    }
  - Alternate path
    {
      "devices": {
        "a1": {
          "PH": "7.5"
        }
      }
    }

- Topic fallback:
  - Jika tidak ada token per-user untuk `alatId`, cron akan mengirimkan ke topic `alat_{alatId}`.

- Tips integrasi:
  - Pastikan `sensorType` di RTDB cocok enum Prisma: `OXYGEN`, `PH`, `TURBIDITY`, `TEMPERATURE` (kode menggunakan exact match).
  - Jika struktur DB Anda berbeda, set `FIREBASE_RTD_PATH_TEMPLATE` sesuai pola Anda, mis.:
    - `myroot/things/{alatId}/readings/{sensorType}/latest`
  - Cron mencoba beberapa default path jadi format yang umum biasanya tercover.

Butuh saya tambahkan contoh `FIREBASE_RTD_PATH_TEMPLATE` yang cocok dengan struktur RTDB Anda? Jika ya, kirim contoh kecil struktur RTDB Anda (JSON) dan saya akan berikan template yang tepat.