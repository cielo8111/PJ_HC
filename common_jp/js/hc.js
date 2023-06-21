
/* share script */

function shareFbook(url,text) { 
	window.open("https://www.facebook.com/sharer/sharer.php?u=" + url +"&p[title]=" + text, '_blank' ,"width=500, height=600, toolbar=no, menubar=no, scrollbars=no, resizable=yes"); 
	
};

function shareTwith(url,text) { 
	window.open('http://twitter.com/share?url=' + url + text , '_blank' ,"width=500, height=600, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
};

function openMenu(){
	$('body').toggleClass('__menuON');
}

function closeLayer(){
	$('body').removeClass('__layerON');
	$('.layer').hide();
}
function openLayer(target){

	closeLayer();
	$('body').addClass('__layerON');
	$('.' + target).show();


}


document.querySelector("#copy_btn").addEventListener("click", function(){
  var tempElem = document.querySelector('#url_field');

  tempElem.select();
  document.execCommand("copy");
  openLayer('alert_popup');
 $('.__copy_result').show();


});


!(function () { // Browser check script
	var isChrome = !!window.chrome && !!window.chrome.webstore,
	isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
	isFirefox = typeof InstallTrigger !== 'undefined',
	isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)),
	isIE = /*@cc_on!@*/false || !!document.documentMode,
	isEdge = !isIE && !!window.StyleMedia,
	isBlink = (isChrome || isOpera) && !!window.CSS;

	if (isChrome) {
		document.querySelector('html').classList.add('chrome');
	}else if (isOpera) {
		document.querySelector('opera').classList.add('opera');
	}else if (isIE) {
		document.querySelector('html').classList.add('ie');
	}else if (isEdge) {
		document.querySelector('html').classList.add('edge');
	}else if (isFirefox) {
		document.querySelector('html').classList.add('firefox');
	}else if (isSafari) {
		document.querySelector('html').classList.add('safari');
	}else if (isBlink) {
		document.querySelector('html').classList.add('blink');
	}

	
	var winW = $(window).width();
	if(winW < 901){// Slick api resizing script
		$('.menu_area a').on('click',function()
		{
			openMenu();
			console.log('run')
		});
	};
	

})();
$(document).ready(function() {
	$('#fullpage').fullpage({
		slidesNavigation: true,
		anchors: ['intro', 'story','content','footer'],
		
		responsiveWidth: 900,
		responsiveHeight: 760
	});
	
	$('#slick.__board').slick({ // Slick api gallery type-one script
		arrows: true,
		centerPadding: "0px",
		dots: true,
		slidesToShow: 1,
		infinite: false
	});
	
	$('#slick .slick-prev').html('<div class="btn __arrow"><i></i><i></i></div>')
	$('#slick .slick-next').html('<div class="btn __arrow"><i></i><i></i></div>')

	$('.story #slick.__board .slick-dots li:nth-child(6) button').click();
	

});

$(window).resize(function(){ 
	var winW = $(window).width();

	if(winW == 1200 && winW == 900){// Slick api resizing script
	   $('#slick')[0].slick.refresh();
	};

});


$(window).scroll(function(){ 
   var st = $(this).scrollTop();
	var winH = $(window).height() * 2.22;
	console.log(st);
	console.log(winH);

   if (winH < st){
        $('body').addClass('nowFooter'); 
   } else {
   		$('body').removeClass('nowFooter'); 
   }
});
	



$('.stopYoutube').click(function(){
      $('.yvideo').each(function(){
        var el_src = $(this).attr("src");
        $(this).attr("src",el_src);
      });
    });