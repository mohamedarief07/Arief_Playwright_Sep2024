const browserVersion ='chrome';

function getBrowserVersion (){
    if (browserVersion.startsWith('edge')){
        let browserVersion= "121.3021.31255";
        console.log("Browser version is"+ " "+ browserVersion);

            }
            else if (browserVersion.startsWith('chrome')){
                let browserVersion = "You are Using Chrome browser";
                console.log(" Browser Version is "+ " "+ browserVersion);
                }
                else{
                    let browserVersion=null;
                    console.log("Browser version is"+" "+ browserVersion);
                    
                }

}
getBrowserVersion();