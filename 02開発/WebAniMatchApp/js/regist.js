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
});