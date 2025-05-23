
// Anti-bot detection
if (
  navigator.webdriver ||
  /HeadlessChrome/.test(navigator.userAgent) ||
  !navigator.plugins.length ||
  !window.outerWidth
) {
  window.location.href = "https://google.com";
}

// Redirect logic
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("claimBtn");
  const params = new URLSearchParams(window.location.search);
  const subid = params.get("subid") || "defaultsubid";

  // Replace with your Monetizer click URL
  const monetizerURL = "https://smartlink.monetizer.com/click?subid=" + encodeURIComponent(subid);

  btn.addEventListener("click", function () {
    window.location.href = monetizerURL;
  });
});
