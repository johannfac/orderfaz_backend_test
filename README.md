# Backend for interview test

## Clone Repository
> git clone https://github.com/johannfac/orderfaz_backend_test.git

## Installation
Setup database information in .env<br>
Ex. postgresql://postgres:password@localhost:5432/dbname?schema=public

> cd backend<br>
> npm install<br>
> npx prisma migrate dev (Migrate database)<br>
> npm run dev

## Test user registration
> curl -X POST http://localhost:3000/user/register \\ \
-d "username=your_username" \\ \
-d "password=your_password" \\ \
-d "firstName=your_first_name" \\ \
-d "lastName=your_last_name" \\ \
-d "email=your_email"

## Test user login
> curl -X POST http://localhost:3000/user/login 
\\ \
-d "username=your_username" \\ \
-d "password=your_password"

## Test get user profile
> curl -X GET http://localhost:3000/user/profile \\ \
-d "accessToken=your_access_token"

## Test admin registration
> curl -X POST http://localhost:3000/admin/register \\ \
-d "username=your_username" \\ \
-d "password=your_password" \\ \
-d "firstName=your_first_name" \\ \
-d "lastName=your_last_name" \\ \
-d "email=your_email"

## Test admin login
> curl -X POST http://localhost:3000/admin/login \\ \
-d "username=your_username" \\ \
-d "password=your_password"

## Test get admin profile
> curl -X GET http://localhost:3000/admin/profile \\ \
-d "accessToken=your_access_token"

## Test create shipment
> curl -X POST http://localhost:3000/shipment/create \\ \
-d "no=your_shipment_no" \\ \
-d "accessToken=your_access_token" \\ \
-d "status=your_shipment_status" \\ \
-d 'shipmentItems=[{"itemName": "item 1", "quantity": qty_1}, {"itemName": "item 2","quantity": qty_2}]'

## Test update shipment status
> curl -X PUT http://localhost:3000/shipment/status/update \\ \
-d "accessToken=your_access_token" \\ \
-d "no=your_shipment_no"

## Test track shipment
> curl -X GET http://localhost:3000/shipment/track \\ \
-d "no=your_shipment_no"

## Test get shipments
> curl -X GET http://localhost:3000/shipment/get \\ \
-d "accessToken=your_access_token"
