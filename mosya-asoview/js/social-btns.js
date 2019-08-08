(function(d) {
  var url = "https://" + location.host + location.pathname;
  var title = d.title;
  var socialIcons = d.querySelector(".social-icons");
  socialIcons.querySelector(".facebook").href = "//www.facebook.com/share.php?u=" + url;
  socialIcons.querySelector(".twitter").href = "https://twitter.com/intent/tweet?" +
    "related=AsoviewOfficial" +
    "&text=" + title +
    "&url=" + url;
  socialIcons.querySelector(".google-plus").href = "//plus.google.com/share?url=" + url;
  socialIcons.querySelector(".hatena").href = "//b.hatena.ne.jp/entry/" + url;
  socialIcons.querySelector(".pinterest").href =
    "//jp.pinterest.com/pin/create/button/?url=" + url +
    "&media=" + d.querySelector("meta[property='pinterest-image']").getAttribute("content") +
    "&description=" + title;
})(document);
