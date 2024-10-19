var Environment;
(function (Environment) {
    Environment["LOCAL"] = "local";
    Environment["DEVELOPMENT"] = "development";
    Environment["STAGING"] = "staging";
    Environment["PRODUCTION"] = "production";
})(Environment || (Environment = {}));
function runTests(env) {
    console.log("Running tests in the ".concat(env, " environment"));
}
// Example calls
runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);
