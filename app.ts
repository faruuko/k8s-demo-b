import express from "express";

const app = express();

app.get("/route-a", async (_req, res) => {
  res.status(200).json({
    message: "k8s-demo-b",
    path: "route-a",
  });
});

app.get("/route-b", async (req, res) => {
  res.status(200).json({
    message: "k8s-demo-b",
    path: "route-b",
  });
});

app.get("/route-c", async (req, res) => {
  res.status(200).json({
    message: "k8s-demo-b",
    path: "route-c",
  });
});

app.listen(1002).on("error", (e) => {
  console.error(
    "An error occured while starting the server, please check the logs for more details.",
    e
  );
  process.exit(1);
});
