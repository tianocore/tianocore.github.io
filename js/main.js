$(document).ready(function(){
  // SVG CSS color adjusting
  $('img.svg').each(function(){
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = $(data).find('svg');

      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });

  function propagate_open(o) {
    classes = '.link-text, a.dropdown-toggle';
    if (o.hasClass("open") || o.hasClass("hovered")) {
      o.find(classes).addClass("open");
    } else {
      o.find(classes).removeClass("open");
    }
  }

  function should_accept_dropdown_event(o, ts) {
    var old_ts = o.data('last_dropdown_event_ts');
    if (!old_ts) {
      old_ts = 0;
    }
    if ((ts - old_ts) > 100) {
      o.data('last_dropdown_event_ts', ts);
      return true;
    } else {
      return false;
    }
  }

  $('.dropdown').hover(function(event) {
    var o = $(this);
    var ts = event.timeStamp;
    if (should_accept_dropdown_event(o, ts)) {
      o.addClass('open');
      o.addClass('hovered');
      propagate_open(o);
    }
  }, function(event) {
    var o = $(this);
    o.data('last_dropdown_event_ts', 0);
    o.removeClass('open');
    o.removeClass('hovered');
    propagate_open(o);
  });

  $('.dropdown-toggle').on("click", function(event) {
    var o = $(this).parent();
    var ts = event.timeStamp;
    if (should_accept_dropdown_event(o, ts)) {
      o.toggleClass('open');
      propagate_open(o);
    }
    event.stopPropagation();
  });
});
