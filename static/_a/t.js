(function(){var s=document.currentScript||document.querySelector('script[data-site][src*="/t.js"]');if(!s||window.beehq)return;var k=s.getAttribute("data-site");if(!k)return;var u=new URL(s.src).origin+"/api/t";
function send(t){try{if(/^\/(admin|wp-admin|wp-login|login)(\/|\.|$)/.test(location.pathname))return;var r="";try{if(document.referrer)r=new URL(document.referrer).hostname}catch(e){}
var d=JSON.stringify({k:k,t:t,p:location.pathname.slice(0,200),r:r});
if(navigator.sendBeacon)navigator.sendBeacon(u,new Blob([d],{type:"text/plain"}));else fetch(u,{method:"POST",body:d,keepalive:true,mode:"no-cors"})}catch(e){}}
document.addEventListener("click",function(e){var a=e.target&&e.target.closest?e.target.closest("a[href]"):null;if(!a)return;var h=a.getAttribute("href")||"";
if(/^tel:/i.test(h))send("call_click");else if(/^sms:/i.test(h))send("sms_click");else if(/^mailto:/i.test(h))send("email_click")},true);
document.addEventListener("wpcf7mailsent",function(){send("form_submit")});
document.addEventListener("submit",function(e){var f=e.target;if(!f||f.tagName!=="FORM")return;if(f.classList.contains("wpcf7-form"))return;
if(f.getAttribute("role")==="search"||f.querySelector('input[type="search"],input[name="s"]'))return;if(f.hasAttribute("data-beehq-ignore"))return;send("form_submit")},true);
window.beehq={track:send}})();
