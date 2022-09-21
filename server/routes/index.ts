import userController from "../controllers";

export default (app: any) => {
  app.get("/api", (req: string, res: any) =>
    res.status(200).send({
      message: "welcome to the Users API!",
    })
  );

  app.get("/api/user", userController.User.index);
  app.post("/api/user", userController.User.create);
};
