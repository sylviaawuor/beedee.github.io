$(document).ready(function(){
    
     $('select').niceSelect();

  $('.bxslider').bxSlider({adaptiveHeight:true, mode:'horizontal', auto:true, speed: 500,  pause: 6000});


    $(".mobile-menu-icon.fa-bars").click(function(){
        $(".mobile-menu").slideToggle();
    });

    $(".mobile-menu-icon.fa-times").click(function(){
        $(".mobile-menu").slideToggle();
    });
    
    $(".register-wrapper").click(function(){
        $(".register-fields").slideToggle();
        $(".login-fields").slideUp();
        // $(".bidbond-quote-fields").slideUp();
    });
    
    $(".login-wrapper").click(function(){
        $(".login-fields").slideToggle();
        $(".register-fields").slideUp();
        // $(".bidbond-quote-fields").slideUp();
    });
    
    
    $(".header-drop-bid").click(function(){
        // $(".bidbond-quote-fields").slideToggle();
        $(".register-fields").slideUp();
        $(".login-fields").slideUp();
    });
    
   
   
   $(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});


setTimeout(function(){$('.subscribe').css('top','0');$('.subscribe').css('opacity','1')},1000)
$('p').click(function(){$('.subscribe').css('top','-550px');$('.subscribe').css('opacity','0')})
$('button').click(function(){$('h1,h2,button,input').css('opacity','0');setTimeout(function(){$('span').css('opacity','1')},2000);})


	});
	
	
	
	
	
	
	
	
	
	

	
