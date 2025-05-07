var $currentForm;
$(document).ready(function() {
	//if(window.location.hostname == "sallobhai12dm.sitemantic.com"){
		
		$('[name="captcha_code"]').attr( "disabled", "disabled" );;
		$('head').append('<link rel="stylesheet" href="//static.sitemantic.com/webbuilder/css/website_global.css" type="text/css">');
		
		$('head').append('<script src="https://www.google.com/recaptcha/api.js" async defer></script>');
		$('form').append('<div class="g-recaptcha" data-sitekey="6LdY19cUAAAAAAMVNC87SCqHgryC4fCmwmU8NC1p" data-size = "invisible" data-callback = "onSubmit"> </div>');
		$('form').append('<input type="hidden" name="page_url" value="' + window.location.href + '">');
		
		$('form').submit(function (event) {
			$currentForm = $(this);	
			event.preventDefault();
			grecaptcha.execute();
		  });
		
		//console.log('Yes');
		//console.log(window.location.hostname);
	//} else {
	//	console.log('No');
	//	console.log(window.location.hostname);
	//}
});
//if(window.location.hostname == "sallobhai12dm.sitemantic.com"){
var onSubmit = function(response) {
	$("#g-recaptcha-response-1").val(response);
	$currentForm.unbind('submit').submit();
};
//}

$(function () {
    $(window).on("scroll", function() {
        var minScrollValue = $("header").css("height");
        if(minScrollValue){
            minScrollValue.replace("px","");
            minScrollValue = parseInt(minScrollValue);
        } else {
            minScrollValue = 50;
        }

        if ($("header").attr("fixed") == "true" && $(window).scrollTop() > minScrollValue + 30) {
            $("header").addClass("fixedHeader");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $("header").removeClass("fixedHeader");
        }
    });
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $("header").addClass("sticky");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $("header").removeClass("sticky");
        }
    });
    
    if ($("footer").hasClass("dm-sticky-footer")) {
        var height = $("footer").outerHeight();
        $("body").css("padding-bottom", height + "px");
    } else {
        $("body").css("padding-bottom", "0px");
    }

    // Tab Component
    $(document).on('click', '.nav-tabs li a', function(e) {
        $(this).tab('show');
        e.preventDefault();
    });
});

function refreshCaptcha()
{
      var img = document.images['captchaimg'];
      img.src = img.src.substring(0,img.src.lastIndexOf("?"))+"?rand="+Math.random()*1000;
}
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function setHeaderBgColor(setting) {
    if(setting && !setting.hide) {
        let pageCssData = ' background-color:#' + setting.bgColor + ';';
        pageCssData += 'opacity:' + setting.bgOpacity + ';';
        pageCssData += 'content:""; position:absolute; top:0%; display:block; left:0%; right:0%; bottom:0%; width:100%; height:100%;';

        if ($('#sectionStyle-header').html() == undefined || $('#sectionStyle-header').html() == "") {
            $("header").before("<style id='sectionStyle-header'> header:before { " + pageCssData + " } header{position:relative} .fixedHeader:before{display:none} .fixedHeader{background-color:white}</style> </style>");
        }
        else {
            $('#sectionStyle-header').html("header:before { " + pageCssData + " } header{position:relative} .fixedHeader:before{display:none} .fixedHeader{background-color:white}</style>");
        }
    }    
}

$(document).ready(function(){
  var errorMsg = getParameterByName('error');
  if( errorMsg !=""){
      $('#invalid_captcha').html(errorMsg).show();
  }

  var errorMsg = getParameterByName('success');
  console.log( errorMsg );
  console.log( 'console.log( errorMsg );' );
  if( errorMsg !="" && errorMsg !==null){
      $('#email_sent').show();
  }
});

function setHeaderText(imageBg){
    var text = imageBg.text;
    var headerStyle = imageBg.headerStyle ? imageBg.headerStyle : "";
    $(".header-image-text").addClass(headerStyle).html(text);
    $(".mce-edit-focus").removeClass("mce-edit-focus");
    $("[contenteditable=true]").attr("contenteditable", false);
}

$(window).load(function(){
    var default_fonts = [
        'Andale Mono',
        'Arial',
        'Arial Black',
        'Book Antiqua',
        'Comic Sans MS',
        'Courier New',
        'Georgia',
        'Helvetica',
        'Impact',
        'Symbol',
        'Tahoma',
        'Terminal',
        'Times New Roman',
        'Trebuchet MS',
        'Verdana',
        'Webdings',
        'Wingdings',
        'FontAwesome'
    ]

    function loadSiteFonts() {

        var page_styles = styleInPage('fontFamily');
        default_fonts = default_fonts.map(item => item.toLowerCase());
        page_styles = page_styles.map((item) => {return item.split(",")[0].replace(/"/g, "")});
        page_styles = page_styles.filter(item => default_fonts.indexOf(item.toLowerCase()) == -1);
        // remove duplicates
        page_styles = page_styles.filter((item, pos, self) => self.indexOf(item) == pos);
        for (var i = 0; i < page_styles.length; i++) {
            var fonts_array = [];
            fonts_array.push(page_styles[i]);
            WebFont.load({
                google: {
                    families: fonts_array
                }
            });
        }
    }
    function scrollToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
// styleInPage code copied from stackoverflow
    function styleInPage(css, verbose) {
        if (typeof getComputedStyle == "undefined")
            getComputedStyle = function (elem) {
                return elem.currentStyle;
            }
        var who, hoo, values = [], val,
            nodes = document.body.getElementsByTagName('*'),
            L= nodes.length;
            for(var i= 0; i<L; i++){
                who= nodes[i];
                if(who.style){
                    hoo= '#'+(who.id || who.nodeName+'('+i+')');
                    val= who.style.fontFamily || getComputedStyle(who, '')[css];
                    if(val){
                        if(verbose) values.push([hoo, val]);
                        else if(values.indexOf(val)== -1) values.push(val);
                    // before IE9 you need to shim Array.indexOf (shown below)
                }
            }
        }
        return values;
    }
    loadSiteFonts();
});

if (typeof imageBg !== 'undefined') {
	
	if(imageBg && !imageBg.hide){
		let parallaxEffect = imageBg.parallaxEffect?"fixed no-repeat center center":"";
		if( imageBg.imageUrl != "" ) {
			$("header").css("background", "url('" + imageBg.imageUrl + "') " + parallaxEffect);
			$("header").css("background-size", "cover");
		}
		$("header").css("height", imageBg.imageHeight);
		setHeaderText(imageBg);                            
	}
	else{
		$("header").css("background-image", "none");
		$("header").css("height", "inherit");
		this.setHeaderText({"text": ""}); 
	}
	setHeaderBgColor(imageBg);
}

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / 200; // Adjust the speed here

            if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
});