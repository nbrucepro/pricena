const request = require('request');

const apiKey = 'eyJraWQiOiIwMWU5MGEwOS1kZmZkLTRjNzItOGQ2ZC01ODNkOWFiOWM1NGEiLCJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJwbXdzLWFwcGxpY2F0aW9uLWlkOjU3MjMiLCJhenAiOiJQdWJsaXNoZXJzIiwicm9sZXMiOlsiU2hvcHBpbmdBUEkiLCJSZXBvcnRpbmdBUEkiXSwiaXNzIjoiS2Vsa29vIEdyb3VwIiwiaWF0IjoxNjc4MTk2NTU5LCJqdGkiOiJiN2NlMTdlZS02OTkxLTQ3ODAtYjk1Mi1iNmY5YzZkMGQ1MjgifQ.o7ryCysrXvXH-McO_haMYYvUJuxyj06TeiOaBg19ixKyp7eulxmSnlIPCUtedHP3wPMetmSi05rGJHpwXICMA8QAHqngTtKN5U4vk3Ylo0NaZ-UtGp86YEMFHUAzcw2Bkmgax4bwe2FwXQlaZB2ywzVPVjVEPf4k-qNFCtGVB6UsM65X-vh1EHHBtqgER8WhqixWVdw44VOLlPHD9g6sfGjBzHEaDXurD3vePoyssFNcfpbeV4DtrkYJXWBYJFvU6UjcxVpn9ZyXGPBYj59gGLpet59bJpXxfvZwivFPmVdjNpPNEpBLJUSbmOhD_hCxP4qw4GqVIzG4O9jJv310imfYXI6-9wY9Scwviox31mIyh79v2WoTBuOYOKgauhPXh1XMQtlG6XOuFbdE2TV3-K9-gDxC7WzV2xlleXREVUGwRYMdFRYv9HCKt0xZOzfQuYHL2d0nuUtSFRwAis6IHze-wA4i9O9ISxFw-82i1f1tnMJlq91i_9UElHbl44rlUi8YWklhTm9W9nhhwBnhxrIbwspUqaKzUq1JXfv-xGp9vE7DzpdPnK3cWWx-M6tOHw23BSDnDHFilh3UpFgW91r7tRIfxmHHR5E5T6TwY-fyMZzvsstxclSmfJc1pvMNB7Sy2zBihhNAKcXp-RYygCkTrEwssuXrBybZja-egwY';
const productName = 'phone';

const url = `https://shopping-api.kelkoo.com/v1/search?query=${encodeURIComponent(productName)}&apiKey=${apiKey}`;

request(url, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
});