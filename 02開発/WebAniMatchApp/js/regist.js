$(document).ready(function(){

    //アクション:「登録区分」の値が変更される
    $('#registtype').change(function() {
        //登録区分の値を取得
        var val = $(this).val();
        //登録区分の値に応じて、formタグを表示・非表示にする
        if(val == '1'){
            //飼い主用フォームを表示
            $('#owner-form').removeClass('hide');
            $('#trimmer-form').addClass('hide');
            $('.footer-top-content').removeClass('hide');
        }else if(val == '2'){
            //トリマー用フォームを表示
            $('#owner-form').addClass('hide');
            $('#trimmer-form').removeClass('hide');
            $('.footer-top-content').removeClass('hide');
        }else{
            //フォームを非表示
            $('#owner-form').addClass('hide');
            $('#trimmer-form').addClass('hide');
            $('.footer-top-content').addClass('hide');
        }   
      });


});