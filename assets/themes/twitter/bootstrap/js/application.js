// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++
window.addEventListener('DOMContentLoaded', function() {
    $("body").queryLoader2({
        barColor: "#6e6d73",
        backgroundColor: "#fff1b0",
        percentage: true,
        barHeight: 1,
        completeAnimation: "grow",
        minimumTime: 100
    });
});

!function ($) {

  $(function(){

    //query Loader
    $("body").queryLoader2({
        barColor: "#6e6d73",
        backgroundColor: "#663399",
        percentage: true,
        barHeight: 1,
        completeAnimation: "fade",
        minimumTime: 100
    });

    var $window = $(window)

    // Disable certain links in docs
    $('section [href^=#]').click(function (e) {
      e.preventDefault()
    })

    // side bar
    setTimeout(function () {
      $('.bs-docs-sidenav').affix({
        offset: {
          top: function () { return $window.width() <= 980 ? 290 : 210 }
        , bottom: 270
        }
      })
    }, 100)

    // make code pretty
    window.prettyPrint && prettyPrint()

    // add-ons
    $('.add-on :checkbox').on('click', function () {
      var $this = $(this)
        , method = $this.attr('checked') ? 'addClass' : 'removeClass'
      $(this).parents('.add-on')[method]('active')
    })

    // add tipsies to grid for scaffolding
    if ($('#gridSystem').length) {
      $('#gridSystem').tooltip({
          selector: '.show-grid > [class*="span"]'
        , title: function () { return $(this).width() + 'px' }
      })
    }

    // tooltip demo
    $('.tooltip-demo').tooltip({
      selector: "a[data-toggle=tooltip]"
    })

    $('.tooltip-test').tooltip()
    $('.popover-test').popover()

    // popover demo
    $("a[data-toggle=popover],img[data-toggle=popover]")
      .popover()
      .click(function(e) {
        e.preventDefault()
      })

    // button state demo
    $('#fat-btn')
      .click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
          btn.button('reset')
        }, 3000)
      })

    // carousel demo
    $('#myCarousel').carousel()

    //for to top

    $('#bakToTop').click(function() {
            $("html, body").animate({ scrollTop: 0 }, 120);
    });

    $backToTopFun = function() {
        var st = $(document).scrollTop(), winh = $(window).height();
        (st > winh*0.5) ? $('#bakToTop').show(): $('#bakToTop').hide();
        (st > winh*0.8) ? $('#bakToTop').addClass('back-to-top-active') : $('#bakToTop').removeClass('back-to-top-active');
        //IE6下的定位
        if (!window.XMLHttpRequest) {
            $('#bakToTop').css("top", st + winh - 166);
        }
    };
    $(window).bind("scroll", $backToTopFun);
     $backToTopFun();
  })
}(window.jQuery)
