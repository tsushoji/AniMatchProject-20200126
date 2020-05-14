$(document).ready(function(){

    // contact-inf.html
    //アクション:連絡先のアカウントブロック部分をクリック
    $('.main-center-content-account-block').click(function () {
        // 別タグで表示
        window.open('message.html');

    });

    // message.html
    //アクション:入力フォームの「メッセージ画像」をクリック
    $('.message-form-send-icon-send').click(function () {
        //入力フォームの内容取得
        //メッセージの入力値取得
        let inputMsg = $('.message-form-area').val();
        //添付したファイルオブジェクトを取得
        let inputFile = $('.message-form-send-file')[0].files[0];
        //上記で取得した値が空白の場合、メッセージを出力しない
        if(inputMsg){
            //追加するタグを「addEleMsg」にセット
            let addEleMsg = '<p class="chat-talk mytalk">';
            addEleMsg += '<span class="talk-icon">';
            addEleMsg += '<img src="../img/dmessage/sample_20200501.jpg" alt="相手アカウント画像"/>';
            addEleMsg += '</span>';
            addEleMsg += '<span class="talk-content">';
            addEleMsg += inputMsg;
            addEleMsg += '</span>';
            addEleMsg += '</p>';
            //タグを追加する
            $('#chat-frame').append(addEleMsg);
            //入力したメッセージを初期化
            $('.message-form-area').val('');

        }

        if(inputFile){
            //添付したファイル名を取得
            let inputFileName = inputFile.name;
            //追加するタグを「addEleFile」にセット
            let addEleFile = '<p class="chat-talk mytalk">';
            addEleFile += '<span class="talk-icon">';
            addEleFile += '<img src="../img/dmessage/sample_20200501.jpg" alt="相手アカウント画像"/>';
            addEleFile += '</span>';
            addEleFile += '<span class="talk-content" id="talk-content-file">';
            addEleFile += inputFileName;
            addEleFile += '</span>';
            addEleFile += '</p>';
            //タグを追加する
            $('#chat-frame').append(addEleFile);
            //添付済みファイルエリアを非表示
            $('.message-form-send-file-area').hide();

        }


    });

    //アクション:入力フォームの「ファイル画像」をクリック
    $('.message-form-send-icon-file').click(function () {
        // ファイルダイアログを表示する
        $('.message-form-send-file').click();
        return false;

    });

    //アクション:「ファイル添付」タグの属性が変更された場合
    $('.message-form-send-file').change(function () {
        // 選択されたファイル名を取得する
        if($(this)[0].files[0]){
            const fileName = $(this)[0].files[0].name;
            //上記で取得した値が空白の場合、メッセージを出力しない
            if(fileName){
                //添付済みファイルエリアを表示
                $('.message-form-send-file-area').show();
                //添付済みファイルエリアのファイル名に添付ファイル名をセット
                $('.message-form-send-file-area-name').text(fileName);

            }
        }else{
            //添付済みファイルエリアを非表示
            $('.message-form-send-file-area').hide();
        }
    });

    //アクション:入力フォームの「スタンプ画像」をクリック
    $('.message-form-send-icon-stamp').click(function(){
        // ダイアログの表示・非表示処理
        $('.message-form-send-stamp-area').show();
    });

    //アクション:スタンプダイアログの「スタンプ画像」をクリック
    $('.message-form-send-stamp-area-img').click(function(){
        //スタンプのURL取得
        let inputStmpUrl = $('.message-form-send-stamp-area-img').attr('src');
        //追加するタグを「addEleFile」にセット
        if(inputStmpUrl){
            let addEleStmp = '<p class="chat-talk mytalk">';
            addEleStmp += '<span class="talk-icon">';
            addEleStmp += '<img src="../img/dmessage/sample_20200501.jpg" alt="相手アカウント画像"/>';
            addEleStmp += '</span>';
            addEleStmp += '<span class="talk-content-stamp">';
            addEleStmp += '<img src="';
            addEleStmp += inputStmpUrl;
            addEleStmp += '" alt="スタンプ絵文字" class="message-form-send-icon-stamp-dialog-img">';
            addEleStmp += '</span>';
            addEleStmp += '</p>';
            //タグを追加する
            $('#chat-frame').append(addEleStmp);
        }
    });


});