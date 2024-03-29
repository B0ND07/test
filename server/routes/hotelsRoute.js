const express=require("express")

const { createHotel, updateHotel, deleteHotel, getHotel, getHotels, searchHotels } = require("../controllers/hotelController")
const verifyAdmin = require("../utils/verifyAdmin")

const router=express.Router()

router.post("/",verifyAdmin,createHotel)

router.put("/:id",verifyAdmin,updateHotel)

router.delete("/:id",verifyAdmin,deleteHotel)

router.get("/:id",getHotel)

router.get("/",getHotels)

router.get("/search/:query",searchHotels)





module.exports=router