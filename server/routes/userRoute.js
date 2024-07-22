import express from 'express';
import { bookVisit, cancelBookings, createUser, getAllBookings, getAllFavorites, toFav } from '../controllers/userCntrl.js';
import jwtCheck from '../config/Auth0Config.js';

const router = express.Router()

router.post("/register", jwtCheck, createUser)
router.post("/bookVisit/:id", jwtCheck, bookVisit)
router.post("/allBookings", getAllBookings)
router.post("/removeBooking/:id", jwtCheck, cancelBookings)
router.post("/toFav/:rid", jwtCheck, toFav)
router.post("/allFav/", jwtCheck, getAllFavorites)

export {router as userRoute};