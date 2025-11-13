#!/usr/bin/env node

/*
© 2025 Functional Software, Inc. dba Sentry
SPDX-License-Identifier: Apache-2.0
*/

const recipients = require('./top_recipients.json').topRecipients;

recipients.sort((a, b) => b[2] - a[2]);

recipients.forEach((recipient) => {
    process.stdout.write('<tr>');
    process.stdout.write('<td>');
    let domain = '';
    if (recipient[0] == 'gh') {
        domain = 'https://github.com/';
    }
    if (recipient[0] == 'gl') {
        domain = 'https://gitlab.com/';
    }
    process.stdout.write(`<a href="${domain}${recipient[1]}">@${recipient[1]}</a>`);
    process.stdout.write('</td>');
    process.stdout.write('<td>');
    const percentage = Math.max(Math.round(recipient[2] * 10000), 1) / 10000;
    process.stdout.write(`${percentage}%`);
    process.stdout.write('</td>');
    process.stdout.write('</tr>');
});
process.stdout.write('\n');
