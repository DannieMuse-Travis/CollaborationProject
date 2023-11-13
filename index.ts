// Controller is where your business logic
// model define the behaviour of the controller
// the view ddisplay the action in the model

import express, { Application, Request, Response } from "express";
import cors from "cors";
import "./Config/DbConfig";
import { mainApp } from "./mainApp";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// npm i g swagger-jsdoc @types/swagger-jsdoc
// npm i g swagger-ui-express @types/swagger-ui-express

const Port: number = 4488;

const app: Application = express();
app.use(cors());

app.use(express.json());

mainApp(app);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "my SEt08,",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:4488",
      },
    ],
  },
  apis: ["./Router/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/", (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "Api active and Ready",
    });
  } catch (error) {
    return res.status(404).json({
      message: "unable to access Api",
    });
  }
});

const Server = app.listen(Port, () => {
  console.log("Connect......");
});

process.on("uncaughtException", (error) => {
  console.log("uncaughtException", error);

  process.exit(1);
});
process.on("unhandleRejection", (reason) => {
  console.log("unhandleRejection", reason);

  Server.close(() => {
    process.exit(1);
  });
});
