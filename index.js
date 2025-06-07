import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { 
    quote: null,
    author: null
   });
});
app.post("/get-quote", async (req,res) => {
    try {
        const result = await axios.get("https://aot-api.vercel.app/quote");
        res.render("index.ejs", 
        {
            quote: result.data.quote,
            author: result.data.author,
        });
} catch (error) {
    res.render("index", {
      quote: null,
      author: null
    })
};
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});