// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  $(function(){
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

    // holder.js add theme
    Holder.add_theme("social-25", { background: "#3a5a97", foreground: "#ffffff", size: 25})
    Holder.add_theme("social-30", { background: "#3a5a97", foreground: "#ffffff", size: 30})
    Holder.add_theme("social-45", { background: "#3a5a97", foreground: "#ffffff", size: 45})
    Holder.add_theme("industrial-25", { background: "#434A52", foreground: "#C2F200", size: 25})
    Holder.add_theme("industrial-30", { background: "#434A52", foreground: "#C2F200", size: 30})
    Holder.add_theme("industrial-45", { background: "#434A52", foreground: "#C2F200", size: 45})
    Holder.add_theme("pink", { background: "#cc33cc", foreground: "#ffffff", size: 12})
    Holder.add_theme("pink-25", { background: "#cc33cc", foreground: "#ffffff", size: 25})
    Holder.add_theme("pink-30", { background: "#cc33cc", foreground: "#ffffff", size: 30})
    Holder.add_theme("pink-45", { background: "#cc33cc", foreground: "#ffffff", size: 45})
    Holder.add_theme("black", { background: "#000000", foreground: "#ffffff", size: 12})
    Holder.add_theme("black-25", { background: "#000000", foreground: "#ffffff", size: 25})
    Holder.add_theme("black-30", { background: "#000000", foreground: "#ffffff", size: 30})
    Holder.add_theme("black-45", { background: "#000000", foreground: "#ffffff", size: 45})
    Holder.add_theme("main-25", { background: "#663399", foreground: "#e75d15", size: 25})
    Holder.add_theme("main-25", { background: "#663399", foreground: "#e75d15", size: 25})
    Holder.add_theme("main-30", { background: "#663399", foreground: "#e75d15", size: 30})
    Holder.add_theme("main-45", { background: "#663399", foreground: "#e75d15", size: 45})
    Holder.add_theme("green", { background: "#33cc00", foreground: "#ffffff", size: 12})
    Holder.add_theme("green-25", { background: "#33cc00", foreground: "#ffffff", size: 25})
    Holder.add_theme("green-30", { background: "#33cc00", foreground: "#ffffff", size: 30})
    Holder.add_theme("green-45", { background: "#33cc00", foreground: "#ffffff", size: 45})
    Holder.add_theme("orange", { background: "#ff6600", foreground: "#ffffff", size: 12})
    Holder.add_theme("orange-25", { background: "#ff6600", foreground: "#ffffff", size: 25})
    Holder.add_theme("orange-30", { background: "#ff6600", foreground: "#ffffff", size: 30})
    Holder.add_theme("orange-45", { background: "#ff6600", foreground: "#ffffff", size: 45})
    Holder.add_theme("blue", { background: "#0099ff", foreground: "#ffffff", size: 12})
    Holder.add_theme("blue-25", { background: "#0099ff", foreground: "#ffffff", size: 25})
    Holder.add_theme("blue-30", { background: "#0099ff", foreground: "#ffffff", size: 30})
    Holder.add_theme("blue-45", { background: "#0099ff", foreground: "#ffffff", size: 45})
    Holder.run();

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

