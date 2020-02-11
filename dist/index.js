"use strict";
exports.__esModule = true;
var remark_sanitizer_1 = require("./sanitizer/remark-sanitizer");
var typicode_endpoint_1 = require("./endpoint/typicode-endpoint");
var title = "Sanitize me!";
var body = "Some *emphasis*, **importance**, and `code`. " +
    "Here is a <p>paragraph</p> and a <a href='https://google.com'>link</a>.";
try {
    var sanitizedBody = new remark_sanitizer_1["default"](body).sanitize();
    typicode_endpoint_1["default"].post(title, sanitizedBody).then(function (response) {
        process.stdout.write(JSON.stringify(response.data, undefined, 2) + "\n");
    });
}
catch (error) {
    process.stdout.write(error.message);
}
