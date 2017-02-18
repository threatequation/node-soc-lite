'use strict';

// it will check the version of user
module.exports = function (version) {
    var version_number = version.match(/(\d+)/)[1];
    return parseInt(version_number) >= 4;
};