-- CreateTable
CREATE TABLE "shipment" (
    "id" SERIAL NOT NULL,
    "no" VARCHAR(20) NOT NULL,
    "date" TIMESTAMPTZ NOT NULL,
    "user_id" INTEGER NOT NULL,
    "status" VARCHAR(10) NOT NULL,

    CONSTRAINT "shipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shipment_item" (
    "id" SERIAL NOT NULL,
    "shipment_id" INTEGER NOT NULL,
    "item_name" VARCHAR(50) NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "shipment_item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "shipment" ADD CONSTRAINT "shipment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipment_item" ADD CONSTRAINT "shipment_item_shipment_id_fkey" FOREIGN KEY ("shipment_id") REFERENCES "shipment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
