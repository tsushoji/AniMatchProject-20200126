$(document).ready(function(){

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
            $('.form-common').removeClass('hide');
            $('.form-owner').removeClass('hide');
            $('.form-trimmer').addClass('hide');
            $('.footer-top-content').removeClass('hide');
        }else if(registType === trimmerType){
            //トリマー用フォームを表示
            $('.form-common').removeClass('hide');
            $('.form-owner').addClass('hide');
            $('.form-trimmer').removeClass('hide');
            $('.footer-top-content').removeClass('hide');
        }else{
            //フォームを非表示
            $('.form-common').addClass('hide');
            $('.form-owner').addClass('hide');
            $('.form-trimmer').addClass('hide');
            $('.footer-top-content').addClass('hide');
        }
      });

});