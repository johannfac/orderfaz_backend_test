import { body } from 'express-validator';

export const userRegisterValidator = [
    body("username", "Username cannot empty").notEmpty(),
    body("password", "Password cannot empty").notEmpty(),
    body("password", "Password minimum length is 6 characters").isLength({min: 6}),
    body("firstName", "First name cannot empty").notEmpty(),
    body("lastName", "Last name cannot empty").notEmpty(),
    body("email", "Email cannot empty").notEmpty(),
    body("email", "Email does not valid").isEmail(),
];

export const userLoginValidator = [
    body("username", "Username cannot empty").notEmpty(),
    body("password", "Password cannot empty").notEmpty(),
    body("password", "Password minimum length is 6 characters").isLength({min: 6}),
];

export const userProfileValidator = [
    body("accessToken", "Access token cannot empty").notEmpty(),
];
