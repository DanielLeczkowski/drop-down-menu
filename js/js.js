$(document).ready(function(){
    let mainContainer = $('.main-container');
    let navMenu = $('.nav-menu');
    let subMenuContainer = $('.submenu');
    let arrowDown = $('.i_arrow');

        $('body').click(function(event){
        let x = event.clientX;
        let y = event.clientY;
        console.log(x, y);
        $('body').append('<div class="circle" style="left:' + x + 'px; top:' + y + 'px;"></div>');
        setTimeout(function(){
            $('div.circle').remove();
        },50);
    });


































































});