/**
 * Copyright (c) 2016 Sqreen. All Rights Reserved.
 * Please refer to our terms for more information: https://www.sqreen.io/terms.html
 */
/**
 * This script is to be run at startup, therefore synchronous operations are permitted
 */
'use strict';

const Logger = require('../logger');

module.exports = {
    url: 'https://ww3.threatequation.com/api/v1/log/',
    rules_verify_signature: true,
    log_level: Logger.logLevels.WARN,
    log_location: '',
    run_in_test: false,
    block_all_rules: false,
    report_perf_newrelic: false,
    config_file: '',
    initial_features: '',
    log_dir: "",
    path: '',
    plugin_name: '',
    secreate_key: '',
    sec_token: '',
};