{
        var url = getParam("url");
        var title = getParam("title");
        document.getElementById("url").value = url;
        document.getElementById("title").value = '"' + title + '"';
}
{
        var bookmarklet_href = "javascript:window.open('" + location.protocol + "//" + location.host + location.pathname + "?title='+encodeURIComponent(document.title)+'&url='+encodeURIComponent(location.href))";
        document.getElementById("bookmarklet").setAttribute("href", bookmarklet_href);
        document.getElementById("bookmarklet_source").value = bookmarklet_href;
        var bookmarklet_innerText = "share with " + location.host + location.pathname;
        document.getElementById("bookmarklet").innerText = bookmarklet_innerText
}

document.getElementById("twitter").onclick = function () {
        var eUrl = getEncodedValue('url');
        var eTitle = getEncodedValue('title');
        window.open('https://twitter.com/share?url=' + eUrl + '&text=' + eTitle);
}
document.getElementById("facebook").onclick = function () {
        var eUrl = getEncodedValue('url');
        var eTitle = getEncodedValue('title');
        window.open('https://www.facebook.com/sharer.php?u=' + eUrl + '&t=' + eTitle);
}
document.getElementById("tumblr").onclick = function () {
        var eUrl = getEncodedValue('url');
        var eTitle = getEncodedValue('title');
        window.open('https://www.tumblr.com/widgets/share/tool?canonicalUrl=' + eUrl + '&title=' + eTitle);
}
document.getElementById("threads").onclick = function () {
        var eUrl = getEncodedValue('url');
        var eTitle = getEncodedValue('title');
        window.open('https://www.threads.net/intent/post?text=' + eUrl + '&title=' + eTitle);
}
/*
document.getElementById("pocket").onclick = function() {
        var eUrl = getEncodedValue('url');
        var eTitle = getEncodedValue('title');
        window.open('https://getpocket.com/b/r4.js?u='+eUrl+'&t='+eTitle);
}
*/

/**
 *  * Get the URL parameter value
 *   *
 *    * @param  name {string} パラメータのキー文字列
 *     * @return  url {url} 対象のURL文字列（任意）
 *      */
function getParam(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function getEncodedValue(name) {
        var raw = document.getElementById(name).value;
        var ret = encodeURIComponent(raw);
        return ret;
}

if ('addEventListener' in window) {
        window.addEventListener('load', function () { document.body.className = document.body.className.replace(/\bis-preload\b/, ''); });
        document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}
// https://qwerty.work/blog/2020/05/adsense-speedup-lazyload.php
(function (window, document) {
        function main() {
                // GoogleAdSense読込み
                var ad = document.createElement('script');
                ad.type = 'text/javascript';
                ad.async = true;
                // 新コードの場合、サイト運営者IDを書き換えてコメントアウトを外す
                ad.dataset.adClient = 'ca-pub-812207611214700';
                ad.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
                var sc = document.getElementsByTagName('script')[0];
                sc.parentNode.insertBefore(ad, sc);
        }

        // 遅延読込み
        var lazyLoad = false;
        function onLazyLoad() {
                if (lazyLoad === false) {
                        // 複数呼び出し回避 + イベント解除
                        lazyLoad = true;
                        window.removeEventListener('scroll', onLazyLoad);
                        window.removeEventListener('mousemove', onLazyLoad);
                        window.removeEventListener('mousedown', onLazyLoad);
                        window.removeEventListener('touchstart', onLazyLoad);
                        window.removeEventListener('keydown', onLazyLoad);
                        main();
                }
        }
        window.addEventListener('scroll', onLazyLoad);
        window.addEventListener('mousemove', onLazyLoad);
        window.addEventListener('mousedown', onLazyLoad);
        window.addEventListener('touchstart', onLazyLoad);
        window.addEventListener('keydown', onLazyLoad);
        window.addEventListener('load', function () {
                // ドキュメント途中（更新時 or ページ内リンク）
                if (window.pageYOffset) {
                        onLazyLoad();
                }
                //何もアクションがないときは指定秒数後に読み込み開始（ミリ秒）
                window.setTimeout(onLazyLoad, 3000)
        });
})(window, document);
