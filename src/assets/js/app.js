import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

//  test here:
// $(function(){
//      $("p").css("border", "3px solid blue");
// });
$(".btn-expander").click(function(){
  let pointerRight = 'fa-caret-square-right';
  let pointerDown = 'fa-caret-square-down';
  // console.log(this);
  if($(this).children('span.btn-expander-icon').hasClass(pointerRight)) {
    $(this).children('span.btn-expander-icon').removeClass(pointerRight).addClass(pointerDown);
    $(this).parent().siblings('div.expander-section').removeClass('hide-section').addClass('show-section');
  // toggle aria-hidden...
    $(this).parent().siblings('div.expander-section').attr('aria-hidden', false);
    $(this).attr('aria-expanded', 'true');
  } else {
    $(this).children('span.btn-expander-icon').removeClass(pointerDown).addClass(pointerRight);
    $(this).parent().siblings('div.expander-section').removeClass('show-section').addClass('hide-section');
    $(this).parent().siblings('div.expander-section').attr('aria-hidden', true);
    $(this).attr('aria-expanded', 'false');
  }
});



//function searchTable() {
  $(function(){
  $("#searchInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#searchTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
//}

// This is for offsetting the problem created by the sticky nav when using jump links:
// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 60);
  }
}
// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});
// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);

// SEARCH
(function() {
    var cx = '003667245230004179594:80xs2mushlc';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
// END SEARCH
