const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3002;
const token =
  "eyJraWQiOiIwMWU5MGEwOS1kZmZkLTRjNzItOGQ2ZC01ODNkOWFiOWM1NGEiLCJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJwbXdzLWFwcGxpY2F0aW9uLWlkOjU3MjMiLCJhenAiOiJQdWJsaXNoZXJzIiwicm9sZXMiOlsiU2hvcHBpbmdBUEkiLCJSZXBvcnRpbmdBUEkiXSwiaXNzIjoiS2Vsa29vIEdyb3VwIiwiaWF0IjoxNjc4MTk2NTU5LCJqdGkiOiJiN2NlMTdlZS02OTkxLTQ3ODAtYjk1Mi1iNmY5YzZkMGQ1MjgifQ.o7ryCysrXvXH-McO_haMYYvUJuxyj06TeiOaBg19ixKyp7eulxmSnlIPCUtedHP3wPMetmSi05rGJHpwXICMA8QAHqngTtKN5U4vk3Ylo0NaZ-UtGp86YEMFHUAzcw2Bkmgax4bwe2FwXQlaZB2ywzVPVjVEPf4k-qNFCtGVB6UsM65X-vh1EHHBtqgER8WhqixWVdw44VOLlPHD9g6sfGjBzHEaDXurD3vePoyssFNcfpbeV4DtrkYJXWBYJFvU6UjcxVpn9ZyXGPBYj59gGLpet59bJpXxfvZwivFPmVdjNpPNEpBLJUSbmOhD_hCxP4qw4GqVIzG4O9jJv310imfYXI6-9wY9Scwviox31mIyh79v2WoTBuOYOKgauhPXh1XMQtlG6XOuFbdE2TV3-K9-gDxC7WzV2xlleXREVUGwRYMdFRYv9HCKt0xZOzfQuYHL2d0nuUtSFRwAis6IHze-wA4i9O9ISxFw-82i1f1tnMJlq91i_9UElHbl44rlUi8YWklhTm9W9nhhwBnhxrIbwspUqaKzUq1JXfv-xGp9vE7DzpdPnK3cWWx-M6tOHw23BSDnDHFilh3UpFgW91r7tRIfxmHHR5E5T6TwY-fyMZzvsstxclSmfJc1pvMNB7Sy2zBihhNAKcXp-RYygCkTrEwssuXrBybZja-egwY";
app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello there?");
});
// Define the search parameters
const searchParams = {
  keyword: 'laptop',
  sort: 'price_asc',
  limit: 10
};
app.get("/api/search", async (req, res) => {
  const query = req.query.q;

  try {
    await axios
      .get(
        "https://api.kelkoogroup.net/publisher/shopping/v2/search/offers/6466675ff7e14f827893929e9c55dcbd?country=ae&fieldsAlias=minimal&facetValues=2",
        // "https://api.kelkoogroup.net/publisher/shopping/v2/feeds/pla?country=ae",
        // "https://api.kelkoogroup.net/publisher/shopping/v2/search/offers?country=ae&query=lenovo",
        // "https://api.kelkoogroup.net/publisher/shopping/v3/search/offers",
        // "https://api.kelkoogroup.net/publisher/shopping/v2/search/feeds/merchants?country=ae/100512102",
        // "https://shopping-api.kelkoo.com/v3/products",
        {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods" : "GET, POST, OPTIONS",
            "Accept-Encoding": "gzip",
             "Content-type": "Application/json",
            Authorization: `Bearer ${token}`,
          },
          // params: searchParams
        }
      ) 
      .then(
        (response) => {
          var response = response.data;
          res.json(response);
        },
        (error) => {
          // var status = err or.response.status;
          console.log(error);
        }
      );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}); 


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
