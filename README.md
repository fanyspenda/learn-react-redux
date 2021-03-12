# Belajar React-Redux (_hooks_)

## Kenapa belajar ini?

1. dibutuhkan di beberapa _IT Company_.
2. improve skill untuk lebih memahami React-Redux.

## my own FAQ:

### 1. Cara implementasi react-redux

1. install redux dan react-redux dengan perintah:

    `npm install redux react-redux`

2. buat `action` terlebih dahulu yang berisikan data statis bertipe string
3. buat `actionCreator` yang berisi fungsi yang mereturn objek berisi type dan payload jika perlu.
4. buat reducer yang berisi method-method yang akan dilakukan ketika ada perubahan state
5. buat store
6. bungkus seluruh komponen dengan `<Provider>` milik `react-redux`

### 2. Cara atur multiple data dengan redux

1. kombinasikan setiap reducer dari masing-masing data dengan `combineReducers` milik library `Redux`
2. Buat store dengan `createStore` seperti biasa
