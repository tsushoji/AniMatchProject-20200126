$(document).ready(function(){

    $('.is-show--search').click(function () {
        // 同じタグで表示
        location.href = 'search.html';
    });

    $('.is-show--dmessage').click(function () {
        // 同じタグで表示
        location.href = 'dmessage.html';
    });

    $('.move-page--top').click(function() {
        // スクロールの速度
        var speed = 400; // ミリ秒
        // 移動先を数値で取得
        var position = $('html').offset().top;
        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'swing');
    });


});