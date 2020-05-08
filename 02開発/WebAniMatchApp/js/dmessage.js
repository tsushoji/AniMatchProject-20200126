$(document).ready(function(){

    //アクション:入力フォームの「メッセージ画像」をクリック
    $('.main-right-send-icon-send').click(function () {
        //入力フォームの内容取得
        //メッセージの入力値取得
        let inputMsg = $('.main-right-send-content').val();
        //添付したファイルオブジェクトを取得
        let inputFile = $('.main-right-send-form')[0].files[0];
        //上記で取得した値が空白の場合、メッセージを出力しない
        if(inputMsg){
            //追加するタグを「addEleMsg」にセット
            let addEleMsg = '<div class="row my-4">';
            addEleMsg += '<div class="col-1 offset-6 pr-0">';
            addEleMsg += '<img src="../img/dmessage/sample_20200501.jpg" alt="友達アカウント画像" class="rounded-circle main-right-content-area-img">';
            addEleMsg += '</div>';
            addEleMsg += '<div class="col-5 pl-0">';
            addEleMsg += '<p class="mb-0 mt-4 p-1 main-right-content-area-talk">';
            addEleMsg += inputMsg;
            addEleMsg += '</p>';
            addEleMsg += '</div>';
            addEleMsg += '</div>';
            //タグを追加する
            $('.main-right-content-area').append(addEleMsg);
            //入力したメッセージを初期化
            $('.main-right-send-content').val('');

        }

        if(inputFile){
            //添付したファイル名を取得
            let inputFileName = inputFile.name;
            //追加するタグを「addEleFile」にセット
            let addEleFile = '<div class="row my-4">';
            addEleFile += '<div class="col-1 offset-6 pr-0">';
            addEleFile += '<img src="../img/dmessage/sample_20200501.jpg" alt="友達アカウント画像" class="rounded-circle main-right-content-area-img">';
            addEleFile += '</div>';
            addEleFile += '<div class="col-5 pl-0">';
            addEleFile += '<p class="mb-0 mt-4 p-1 main-right-content-area-talk">';
            addEleFile += inputFileName;
            addEleFile += '</p>';
            addEleFile += '</div>';
            addEleFile += '</div>';
            //タグを追加する
            $('.main-right-content-area').append(addEleFile);
            //入力フォームに追加したタグを削除
            $('.main-right-form-send-file-area').remove();

        }


    });

    //アクション:入力フォームの「ファイル画像」をクリック
    $('.main-right-send-icon-file').click(function () {
        // ファイルダイアログを表示する
        $('.main-right-send-form').click();
        return false;

    });

    //アクション:「ファイル添付」タグの属性が変更された場合
    $('.main-right-send-form').change(function () {
        // 選択されたファイル名を取得する
        if($(this)[0].files[0]){
            const fileName = $(this)[0].files[0].name;
            //上記で取得した値が空白の場合、メッセージを出力しない
            if(fileName){
                //追加するタグを「addEle」にセット
                let addEleFile = '<div class="row main-right-form-send-file-area">';
                addEleFile += '<div class="col-3 px-0">';
                addEleFile += '<h5>添付ファイル名</h5>';
                addEleFile += '<p class="file-name">';
                addEleFile += fileName;
                addEleFile += '</p>';
                addEleFile += '</div>';
                addEleFile += '</div>';
                //タグを追加する
                $('.main-right-content-area').after(addEleFile);

            }
        }else{
            //追加するタグを削除
            $('.main-right-form-send-file-area').remove();
        }
    });

    // ダイアログの初期設定
    // $("#mydialog").dialog({
    //     autoOpen: false,  // 自動的に開かないように設定
    //     width: 500,       // 横幅のサイズを設定
    //     modal: true,      // モーダルダイアログにする
    //     buttons: { //ボタン
	// 		"確認": function() {
	// 			$(this).dialog("close");
	// 			},
	// 		"キャンセル": function() {
	// 			$(this).dialog("close");
	// 			}
	// 	}
    // });

    //アクション:入力フォームの「スタンプ画像」をクリック
    $(".main-right-send-icon-stamp").click(function(){
        // ダイアログの呼び出し処理
        $("#mydialog").show();
    });


});