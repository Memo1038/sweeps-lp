<script>
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
  const clickid = params.get("clickid") || "";
  const keyword = params.get("keyword") || "";

  const monetizerURL = "https://smartlink.monetizer.com/click?subid=" + encodeURIComponent(subid) +
    "&clickid=" + encodeURIComponent(clickid) +
    "&keyword=" + encodeURIComponent(keyword);

  btn.addEventListener("click", function () {
    window.location.href = monetizerURL;
  });
});
</script>
