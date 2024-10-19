enum Environment {
    LOCAL = "local",
    DEVELOPMENT = "development",
    STAGING = "staging",
    PRODUCTION = "production"
}

function runTests(env: Environment): void {
    console.log(`Running tests in the ${env} environment`);
}

// Example calls
runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);
