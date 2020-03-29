$(document).ready(function(){
    //アクション:「絞り込みクリア」ボタン押下
    $('#main-search-left-header-btn-clear').click(function() {
        $(this).parents('.container-fluid')
            .find('form select')
            .val('0')
        ;

        $(this).parents('.container-fluid')
            .find('form input')
            .not(':button, :submit, :reset, :hidden')
            .val('')
        ;

        $(this).parents('.container-fluid')
            .find('form ul li')
            .removeClass('active')
        ;
    });

    //アクション:「都道府県」を入力する
    $("#prefectures").change(function(){
        const successStatus = 200
        let paramPrefectures = $(this).val();
        let urlResasCities = 'https://opendata.resas-portal.go.jp/api/v1/cities?prefCode=';

        $.ajax({
            type: 'GET',
            cache: false,
            url: urlResasCities + paramPrefectures,
            dataType: 'jsonp',
            success: function (res) {
                //結果によって処理を振り分ける
                if (res.status === successStatus) {
                    //処理が成功したとき
                    //「市区町村」を表示
                    console.log(res.result);

                } else {
                    //エラーだった時
                    //エラー内容を表示
                    console.log(res.message);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });

      });


});