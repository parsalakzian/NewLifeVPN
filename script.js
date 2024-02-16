const api_url = "https://api.github.com/repos/parsalakzian/NewLifeVPN/releases";
		
// Defining async function
async function getapi() {

    // Storing response
    const response = await fetch(api_url);

    // Storing data in form of JSON
    var data = await response.json();
    var alink;
    var wlink;
    for(var i in data[0]['assets']){
        link = data[0]['assets'][i]['browser_download_url'];
        if(link.endsWith('.exe')){
            wlink = link;
        }else if(link.endsWith('.AppImage')){
            llink = link;
        }else if(link.endsWith('arm64-v8a.apk')){
            alink = link;
        };
    };

    const userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os = null;
    
    if (macosPlatforms.indexOf(platform) !== -1) {
        alert('دستگاه شما مک او اس است : به زودی');
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        alert('دستگاه شما آی او اس است : به زودی');
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        window.open(wlink);
    } else if (/Android/.test(userAgent)) {
        window.open(alink)
    } else if (/Linux/.test(platform)) {
        window.open(llink,"");
    }
    
    
}