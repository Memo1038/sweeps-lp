// Get ?subid= from URL
const urlParams = new URLSearchParams(window.location.search);
const subid = urlParams.get("subid") || "default";

// Your Monetizer Smartlink with dynamic subid
const monetizerURL = "https://aff.monymakers.online/?utm_medium=699ea686e41e07763bc6194758e6e659a4ad6a95&utm_campaign=ZeroP-PH-Mainstream&utm_term=" + encodeURIComponent(subid);

// Redirect after short delay (optional)
setTimeout(() => {
  window.location.href = monetizerURL;
}, 500); // 500ms delay
<script src="script.js?v=1.0.0"></script>
