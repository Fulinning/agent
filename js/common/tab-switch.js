$('.tab-header>div').on('click',function(){
    let n = $(this).index()
    $('.tab-header>div').removeClass('active')
    $('.tab-header>div').eq(n).addClass('active')
    $('.tab-body>div').removeClass('active')
    $('.tab-body>div').eq(n).addClass('active')
})