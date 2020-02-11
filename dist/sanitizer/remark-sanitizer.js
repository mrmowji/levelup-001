"use strict";
exports.__esModule = true;
var remark = require("remark");
var stripMarkdown = require("strip-markdown");
var RemarkSanitizer = /** @class */ (function () {
    function RemarkSanitizer(text) {
        this.text = text;
    }
    RemarkSanitizer.prototype.sanitize = function () {
        var sanitizedText = "";
        // see https://github.com/remarkjs/strip-markdown/issues/14
        remark()
            .use(stripMarkdown)
            .process("A" + this.text, function (error, file) {
            if (error)
                throw error;
            sanitizedText = String(file);
        });
        return sanitizedText.slice(1).trim();
    };
    return RemarkSanitizer;
}());
exports["default"] = RemarkSanitizer;
