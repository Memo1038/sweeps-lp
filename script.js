
// Anti-bot detection
if (
  navigator.webdriver ||
  /HeadlessChrome/.test(navigator.userAgent) ||
  !navigator.plugins.length ||
  !window.outerWidth
) {
  window.location.href = "https://google.com";
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("claimBtn");
  const params = new URLSearchParams(window.location.search);

  const subid = params.get("subid") || "default";
  const clickid = params.get("clickid") || "noclick";
  const keyword = params.get("keyword") || "nokeyword";
  const carrier = params.get("carrier") || "unknown";
  const conn = params.get("conn") || "unknown";
  const os = params.get("os") || "unknown";
  const device = params.get("device") || "unknown";
  const browser = params.get("browser") || "unknown";
  const city = params.get("city") || "unknown";

  const monetizerURL = "https://smartlink.monetizer.com/click" +
    "?subid=" + encodeURIComponent(subid) +
    "&clickid=" + encodeURIComponent(clickid) +
    "&keyword=" + encodeURIComponent(keyword) +
    "&carrier=" + encodeURIComponent(carrier) +
    "&conn=" + encodeURIComponent(conn) +
    "&os=" + encodeURIComponent(os) +
    "&device=" + encodeURIComponent(device) +
    "&browser=" + encodeURIComponent(browser) +
    "&city=" + encodeURIComponent(city);

  btn.addEventListener("click", function () {
    window.location.href = monetizerURL;
  });
});
