$(document).ready(function(){
    //初期表示時、フォームを非表示
    $('.form-common,.form-owner,.form-trimmer,.form-trimmer-business-hours,.footer-top-content').hide();

    //アクション:「登録区分」の値が変更される
    $('#regist-type').change(function() {
        //飼い主区分
        const ownerType = '1';
        //トリマー区分
        const trimmerType = '2';

        //登録区分の値を取得
        let registType = $(this).val();

        //登録区分の値に応じて、formタグを表示・非表示にする
        if(registType === ownerType){
            //飼い主用フォームを表示
            $('.form-common,.form-owner,.footer-top-content').show();
            $('.form-trimmer,.form-trimmer-business-hours').hide();
        }else if(registType === trimmerType){
            //トリマー用フォームを表示
            $('.form-common,.form-trimmer,.footer-top-content').show();
            $('.form-owner,.form-trimmer-business-hours').hide();
        }else{
            //フォームを非表示
            $('.form-common,.form-owner,.form-trimmer,.form-trimmer-business-hours,.footer-top-content').hide();
        }
      });

      //アクション:「郵便番号」を入力する
      $("#postal-code").change(function(){
        const successStatus = 200
        let paramPostalCode = $(this).val();
        let urlZipCloud = 'https://zip-cloud.appspot.com/api/search?zipcode=';

        $.ajax({
            type: 'GET',
            cache: false,
            url: urlZipCloud + paramPostalCode,
            dataType: 'jsonp',
            success: function (res) {
                //結果によって処理を振り分ける
                if (res.status === successStatus) {
                    //処理が成功したとき
                    //「都道府県」を表示
                    let prefecturesLen = $('#prefectures option').length;

                    let prefecturesVal = '0';
                    for(var i=0; i<prefecturesLen; i++){
                        if($('#prefectures option').eq(i).text() === res.results[0].address1){
                            prefecturesVal = i;
                            break;
                        }
                    }
                    $('#prefectures').val(prefecturesVal);

                    //「市区町村」を表示
                    $('#cities').val(res.results[0].address2);

                } else {
                    //エラーだった時
                    //エラー内容を表示
                    console.log(res.message);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest);
            }
        });

      });


});