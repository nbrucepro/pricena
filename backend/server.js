
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
