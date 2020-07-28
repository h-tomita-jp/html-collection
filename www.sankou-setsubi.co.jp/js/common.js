var initToTopBtn = function() {
  // トップへ
  var topBtn = $('#to-top');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
      return false;
  });
  var initScrollLink=function(){
    $('a.scrollable').click(function(){
      $('body,html').animate({scrollTop:$($(this).attr("href")).offset().top},500);
      return false;
    });
  };
  initScrollLink();
};
var initContactForm = function() {
  var contactForm = $("#contact-form form");
  if (contactForm.length == 0) {
    return;
  }
  contactForm.find(".btn-submit").click(function() {
    //alert("submit");
    contactForm.find(".error-required").each(function(i, e) {
      $(e).removeClass("error-required");
    });
    var required = {
      "text": ["name","nameKana","zipCode","address1","address2","tel","mail"],
      "checkbox": ["workType[]"],
      "radio": ["buildType","contactType"],
      "select": ["prefectures"]
    };
    for (var type in required) {
      var nameList = required[type];
      for (var i = 0; i < nameList.length; i++) {
        var name = nameList[i];
        if (type == "text" && contactForm.find("[name='" + name + "']").val() == "" ||
          type == "checkbox" && contactForm.find("[name='" + name + "']:checked").length == 0 ||
          type == "radio" && contactForm.find("[name='" + name + "']:checked").length == 0 ||
          type == "select" && contactForm.find("[name='" + name + "']").val() == "") {
          contactForm.find("[name='" + name + "']").parents("dd").addClass("error-required");
          //alert(name + " is empty.");
        }
      }
    }
    if (contactForm.find(".error-required").length > 0) {
    } else {
      contactForm.submit();
    }
    return false;
  });
};
var initNewsList = function() {
  if ($(".news-list").length > 0) {
    $.ajax({
      type: 'GET',
      url: 'news/list.json',
      cache: false,
      success: function(json) {
        //alert("news success!" + json.length);
        var html = "";
        for (var i = 0; i < json.length; i++) {
          html += "<tr><td><time>" +json[i].date + "</time></td><td>" + json[i].title +"</td></tr>";
        }
        $(".news-list table").html(html);
      },
      error: function() {
       //alert("news error!");
      }
    });
  }


};
