import { hotelModel } from "@/database/models/hotel-model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/database/utils/data-util";
import { ratingModel } from "../models/rating-model";
import { reviewModel } from "../models/review-model";
import HotelDetailsPage from './../../app/(home)/hotels/[id]/page';

export async function getAllHotels() {
    const hotels = await hotelModel
    .find().select(["thumbNailUrl","name","city","lowRate","highRate","propertyCategory"])
    .lean();

    return replaceMongoIdInArray(hotels);
}

export async function getHotelById(hotelId){
    const hotel = await hotelModel.findById(hotelId).lean();
    return replaceMongoIdInObject(hotel);
}
export async function getRatingsForAHotel(hotelId){
    const ratings = await ratingModel.find({hotelId:hotelId}).lean();
    return replaceMongoIdInArray(ratings);
}
export async function getReviewsForAHotel(hotelId){
    const reviews = await reviewModel.find({hotelId:hotelId}).lean();
    return replaceMongoIdInArray(reviews)
};