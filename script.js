// Simple bot filter (user-agent check)
const isBot = /bot|crawl|spider|facebook|preview|meta|discord/i.test(navigator.userAgent);
if (isBot) {
  document.body.innerHTML = "<h1>Bot traffic blocked</h1>";
  throw new Error("Bot detected, stopping script.");
}

// Get query params
const urlParams = new URLSearchParams(window.location.search);
const subid = urlParams.get("subid") || "default";
const clickid = urlParams.get("clickid") || "";
const keyword = urlParams.get("keyword") || "";

// Google Sheets Webhook
const sheetURL = "https://script.google.com/macros/s/AKfycbxSDzy_RbX2D6Akr_Y5X0mtOfKi1F4ENxOtoH_b92VqSofEvLPJEJhXu0pH6EbAVPBl9g/exec";

// Send click data
fetch(`${sheetURL}?subid=${encodeURIComponent(subid)}&clickid=${encodeURIComponent(clickid)}&keyword=${encodeURIComponent(keyword)}`, {
  method: 'GET',
  mode: 'no-cors'
}).catch(() => {});

// Build Monetizer URL
let monetizerURL = "https://aff.monymakers.online/?utm_medium=699ea686e41e07763bc6194758e6e659a4ad6a95&utm_campaign=ZeroP-PH-Mainstream";
monetizerURL += `&utm_term=${encodeURIComponent(subid)}`;
if (clickid) monetizerURL += `&clickid=${encodeURIComponent(clickid)}`;
if (keyword) monetizerURL += `&keyword=${encodeURIComponent(keyword)}`;

// Show loading spinner
document.body.innerHTML = `<div style="text-align:center;padding-top:100px;font-family:sans-serif">
  <h2>Redirecting you to your reward...</h2>
  <div style="font-size:40px;">⏳</div>
</div>`;

// Redirect after delay
setTimeout(() => {
  window.location.href = monetizerURL;
}, 1000);
