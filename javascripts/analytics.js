var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-30607788-1']);
_gaq.push(['_setDomainName', 'redwoodagile.com']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('-https:' == document.location.protocol ? '-https://ssl' : '-http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

function recordOutboundLink(link, category, action) {
    try {
        var myTracker = _gat._getTrackerByName();
        _gaq.push(['myTracker._trackEvent', category, action]);
        setTimeout('document.location = "' + link.href + '"', 100)

    } catch (err) {}
}