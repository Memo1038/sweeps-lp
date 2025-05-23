
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
  const monetizerURL = "https://aff.monymakers.online/?utm_medium=699ea686e41e07763bc6194758e6e659a4ad6a95&utm_campaign=ZeroP-PH-Mainstream&utm_term=" + encodeURIComponent(subid);


  btn.addEventListener("click", function () {
    window.location.href = monetizerURL;
  });
});
