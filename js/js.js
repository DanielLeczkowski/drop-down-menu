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

    navMenu.click(function(){
    
        let $this = $(this);
        
        $this.toggleClass('open');
        
        if($this.hasClass('open')){
                mainContainer.append(`
                    <div class="triangle"></div>
                    <div class="submenu">
                            <div class="submenu-items">
                                <i class="i_home"></i>
                                <a class="dropdown">Home</a>
                            </div>
                            <div class="submenu-items">
                                <i class="i_mail"></i>
                                <a class="dropdown">Messages</a>
                            </div>
                            <div class="submenu-items">
                                <i class="i_cog"></i>
                                <a class="dropdown">Settings</a>
                            </div>
                    </div>
                `);
                    navMenu.css('background-color', '#3ea6fd');
                    $('.nav-menu > a').css('color', 'rgba(255, 255, 255, 0.9)');
                    $('.nav-menu > i').css('color', 'rgba(255, 255, 255, 0.9)');
                    arrowDown.css('transform', 'rotate(-180deg)');
                    
        } else {
                    $this.removeClass('open');
                    navMenu.css('background-color', 'rgba(255, 255, 255, 0.9)');
                    $('.nav-menu > a').css('color', '#7d7988');
                    $('.nav-menu > i').css('color', '#7d7988');
                    $('div.submenu').remove();
                    $('div.triangle').remove();
                    arrowDown.css('transform', 'rotate(0deg)');
        }
    });


































































});