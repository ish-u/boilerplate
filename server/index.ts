import app from "./src/server";
import routes from "./src/routes";

// PORT
const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`Server is running on port http://localhost:${PORT}.`);
  routes(app);
});
