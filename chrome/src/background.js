chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        if ( request.command != "copyfixerCopy" ) return;
        var e = document.getElementById('clipboardArea');
        e.value = request.data;
        e.select();
        document.execCommand("copy");
    }
);