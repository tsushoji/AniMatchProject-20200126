$(document).ready(function(){

    //アクション:「送信ボタン」をクリック
    $('.main-left-send-icon-send').click(function () {
        //入力フォームの内容取得
        let input = $('.main-left-send-content').val();
        //上記で取得した値が空白の場合、メッセージを出力しない
        if(input){
            //追加するタグを「addEle」にセット
            let addEle = '<div class="row my-4">';
            addEle += '<div class="col-1 offset-6 pr-0">';
            addEle += '<img src="../img/dmessage/sample_20200501.jpg" alt="友達アカウント画像" class="rounded-circle main-left-content-area-img">';
            addEle += '</div>';
            addEle += '<div class="col-5 pl-0">';
            addEle += '<p class="mb-0 mt-4 p-1 main-right-content-area-talk">';
            addEle += input;
            addEle += '</p>';
            addEle += '</div>';
            addEle += '</div>';
            //タグを追加する
            $('.main-right-content-area').append(addEle);
            //縦スクロールバーを制御

        }
    });


});