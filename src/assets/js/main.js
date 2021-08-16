document.getElementById("url").value = getParam("url");
document.getElementById("title").value = getParam("title");

var bookmarklet_href = "javascript:window.open('"+location.protocol+"//"+location.host+location.pathname+"?title='+encodeURIComponent(document.title)+'&url='+encodeURIComponent(location.href))";
document.getElementById("bookmarklet").setAttribute("href",bookmarklet_href);
document.getElementById("bookmarklet_source").value = bookmarklet_href;
var bookmarklet_innerText = "share with "+location.host+location.pathname;
document.getElementById("bookmarklet").innerText=bookmarklet_innerText

document.getElementById("twitter").onclick = function() {
	var eUrl = getEncodedValue('url');
	var eTitle = getEncodedValue('title');
        window.open('https://twitter.com/share?url='+eUrl+'&text='+eTitle);
}
document.getElementById("facebook").onclick = function() {
	var eUrl = getEncodedValue('url');
	var eTitle = getEncodedValue('title');
        window.open('https://www.facebook.com/sharer.php?u='+eUrl+'&t='+eTitle);
}
document.getElementById("tumblr").onclick = function() {
	var eUrl = getEncodedValue('url');
        var eTitle = getEncodedValue('title');
        window.open('https://www.tumblr.com/widgets/share/tool?canonicalUrl='+eUrl+'&title='+eTitle);
}

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
function getEncodedValue(name){
	var raw = document.getElementById(name).value;
	var ret = encodeURIComponent(raw);
	return ret;
}
