
$(document).ready(function(){
    $('div').css({'color': 'red'});
    $('.div').css({'font-size': '34px'});
    $('#div').css({'color': 'blue'});

    let dataAttr = $('h2').data('number');

    $('input[name="message"]').css({'border': '3px solid black'});

    $('ul li:nth-child(3)').css({'font-size': '26px'});

    $('div:has("span")').css({'font-size': '26px'});

    let attr = $('input').attr('type');
    console.log(attr);

    $('#btn').click(function(){
        console.log('you click me');
    })


    $('#btn').on('mouseenter', function(){
        console.log('your mouse work');
    })


    $('#btn').click(function(){
        $('.div').toggleClass('active');/*show() hide() toggle отдельно*/
    })

    $('input[name="message"]').on('input', function(){
        $('.result').html($(this).val());
    })

    $('#form').on('submit', function(){
        alert('we send form');
    })

    $('#button').on('click', function(){
        $('.divis').animate({'width': '500px'}, 500)
    })

})


