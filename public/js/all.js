'use strict';

jQuery(document).ready(function ($) {
    "use strict";

    //Contact

    $('form.contactForm').submit(function () {
        var f = $(this).find('.form-group'),
            ferror = false,
            emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

        f.children('input').each(function () {
            // run all inputs

            var i = $(this); // current input
            var rule = i.attr('data-rule');

            if (rule !== undefined) {
                var ierror = false; // error flag for current input
                var pos = rule.indexOf(':', 0);
                var exp;
                if (pos >= 0) {
                    exp = rule.substr(pos + 1, rule.length);
                    rule = rule.substr(0, pos);
                } else {
                    rule = rule.substr(pos + 1, rule.length);
                }

                switch (rule) {
                    case 'required':
                        if (i.val() === '') {
                            ferror = ierror = true;
                        }
                        break;

                    case 'minlen':
                        if (i.val().length < parseInt(exp)) {
                            ferror = ierror = true;
                        }
                        break;

                    case 'email':
                        if (!emailExp.test(i.val())) {
                            ferror = ierror = true;
                        }
                        break;

                    case 'checked':
                        if (!i.attr('checked')) {
                            ferror = ierror = true;
                        }
                        break;

                    case 'regexp':
                        exp = new RegExp(exp);
                        if (!exp.test(i.val())) {
                            ferror = ierror = true;
                        }
                        break;
                }
                i.next('.validation').html(ierror ? i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input' : '').show('blind');
            }
        });
        f.children('textarea').each(function () {
            // run all inputs

            var i = $(this); // current input
            var rule = i.attr('data-rule');

            if (rule !== undefined) {
                var ierror = false; // error flag for current input
                var pos = rule.indexOf(':', 0);
                var exp;
                if (pos >= 0) {
                    exp = rule.substr(pos + 1, rule.length);
                    rule = rule.substr(0, pos);
                } else {
                    rule = rule.substr(pos + 1, rule.length);
                }

                switch (rule) {
                    case 'required':
                        if (i.val() === '') {
                            ferror = ierror = true;
                        }
                        break;

                    case 'minlen':
                        if (i.val().length < parseInt(exp)) {
                            ferror = ierror = true;
                        }
                        break;
                }
                i.next('.validation').html(ierror ? i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input' : '').show('blind');
            }
        });
        var str;
        if (ferror) return false;else str = $(this).serialize();
        // console.log('str: ' + str);		
        $.ajax({
            type: "POST",
            url: window.location.origin + "/contact",
            data: str,
            success: function success(msg) {
                //    alert(msg);
                // console.log(msg);
                if (msg == 'OK') {
                    // console.log('200')
                    $("#sendmessage").addClass("show");
                    $("#errormessage").removeClass("show");
                    $('.contactForm').find("input, textarea").val("");
                } else {
                    // console.log('else')
                    $("#sendmessage").removeClass("show");
                    $("#errormessage").addClass("show");
                    $('#errormessage').html(msg + ', 邮件发送不成功，请自行发送邮件！');
                }
            }
        });
        return false;
    });
});
'use strict';

window.onload = function () {
    $('#preloader').delay(300).fadeOut('slow', function () {
        $(this).remove();
    });
};

jQuery(document).ready(function ($) {

    // Hero rotating texts
    $("#hero .rotating").Morphext({
        animation: "flipInX",
        separator: ",",
        speed: 3000
    });

    // Initiate the wowjs
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function callback(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();

    // Initiate superfish on nav menu
    $('.nav-menu').superfish({
        animation: { opacity: 'show' },
        speed: 400
    });

    // Mobile Navigation
    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav' });
        $mobile_nav.find('> ul').attr({ 'class': '', 'id': '' });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function (e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa-chevron-up fa-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').toggle();
        });

        $(document).click(function (e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    // Stick the header at top on scroll
    $("#header").sticky({ topSpacing: 0, zIndex: '50' });

    // Smoth scroll on page hash links
    $('a[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {

                var top_space = 0;

                if ($('#header').length) {
                    top_space = $('#header').outerHeight();
                };

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                };

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                };

                return false;
            }
        }
    });

    // Back to top button
    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});

/*
    Custom JS
*/
$('#beginJourne').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});
$('#beginProduct').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 1000);
});
$('.devMode').on('click', function (e) {
    e.preventDefault;
    iziToast.show({
        theme: 'dark',
        title: 'Welcome',
        message: 'We are still developing on this!',
        position: 'topCenter',
        progressBarColor: 'rgb(0, 255, 184)'
    });
});

/*
    News function section
*/

$(".innerComponent").hover(function () {
    $(this).addClass("hoverEffect");
}, function () {
    $(this).removeClass("hoverEffect");
});

$('.innerComponent').on('click', function () {
    var selectDate = $(this).find('.date_blc span').text();
    var selectTitle = $(this).find('.main_title_blc h3').text();
    var imgUrl = $(this).find('img').attr('src');
    var selectContent1 = $(this).find('.main_content_detail1').text();
    var selectContent2 = $(this).find('.main_content_detail2').text();
    var selectContent3 = $(this).find('.main_content_detail3').text();
    var link = $(this).find('.news_linksBack').text();
    $('#new_date').text(selectDate);
    $('#new_title').text(selectTitle);
    $('#new_image').attr('src', imgUrl);
    $('#new_content_inner_1').text(selectContent1);
    $('#new_content_inner_2').text(selectContent2);
    $('#new_content_inner_3').text(selectContent3);
    // console.log($(this).find('.main_content_detail3').html());
    // $('#new_content_inner_3').html($(this).find('.main_content_detail3').html());
    $('#new_content_link').attr('href', link);
    $('#newModal').modal('show');
});

/*
    Cases page
*/

// $( ".case_blc" ).hover(
//     function() {
//       $( this ).find(".content_title_blc").addClass("hoverEffect2");
//     //   $( this ).find(".case_title").addClass("hoverEffect");
//     }, function() {
//       $( this ).find(".content_title_blc").removeClass("hoverEffect2");
//     //   $( this ).find(".case_title").removeClass("hoverEffect");
//     }
//   );
$(".case_blc").hover(function () {
    $(this).addClass("hoverEffect");
    $(this).addClass("case_blc_hover");
}, function () {
    $(this).removeClass("hoverEffect");
    $(this).removeClass("case_blc_hover");
});
$('.carousel').carousel({
    interval: 50000
});
$('.case_click').on('click', function (e) {
    e.preventDefault();
    var selectTitle = $(this).find('.case_title').text();
    var imgUrl = $(this).find('img').attr('src');
    var selectContent = '<h4>' + $(this).find('.content_title_blc span').text() + '</h4>' + $(this).find('.cases_desc').html() + $(this).find('.more_detail').html();
    // console.log(selectDate);
    console.log(selectTitle);
    console.log(imgUrl);
    console.log(selectContent);
    // $('#new_date').text(selectDate);
    $('#case_title').text(selectTitle);
    $('#case_image').attr('src', imgUrl);
    // $('#case_image').attr('data-lity-target', imgUrl);
    $('#case_content').html(selectContent);
    $('#caseModal').modal('show');
});

/*
    Job page
*/
$('.tlt').wodry({
    animation: 'rotateAll',
    styles: ['textRed', 'textBlue', 'textOrange']
});

function drawTable(id) {
    $('tbody').hide();
    if (id == 1) {
        // $('#m_tbody, #o_tbody').fadeOut('fast');
        $('#job_table, #t_tbody').slideDown();
        $('#table_job_cate').text($('#job_title1').text());
    } else if (id == 2) {
        // $('#o_tbody, #t_tbody').fadeOut();
        $('#job_table, #m_tbody').fadeIn();
        $('#table_job_cate').text($('#job_title2').text());
    } else if (id == 3) {
        // $('#m_tbody, #t_tbody').fadeOut();
        $('#job_table, #o_tbody').fadeIn();
        $('#table_job_cate').text($('#job_title3').text());
    }
}

$('.job_check').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#tabl_job_blc").offset().top - 100
    }, 1000);
});

$(document).ready(function () {
    // console.log('document ready');
    var id = window.location.pathname.slice(1);
    if (id != null) {
        if (id.slice(0, 9) == "solutions") {
            $("#solutionsPath").css('color', '#03c4eb');
        } else {
            $("#" + id + "Path").css('color', '#03c4eb');
        }
    }
});
"use strict";

function setCookie(name, value) {
    var expires = "";
    var days = 1;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

function getPathname() {
    return window.location.pathname.slice(1, -1);
}
//# sourceMappingURL=all.js.map
