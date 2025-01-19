import { body } from "express-validator";

export const createShipmentValidator = [
    body("no", "Shipment no cannot empty").notEmpty(),
    body("accessToken", "Access token cannot empty").notEmpty(),
    body("status", "Status cannot empty").notEmpty(),
    body("shipmentItems", "Shipment items must be an array").isArray(),
];

export const updateShipmentStatusValidator = [
    body("accessToken", "Access token cannot empty").notEmpty(),
    body("no", "Shipment no cannot empty").notEmpty(),
];

export const trackShipmentValidator = [
    body("no", "Shipment no cannot empty").notEmpty(),
];

export const getShipmentsValidator = [
    body("accessToken", "Access token cannot empty").notEmpty(),
]
