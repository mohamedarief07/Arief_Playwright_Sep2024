function launchBrowser(browserName) {

    if (browserName === 'chrome') {
        console.log(`launch ${browserName} Browser`);
    } else if (browserName === 'edge') {
        console.log(`launch ${browserName} Browser`);
    } else if (browserName === 'Firefox') {
        console.log(`launch ${browserName} Browser`);
    } else if (browserName === 'Safari') {
        console.log(`launch ${browserName} Browser`);
    } else {
        console.log("Check System Administrator");
    }
}

function runTests(testType) {
      switch (testType) {
        case "smoke":
            console.log(`${testType} is performed`);
            break;
        case "sanity":
            console.log(`${testType} is performed`);
            break;
        case "regression":
            console.log(`${testType} is performed`);
            break;
        default:
            console.log("Build is not ready for Testing");
            break;
    }
}

launchBrowser("Firefox")
runTests("regression")