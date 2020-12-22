var MOBILE_WIDTH = 768;

function isMobile() {
  return $(window).width() < MOBILE_WIDTH;
}

function updateNavBarStyle() {
    var navBarContainer = $("#navbar-container");

    if (navBarContainer.exists()) {
      var c = [];

      if (isMobile()) {
        c.push("mobile");
      }

      var navBar = navBarContainer.find("nav.navbar");
      var navBarPosition = navBar.offset().top + navBar.height();

      var currentSection = $("[class*='update-navbar']").filter(function(i, e) {
        return (navBarPosition >= $(e).offset().top - 2);
      });

      // Important for when we start adding sections to the website
      if (currentSection.length) {
          var currentSectionClass = currentSection.last().attr("class").split(" ").filter(function (c) {
            return (c !== "container-fluid" && c.match(/^update-navbar/));
          });
          c.push.apply(c, currentSectionClass);
          window.c = c;
        }
        navBarContainer.attr("class", c.join(" "));
    }
}

$.fn.exists = function () {
  return this.length !== 0
}

$(document).ready(function() {
  $(window).resize(function() {
    updateNavBarStyle();
  });

  $(window).scroll(function() {
    updateNavBarStyle();
    setTimeout(function () {
      updateNavBarStyle();
    }, 1000);
  });

  updateNavBarStyle();
});
