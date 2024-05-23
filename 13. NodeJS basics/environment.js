// Connect to DB
const devURL = "devURL";
const prodURL = "prodURL";

function connect() {
  let url = "";
  if (process.env.NODE_ENV === "development") {
    url = devURL;
  } else if (process.env.NODE_ENV === "production") {
    url = prodURL;
  }
  console.log(url);
}

connect();
