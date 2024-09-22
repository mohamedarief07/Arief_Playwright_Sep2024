const browserVersion = "Chrome";

function getBrowserVersionVar() {
    if (browserVersion.startsWith("Chrome")) {
       // var browserVersion = `125.0.6422.142`;
        console.log("Inside if block with var:", browserVersion);
    }
    console.log("Outside if block with var:", browserVersion);
}
``
getBrowserVersionVar();

function getBrowserVersionLet() {
    if (browserVersion.startsWith("Chrome")) {
        let browserVersion = `125.0.6422.142`;
        console.log("Inside if block with let:", browserVersion);
    }
    console.log("Outside if block with let:", browserVersion);
}

getBrowserVersionLet();

function getBrowserVersionConst() {
    if (browserVersion.startsWith("Chrome")) {
        const browserVersion = `125.0.6422.142`;
        console.log("Inside if block with const:", browserVersion);
    }
    console.log("Outside if block with const:", browserVersion);
}

getBrowserVersionConst();
