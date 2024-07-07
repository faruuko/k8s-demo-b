import express, { Request, Response, NextFunction } from "express";

const app = express();

const requiresAuth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = req.headers["x-user-id"];

    if (user) {
      next();
    } else {
      res.status(403).json({
        message: "A valid access token is required...",
      });
    }
  };
};

app.get("/route-a", requiresAuth(), async (_req, res) => {
  res.status(200).json({
    message: "k8s-demo-b",
    path: "route-a",
  });
});

app.get("/route-b", requiresAuth(), async (_req, res) => {
  res.status(200).json({
    message: "k8s-demo-b",
    path: "route-b",
  });
});

app.post("/route-c", async (_req, res) => {
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
