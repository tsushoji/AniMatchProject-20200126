$(document).ready(function(){
    //アクション:「上部へ戻る」をクリック
    $('.move-page-top').click(function() {
        // スクロールの速度
        const speed = 400; // ミリ秒
        // 移動先を数値で取得
        let position = $('html').offset().top;
        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'swing');
    });
});