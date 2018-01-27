$('.table-header>div').on('click',function(){
    let n = $(this).index()
    $('.table-header>div').removeClass('active')
    $('.table-header>div').eq(n).addClass('active')
    $('.table-body>div').removeClass('active')
    $('.table-body>div').eq(n).addClass('active')
})