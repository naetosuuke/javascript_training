'use script';

const lang = document.querySelector('html').lang; // querySelector ...cssセレクタの値を取得する

switch(lang) {
    case 'ja':
        document.querySelector('option[value="index.html"]').selected = true; // optionの特定の値のselectedプロパティを上書きしている。
        break;
    case 'en':
        document.querySelector('option[value="index-en.html"]').selected = true;
        break;
    case 'zh':
        document.querySelector('option[value="index-zh.html"]').selected = true;
        break;
}

document.getElementById('form').select.onchange = function() { // .onchange 選択肢が変わると発火
    location.href = document.getElementById('form').select.value;  // location.href 表示ページのURL情報 書き換えると移動する
}
