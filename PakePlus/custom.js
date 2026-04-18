window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }<script src="path/to/adblockplus.js"></script>
<script>
adblockplus.init();
adblockplus.enable();
</script>
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })
<script src="path/to/adblockplus.js"></script>
<script>
adblockplus.init();
adblockplus.enable();
</script><script src="path/to/adblockplus.js"></script>
<script>
adblockplus.init();
adblockplus.enable();
</script><script src="path/to/adblockplus.js"></script>
<script>
adblockplus.init();
adblockplus.enable();
</script>
window.onload = function() {

  // 识别广告元素


  var ads = document.querySelectorAll('.ad, .advertisement, .adsbygoogle');


  // 移除广告元素


  ads.forEach(function(ad) {


    ad.parentNode.removeChild(ad);


  });


};

// 使用MutationObserver监测DOM变化

var observer = new MutationObserver(function(mutations) {


  mutations.forEach(function(mutation) {


    if (mutation.addedNodes.length) {


      var ads = document.querySelectorAll('.ad, .advertisement, .adsbygoogle');


      ads.forEach(function(ad) {


        ad.style.display = 'none';


      });


    }


  });


});


observer.observe(document.body, { childList: true, subtree: true });


