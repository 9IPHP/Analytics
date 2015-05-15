document.write('<div id="sHeader"><h1><a href="http://9iphp.com">就爱PHP<small>(http://9iphp.com)</small></a></h1></div>');
var doc=document;
var link=doc.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");
link.setAttribute("href", 'http://git.9iphp.com/Analytics/common.css');
var heads = doc.getElementsByTagName("head");
if(heads.length)
    heads[0].appendChild(link);
else
    doc.documentElement.appendChild(link);
/*Google Ad*/
document.write('<div style="margin: 0 auto;width:970px;">');
document.write('<script type="text/javascript">');
/*960*90 创建于 2015-01-15 网页特效*/
document.write('var cpro_id = "u1907027";');
document.write('</script>');
document.write('<script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script>');
/*document.write('<script type="text/javascript">');
document.write('google_ad_client = "ca-pub-6074386496019881";');
document.write('google_ad_slot = "4221983259";');
document.write('google_ad_width = 970;');
document.write('google_ad_height = 90;');
document.write('</script>');
document.write('<script type="text/javascript" src="https://pagead2.googlesyndication.com/pagead/show_ads.js">');
document.write('</script>');*/
document.write('</div>');
/*Baidu Ad*/
document.write('<script type="text/javascript">');
document.write('/*120*300 悬浮侧栏*/var cpro_id = "u1807842";');
document.write('</script>');
document.write('<script src="http://cpro.baidustatic.com/cpro/ui/f.js" type="text/javascript"></script>');
/*百度统计*/
document.write('<script>var _hmt = _hmt || [];(function() {');
document.write('var hm = document.createElement("script");');
document.write('hm.src = "//hm.baidu.com/hm.js?23a1ec628f935a1d42bc4137bab5a45f";');
document.write('var s = document.getElementsByTagName("script")[0]; ');
document.write('s.parentNode.insertBefore(hm, s);');
document.write('})();</script>')
