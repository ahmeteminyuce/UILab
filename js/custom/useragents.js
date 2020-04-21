/*globals document, selector, events, useragents */

events.onload(function () {

    var results = selector(document)[0].getAttribute('class');
    selector('.results')[0].innerHTML = '&lt;html class="' + results + '"&gt;';

    selector('.variables')[0].innerHTML = 'useragents.userLang: ' + useragents.userLang + '<br>' +
        'useragents.ie: ' + useragents.ie + '<br>' +
        'useragents.edge: ' + useragents.edge + '<br>' +
        'useragents.mobile: ' + useragents.mobile + '<br>' +
        'useragents.ios: ' + useragents.ios + '<br>' +
        'useragents.android: ' + useragents.android + '<br>' +
        'useragents.androidOld: ' + useragents.androidOld + '<br>' +
        'useragents.nativeBrowser: ' + useragents.nativeBrowser;

});