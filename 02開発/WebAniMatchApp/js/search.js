$(document).ready(function(){
    //アクション:条件クリアボタン押下
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
});