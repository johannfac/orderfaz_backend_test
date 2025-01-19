import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import userRegister from './user/controller/userRegister';
import userLogin from "./user/controller/userLogin";
import adminRegister from "./admin/controller/adminRegister";
import userProfile from "./user/controller/userProfile";

import adminLogin from "./admin/controller/adminLogin";
import adminProfile from "./admin/controller/adminProfile";

import createShipment from "./shipment/controller/createShipment";
import updateShipmentStatus from "./shipment/controller/updateShipment";
import trackShipment from "./shipment/controller/trackShipment";
import getShipments from "./shipment/controller/getShipments";

import { userRegisterValidator, userLoginValidator, userProfileValidator } from "./user/validator";
import { adminLoginValidator, adminProfileValidator, adminRegisterValidator } from "./admin/validator";
import {
    createShipmentValidator,
    trackShipmentValidator,
    updateShipmentStatusValidator
} from "./shipment/validator";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/user/register", userRegisterValidator, userRegister);
app.post("/user/login", userLoginValidator, userLogin);
app.get("/user/profile", userProfileValidator, userProfile);

app.post("/admin/register", adminRegisterValidator, adminRegister);
app.post("/admin/login", adminLoginValidator, adminLogin);
app.get("/admin/profile", adminProfileValidator, adminProfile);

app.post("/shipment/create", createShipmentValidator, createShipment);
app.put("/shipment/status/update", updateShipmentStatusValidator, updateShipmentStatus);
app.get("/shipment/track", trackShipmentValidator, trackShipment);
app.get("/shipment/get", getShipments);

app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`);
});
