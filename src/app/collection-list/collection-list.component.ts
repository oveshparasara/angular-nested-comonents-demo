import { Component, OnInit } from '@angular/core';
import {CollectionsService} from "../services/collections.service";
import {COLLECTIONS} from "../collections/collections";

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent implements OnInit {
  collections = COLLECTIONS;
  constructor(private collectionsService: CollectionsService) { }

  ngOnInit() {
    this.collections =  [
      {
        "_id": "5c52a35f2265e3001900433f",
        "name": "Best Place for Hangout",
        "shortName": "Best Place for Hangout",
        "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1534142175/1/index_skoqao.jpg",
        "createdByUser": "hushen.savani@iwantunlimited.com",
        "createdByUserType": "MarketPlaceAdmin",
        "mid": "1",
        "bannerImageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1536565362/1/google-play_qgcqpk.png",
        "updatedByUser": "hushen.savani@iwantunlimited.com",
        "updatedByUserType": "MarketPlaceAdmin",
        "isActive": true,
        "priority": 100,
        "channels": [
          "WEB",
          "MOBILE"
        ],
        "applicableTo": [
          "FLASH_DEALS",
          "HOME"
        ],
        "collectionTemplate": "BANNER",
        "collectionType": "FILTERED",
        "isFeaturedCollection": false,
        "isCuratedCollection": false,
        "numberOfrestaurants": 0,
        "restaurants": []
      },
      {
        "_id": "5b62e0ef88aacf00191e2bb7",
        "name": "11 % off",
        "shortName": "11% off",
        "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1533173429/1/wax8_igiyde.jpg",
        "mid": "1",
        "createdByUser": "hushen.savani@iwantunlimited.com",
        "createdByUserType": "MarketPlaceAdmin",
        "updatedByUser": "hushen.savani@iwantunlimited.com",
        "updatedByUserType": "MarketPlaceAdmin",
        "isActive": true,
        "priority": 100,
        "channels": [
          "WEB",
          "MOBILE"
        ],
        "applicableTo": [
          "FLASH_DEALS",
          "HOME"
        ],
        "collectionTemplate": "3x3",
        "collectionType": "FILTERED",
        "isFeaturedCollection": true,
        "isCuratedCollection": false,
        "numberOfrestaurants": 0,
        "restaurants": []
      },
      {
        "_id": "5b62e49488aacf00191e2e10",
        "name": "12% off promo",
        "shortName": "12% off promo",
        "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1533173441/1/wax_sh9qfw.jpg",
        "mid": "1",
        "createdByUser": "hushen.savani@iwantunlimited.com",
        "createdByUserType": "MarketPlaceAdmin",
        "isActive": true,
        "priority": 99,
        "channels": [
          "WEB",
          "MOBILE"
        ],
        "applicableTo": [
          "PROMOTIONS",
          "HOME"
        ],
        "collectionTemplate": "3x3",
        "collectionType": "FILTERED",
        "isFeaturedCollection": true,
        "isCuratedCollection": false,
        "numberOfrestaurants": 0,
        "restaurants": []
      },
      {
        "_id": "5b520cfa008d4700190437ab",
        "name": "BIG DEALS",
        "shortName": "BIG DEALS!",
        "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1532868430/1/Aphrodite%20Bar%20and%20Restaurant/0bc047590129f8e4524c4d35dce52e69_1428780719_pezxlr.jpg",
        "mid": "1",
        "createdByUser": "hushen.savani@iwantunlimited.com",
        "createdByUserType": "MarketPlaceAdmin",
        "isActive": true,
        "priority": 99,
        "channels": [
          "WEB",
          "MOBILE"
        ],
        "applicableTo": [
          "PROMOTIONS",
          "HOME"
        ],
        "collectionTemplate": "2x2",
        "collectionType": "FILTERED",
        "isFeaturedCollection": true,
        "isCuratedCollection": false,
        "numberOfrestaurants": 1,
        "restaurants": [
          {
            "_id": "5b1675ebb224f2001ee46738",
            "name": "Pizza Shop",
            "geoLocation": [
              72.5568843,
              23.0138009
            ],
            "mobileCountryCode": "+91",
            "mobileNumber": "9427553311",
            "email": "hardik.tilva@iwantunlimited.com",
            "address": {
              "_id": "5b1675ebb224f2001ee4672f",
              "area": "Mega Kuningan Test Test Test Test Test Test Test Test",
              "cityName": "Ahmedabad",
              "city_id": "5ae95080f975cd00076adbd2"
            },
            "contactDetails": {
              "_id": "5b1675ebb224f2001ee46730",
              "emails": [
                "hermawan.mulyono251290@yahoo.com"
              ],
              "contactNumbers": [
                {
                  "numberType": "MOBILE",
                  "countryCode": "+62",
                  "areaCode": null,
                  "ext": null,
                  "num": "081288667806",
                  "_id": "5b3b1097b753850019de05c8"
                },
                {
                  "numberType": "MOBILE",
                  "countryCode": "+62",
                  "areaCode": null,
                  "ext": null,
                  "num": "67854754677",
                  "_id": "5c80e9efdcbe2a001c560262"
                },
                {
                  "numberType": "MOBILE",
                  "countryCode": "+62",
                  "areaCode": null,
                  "ext": null,
                  "num": "343434355",
                  "_id": "5c80e9efdcbe2a001c560261"
                },
                {
                  "numberType": "LANDLINE",
                  "countryCode": "+62",
                  "areaCode": "079",
                  "ext": "234",
                  "num": "3463463435",
                  "_id": "5c80e9efdcbe2a001c560260"
                },
                {
                  "numberType": "LANDLINE",
                  "countryCode": "+62",
                  "areaCode": "079",
                  "ext": "123",
                  "num": "34346363453",
                  "_id": "5c80e9efdcbe2a001c56025f"
                },
                {
                  "numberType": "LANDLINE",
                  "countryCode": "+62",
                  "areaCode": "079",
                  "ext": "222",
                  "num": "42345235234234",
                  "_id": "5c80e9efdcbe2a001c56025e"
                }
              ]
            },
            "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1526542206/1/pizza_rfcuv9.jpg",
            "speciality": "in Pizza and Pasta",
            "mid": "1",
            "merchant": "5b1675eab224f2001ee4672a",
            "branchId": "RST3462720167",
            "ratingsMetadata": {
              "totalRatingsCount": 9,
              "averageRatings": 3.7
            },
            "isActive": true,
            "isPromoted": false,
            "priority": 0,
            "cuisines": [
              "Asian",
              "Indonesian",
              "French",
              "Indian"
            ],
            "user": "141",
            "updatedByUser": "hushen.savani@iwantunlimited.com",
            "status": {
              "alias": "PUBLISHED",
              "_id": "5b534ed1608b3f0019d5a233",
              "name": "Published",
              "show": true
            },
            "isDeleted": false,
            "iconImage": "https://res.cloudinary.com/fd-cdn/image/upload/v1530860217/5b1675eab224f2001ee4672a/re-2_c7469j.jpg",
            "rank": 840,
            "slug": "pizza-shop-makarba",
            "enableOutletBooking": true,
            "dealsInfo": {
              "totalFlashDeals": 3,
              "flashDeal": {
                "_id": "5cde59ca4d3a37001c72bf2c",
                "label": "All day flash deal",
                "description": "All day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash deal",
                "dealCategory": "FLASH_DEALS",
                "dealType": "DISCOUNT",
                "valueType": "PERCENTAGE",
                "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1530856440/5b1675eab224f2001ee4672a/pizza_m3im3w.jpg",
                "offerMaxCounter": 500,
                "offerMaxPaxCounter": 50,
                "institution": null,
                "dealId": "D6745989372",
                "isActive": true,
                "cards": [],
                "dateTimeRanges": [
                  {
                    "updatedAt": "2019-05-17T06:50:50.904Z",
                    "createdAt": "2019-05-17T06:50:50.904Z",
                    "_id": "5cde59ca4d3a37001c72bf2d",
                    "dateRange": [
                      {
                        "updatedAt": "2019-05-17T06:50:50.904Z",
                        "createdAt": "2019-05-17T06:50:50.904Z",
                        "fromDate": "2019-05-17T00:00:00.000Z",
                        "toDate": "2019-08-31T00:00:00.000Z",
                        "_id": "5cde59ca4d3a37001c72bf2e"
                      }
                    ],
                    "timeRange": [
                      {
                        "updatedAt": "2019-05-17T06:50:50.904Z",
                        "createdAt": "2019-05-17T06:50:50.904Z",
                        "timingTo": "1970-01-01T23:30:00.000Z",
                        "timingFrom": "1970-01-01T07:00:00.000Z",
                        "_id": "5cde59ca4d3a37001c72bf2f"
                      }
                    ]
                  }
                ],
                "termsAndConditions": [
                  "All day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash deal"
                ],
                "channels": [
                  "WEB",
                  "MOBILE"
                ],
                "bogoGet": 0,
                "bogoBuy": 0,
                "freeItemDescription": "0",
                "value": 15,
                "nextAvailableTimeSlot": {
                  "updatedAt": "2019-05-17T06:50:50.904Z",
                  "createdAt": "2019-05-17T06:50:50.904Z",
                  "timingTo": "1970-01-01T23:30:00.000Z",
                  "timingFrom": "1970-01-01T07:00:00.000Z",
                  "_id": "5cde59ca4d3a37001c72bf2f"
                }
              },
              "totalPromos": 4,
              "promotion": {
                "_id": "5cde45994d3a37001c5c3c92",
                "label": "Breakfast promo deal 40% off",
                "description": "Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%",
                "dealCategory": "PROMOTIONS",
                "dealType": "DISCOUNT",
                "valueType": "PERCENTAGE",
                "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1530860210/5b1675eab224f2001ee4672a/re-3_drtlqv.jpg",
                "institution": null,
                "dealId": "D6952698856",
                "isActive": true,
                "cards": [],
                "dateTimeRanges": [
                  {
                    "_id": "5cde45994d3a37001c5c3c93",
                    "createdAt": "2019-05-17T05:24:41.485Z",
                    "updatedAt": "2019-05-17T05:24:41.485Z",
                    "dateRange": [
                      {
                        "toDate": "2019-08-31T00:00:00.000Z",
                        "fromDate": "2019-05-17T00:00:00.000Z",
                        "_id": "5cde48704d3a37001c5e51de"
                      }
                    ],
                    "timeRange": [
                      {
                        "timingFrom": "1970-01-01T07:00:00.000Z",
                        "timingTo": "1970-01-01T11:30:00.000Z",
                        "_id": "5cde48704d3a37001c5e51df"
                      }
                    ]
                  }
                ],
                "termsAndConditions": [
                  "Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%"
                ],
                "channels": [
                  "WEB",
                  "MOBILE"
                ],
                "bogoGet": 0,
                "bogoBuy": 0,
                "freeItemDescription": "0",
                "value": 40,
                "nextAvailableTimeSlot": {
                  "timingFrom": "1970-01-01T07:00:00.000Z",
                  "timingTo": "1970-01-01T11:30:00.000Z",
                  "_id": "5cde48704d3a37001c5e51df"
                }
              },
              "totalDeals": 12
            },
            "isLiked": false
          }
        ]
      },
      {
        "_id": "5b043b9ce2299e001979db15",
        "name": "FLAMBOYANT 40%-50% OFF",
        "shortName": "FLAMBOYANT 40%-50% OFF",
        "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1522943956/1/Asia%20Restaurant/img_0619_jatque.jpg",
        "mid": "1",
        "createdByUser": "hushen.savani@iwantunlimited.com",
        "createdByUserType": "MarketPlaceAdmin",
        "isActive": true,
        "priority": 97,
        "channels": [
          "WEB",
          "MOBILE"
        ],
        "applicableTo": [
          "FLASH_DEALS",
          "HOME"
        ],
        "collectionTemplate": "3x3",
        "collectionType": "FILTERED",
        "isFeaturedCollection": true,
        "isCuratedCollection": false,
        "numberOfrestaurants": 1,
        "restaurants": [
          {
            "_id": "5b52d1ea008d470019044b4e",
            "name": "Foodbites Restaurant",
            "geoLocation": [
              72.4758404,
              23.0294413
            ],
            "mobileCountryCode": "+91",
            "mobileNumber": "9879275055",
            "email": "timirkumarpatel@gmail.com",
            "address": {
              "_id": "5b52d1ea008d470019044b4b",
              "area": "Bopal",
              "cityName": "Ahmedabad",
              "city_id": "5ae95080f975cd00076adbd2"
            },
            "contactDetails": {
              "_id": "5b52d1ea008d470019044b4c",
              "emails": [
                null
              ],
              "contactNumbers": []
            },
            "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1532154245/1/23319132_500105473693397_3232028995477345742_n_jsng08.jpg",
            "speciality": "Bhajee Pav",
            "mid": "1",
            "merchant": "5b52d1e8008d470019044b44",
            "branchId": "RST1863030834",
            "ratingsMetadata": {
              "averageRatings": 4,
              "totalRatingsCount": 2
            },
            "status": {
              "alias": "PUBLISHED",
              "name": "Published",
              "show": true,
              "_id": "5b7677745a73e000199084c0"
            },
            "isDeleted": false,
            "isActive": true,
            "isPromoted": false,
            "priority": 0,
            "cuisines": [
              "Indian",
              "Western",
              "Japanese"
            ],
            "user": "281",
            "iconImage": "https://res.cloudinary.com/fd-cdn/image/upload/v1534483417/5b52d1e8008d470019044b44/solo_store_nnw4ig.jpg",
            "rank": 99,
            "slug": "foodbites-restaurant-bopal",
            "dealsInfo": {
              "totalFlashDeals": 1,
              "flashDeal": {
                "_id": "5ceca24dd7db04001ca237e2",
                "label": "Super Deal",
                "description": "The Demo Deal",
                "dealCategory": "FLASH_DEALS",
                "dealType": "DISCOUNT",
                "valueType": "PERCENTAGE",
                "offerMaxCounter": 100,
                "offerMaxPaxCounter": 1,
                "institution": null,
                "dealId": "D2243849061",
                "isActive": true,
                "cards": [],
                "dateTimeRanges": [
                  {
                    "updatedAt": "2019-05-28T02:51:57.361Z",
                    "createdAt": "2019-05-28T02:51:57.361Z",
                    "_id": "5ceca24dd7db04001ca237e3",
                    "dateRange": [
                      {
                        "updatedAt": "2019-05-28T02:51:57.362Z",
                        "createdAt": "2019-05-28T02:51:57.362Z",
                        "fromDate": "2019-05-28T00:00:00.000Z",
                        "toDate": "2019-06-30T00:00:00.000Z",
                        "_id": "5ceca24dd7db04001ca237e4"
                      }
                    ],
                    "timeRange": [
                      {
                        "updatedAt": "2019-05-28T02:51:57.362Z",
                        "createdAt": "2019-05-28T02:51:57.362Z",
                        "timingTo": "1970-01-01T20:00:00.000Z",
                        "timingFrom": "1970-01-01T12:00:00.000Z",
                        "_id": "5ceca24dd7db04001ca237e5"
                      }
                    ]
                  }
                ],
                "termsAndConditions": [],
                "channels": [
                  "WEB",
                  "MOBILE"
                ],
                "bogoGet": 0,
                "bogoBuy": 0,
                "freeItemDescription": "0",
                "value": 50,
                "nextAvailableTimeSlot": {
                  "updatedAt": "2019-05-28T02:51:57.362Z",
                  "createdAt": "2019-05-28T02:51:57.362Z",
                  "timingTo": "1970-01-01T20:00:00.000Z",
                  "timingFrom": "1970-01-01T12:00:00.000Z",
                  "_id": "5ceca24dd7db04001ca237e5"
                }
              },
              "totalPromos": 0,
              "totalDeals": 2
            },
            "isLiked": false
          }
        ]
      },
      {
        "_id": "5b48e6dc37b41300195368a0",
        "name": "POPULAR PLACES NEARBY",
        "shortName": null,
        "imageURL": null,
        "mid": "1",
        "createdByUser": "hushen.savani@iwantunlimited.com",
        "createdByUserType": "MarketPlaceAdmin",
        "bannerImageURL": null,
        "updatedByUser": "hushen.savani@iwantunlimited.com",
        "updatedByUserType": "MarketPlaceAdmin",
        "isActive": true,
        "priority": 96,
        "channels": [
          "MOBILE",
          "WEB"
        ],
        "applicableTo": [
          "HOME"
        ],
        "collectionTemplate": "2x2",
        "collectionType": "FILTERED",
        "isFeaturedCollection": false,
        "isCuratedCollection": false,
        "numberOfrestaurants": 10,
        "restaurants": [
          {
            "_id": "5b63017588aacf00191e3d0f",
            "name": "Jayveer Pizza shop",
            "geoLocation": [
              72.5123741,
              23.0381257
            ],
            "mobileCountryCode": "+91",
            "mobileNumber": "9409277276",
            "email": "zajugenani@hurify1.com",
            "address": {
              "_id": "5b63017588aacf00191e3d03",
              "area": "Bodakdev",
              "cityName": "Ahmedabad",
              "city_id": "5ae95080f975cd00076adbd2"
            },
            "contactDetails": {
              "_id": "5b63017588aacf00191e3d04",
              "emails": [],
              "contactNumbers": []
            },
            "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1533173436/1/wax3_m46jtm.jpg",
            "speciality": "Pizza",
            "mid": "1",
            "merchant": "5b62fdf688aacf00191e3bfa",
            "branchId": "RST1473166695",
            "ratingsMetadata": {
              "averageRatings": 1,
              "totalRatingsCount": 1
            },
            "status": {
              "alias": "PUBLISHED",
              "name": "Published",
              "show": true,
              "_id": "5b63029d88aacf00191e3dee"
            },
            "isDeleted": false,
            "isActive": true,
            "isPromoted": false,
            "priority": 0,
            "cuisines": [
              "Asian",
              "Indonesian",
              "Balinese",
              "Manado",
              "Jawanese",
              "Sundanese",
              "Chinese",
              "Cantonese",
              "Dimsums",
              "Italian",
              "French",
              "Continental",
              "Indian",
              "Singaporean",
              "Western",
              "Malaysian",
              "Goan",
              "Chettinad",
              "Mexican"
            ],
            "user": "363",
            "rank": -66,
            "slug": "jayveer-pizza-shop-bodakdev",
            "dealsInfo": {
              "totalFlashDeals": 0,
              "totalPromos": 0,
              "totalDeals": 0
            },
            "isLiked": false
          },
          {
            "_id": "5b3fb91e8259430019dc96fd",
            "name": "Lapinos Pizza Shop",
            "geoLocation": [
              72.5123741,
              23.0381257
            ],
            "mobileCountryCode": "+62",
            "mobileNumber": "987987987987",
            "email": "lapinos@g.com",
            "address": {
              "_id": "5b3fb91e8259430019dc96f2",
              "area": "Bodakdev",
              "cityName": "Ahmedabad",
              "city_id": "5ae95080f975cd00076adbd2"
            },
            "contactDetails": {
              "_id": "5b3fb91e8259430019dc96f3",
              "emails": [
                "lapinos@g.com"
              ],
              "contactNumbers": [
                {
                  "num": "987987987987",
                  "ext": null,
                  "areaCode": null,
                  "countryCode": "+62",
                  "numberType": "MOBILE",
                  "_id": "5b3fb91e8259430019dc96f4"
                }
              ]
            },
            "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1526470402/1/me-2_zafjif.jpg",
            "speciality": "  It's a place where you get unlimited pizza with lots of Variety of Salads, pasta, garlic breads and Nachos. This all at very reasonable cost for per person.  The best thing in Hot Manchow Soup, Secondly Nachos with variety of dishes tasted so well.  Garlic breads are soft and tasty, Pizza was cheesylicious loaded with toppings. The interiors are so beautiful, The seating area is so spacious and big.. Service is prompt and fast.",
            "mid": "1",
            "merchant": "5b3fb91a8259430019dc96eb",
            "branchId": "RST7935132036",
            "ratingsMetadata": {
              "averageRatings": 2.8,
              "totalRatingsCount": 2
            },
            "isActive": true,
            "isPromoted": false,
            "priority": 0,
            "cuisines": [],
            "user": "192",
            "status": {
              "alias": "PUBLISHED",
              "name": "Published",
              "show": true,
              "_id": "5b532b38a71ecb0019e1ca1f"
            },
            "isDeleted": false,
            "slug": "lapinos-pizza-shop-bodakdev",
            "rank": -8,
            "dealsInfo": {
              "totalFlashDeals": 0,
              "totalPromos": 0,
              "totalDeals": 0
            },
            "isLiked": false
          },
          {
            "_id": "5b3f3ea64be7420019bcea09",
            "name": "ovesh pizza shop",
            "geoLocation": [
              72.50870540000001,
              23.0294577
            ],
            "mobileCountryCode": "+91",
            "mobileNumber": "9662775451",
            "email": "ovesh.parasara@iwantunlimited.com",
            "address": {
              "_id": "5b3f3ea64be7420019bce9ff",
              "area": "test",
              "cityName": "Ahmedabad",
              "city_id": "5ae95080f975cd00076adbd2"
            },
            "contactDetails": {
              "_id": "5b3f3ea64be7420019bcea00",
              "emails": [
                "ovesh.parasara@iwantunlimited.com"
              ],
              "contactNumbers": [
                {
                  "num": "9662775451",
                  "ext": null,
                  "areaCode": null,
                  "countryCode": "+91",
                  "numberType": "MOBILE",
                  "_id": "5b3f3ea64be7420019bcea02"
                },
                {
                  "num": "9662775451",
                  "ext": "52",
                  "areaCode": "0",
                  "countryCode": "+91",
                  "numberType": "LANDLINE",
                  "_id": "5b3f3ea64be7420019bcea01"
                }
              ]
            },
            "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1530860206/5b1675eab224f2001ee4672a/me-2_eynvk2.jpg",
            "speciality": null,
            "mid": "1",
            "merchant": "5b1675eab224f2001ee4672a",
            "branchId": "RST4234263728",
            "ratingsMetadata": {
              "averageRatings": 3,
              "totalRatingsCount": 2
            },
            "isActive": true,
            "isPromoted": false,
            "priority": 0,
            "cuisines": [],
            "user": "188",
            "status": {
              "alias": "PUBLISHED",
              "show": true,
              "name": "Published",
              "_id": "5b61c6c588aacf00191df657"
            },
            "isDeleted": false,
            "slug": "ovesh-pizza-shop-test",
            "rank": 13,
            "dealsInfo": {
              "totalFlashDeals": 0,
              "totalPromos": 0,
              "totalDeals": 0
            },
            "isLiked": false
          },
          {
            "_id": "5b4354d7e9ef390019a43ac1",
            "name": "dell",
            "mobileCountryCode": "+91",
            "mobileNumber": "99744167855",
            "email": "kelvin.sarvaiya123@iwantunlimited.com",
            "contactDetails": {
              "_id": "5b4354d7e9ef390019a43ac0",
              "emails": [
                "kelvin.sarvaiya123@iwantunlimited.com"
              ],
              "contactNumbers": []
            },
            "mid": "1",
            "merchant": "5b4354d3e9ef390019a43aba",
            "branchId": "RST7541837816",
            "ratingsMetadata": {
              "averageRatings": 3,
              "totalRatingsCount": 2
            },
            "isActive": true,
            "isPromoted": false,
            "priority": 0,
            "cuisines": [],
            "user": "203",
            "address": {
              "_id": "5b435cf572bdb60019e11909",
              "area": "test",
              "city_id": "5ae95080f975cd00076adbd2",
              "cityName": "Ahmedabad"
            },
            "geoLocation": [
              72.55406099999999,
              23.0197511
            ],
            "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1531141425/5b4354d3e9ef390019a43aba/re-1_qohtje.jpg",
            "status": {
              "alias": "PUBLISHED",
              "name": "Published",
              "show": true,
              "_id": "5b5327dda71ecb0019e1c7d3"
            },
            "isDeleted": false,
            "slug": "dell-test",
            "rank": 8,
            "dealsInfo": {
              "totalFlashDeals": 0,
              "totalPromos": 0,
              "totalDeals": 0
            },
            "isLiked": false
          }
        ]
      },
      {
        "_id": "5b13d02ce2299e001979ea4f",
        "name": "AMAZING 30-40% DISCOUNTS!",
        "shortName": "AMAZING 30-40% DISCOUNTS!",
        "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1526470139/1/lapinos-z-pizza_ckvoig.jpg",
        "mid": "1",
        "createdByUser": "hushen.savani@iwantunlimited.com",
        "createdByUserType": "MarketPlaceAdmin",
        "bannerImageURL": null,
        "updatedByUser": "hushen.savani@iwantunlimited.com",
        "updatedByUserType": "MarketPlaceAdmin",
        "isActive": true,
        "priority": 96,
        "channels": [
          "WEB",
          "MOBILE"
        ],
        "applicableTo": [
          "PROMOTIONS",
          "HOME"
        ],
        "collectionTemplate": "2x2",
        "collectionType": "FILTERED",
        "isFeaturedCollection": true,
        "isCuratedCollection": false,
        "numberOfrestaurants": 1,
        "restaurants": [
          {
            "_id": "5b1675ebb224f2001ee46738",
            "name": "Pizza Shop",
            "geoLocation": [
              72.5568843,
              23.0138009
            ],
            "mobileCountryCode": "+91",
            "mobileNumber": "9427553311",
            "email": "hardik.tilva@iwantunlimited.com",
            "address": {
              "_id": "5b1675ebb224f2001ee4672f",
              "area": "Mega Kuningan Test Test Test Test Test Test Test Test",
              "cityName": "Ahmedabad",
              "city_id": "5ae95080f975cd00076adbd2"
            },
            "contactDetails": {
              "_id": "5b1675ebb224f2001ee46730",
              "emails": [
                "hermawan.mulyono251290@yahoo.com"
              ],
              "contactNumbers": [
                {
                  "numberType": "MOBILE",
                  "countryCode": "+62",
                  "areaCode": null,
                  "ext": null,
                  "num": "081288667806",
                  "_id": "5b3b1097b753850019de05c8"
                },
                {
                  "numberType": "MOBILE",
                  "countryCode": "+62",
                  "areaCode": null,
                  "ext": null,
                  "num": "67854754677",
                  "_id": "5c80e9efdcbe2a001c560262"
                },
                {
                  "numberType": "MOBILE",
                  "countryCode": "+62",
                  "areaCode": null,
                  "ext": null,
                  "num": "343434355",
                  "_id": "5c80e9efdcbe2a001c560261"
                },
                {
                  "numberType": "LANDLINE",
                  "countryCode": "+62",
                  "areaCode": "079",
                  "ext": "234",
                  "num": "3463463435",
                  "_id": "5c80e9efdcbe2a001c560260"
                },
                {
                  "numberType": "LANDLINE",
                  "countryCode": "+62",
                  "areaCode": "079",
                  "ext": "123",
                  "num": "34346363453",
                  "_id": "5c80e9efdcbe2a001c56025f"
                },
                {
                  "numberType": "LANDLINE",
                  "countryCode": "+62",
                  "areaCode": "079",
                  "ext": "222",
                  "num": "42345235234234",
                  "_id": "5c80e9efdcbe2a001c56025e"
                }
              ]
            },
            "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1526542206/1/pizza_rfcuv9.jpg",
            "speciality": "in Pizza and Pasta",
            "mid": "1",
            "merchant": "5b1675eab224f2001ee4672a",
            "branchId": "RST3462720167",
            "ratingsMetadata": {
              "totalRatingsCount": 9,
              "averageRatings": 3.7
            },
            "isActive": true,
            "isPromoted": false,
            "priority": 0,
            "cuisines": [
              "Asian",
              "Indonesian",
              "French",
              "Indian"
            ],
            "user": "141",
            "updatedByUser": "hushen.savani@iwantunlimited.com",
            "status": {
              "alias": "PUBLISHED",
              "_id": "5b534ed1608b3f0019d5a233",
              "name": "Published",
              "show": true
            },
            "isDeleted": false,
            "iconImage": "https://res.cloudinary.com/fd-cdn/image/upload/v1530860217/5b1675eab224f2001ee4672a/re-2_c7469j.jpg",
            "rank": 840,
            "slug": "pizza-shop-makarba",
            "enableOutletBooking": true,
            "dealsInfo": {
              "totalFlashDeals": 3,
              "flashDeal": {
                "_id": "5cde59ca4d3a37001c72bf2c",
                "label": "All day flash deal",
                "description": "All day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash deal",
                "dealCategory": "FLASH_DEALS",
                "dealType": "DISCOUNT",
                "valueType": "PERCENTAGE",
                "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1530856440/5b1675eab224f2001ee4672a/pizza_m3im3w.jpg",
                "offerMaxCounter": 500,
                "offerMaxPaxCounter": 50,
                "institution": null,
                "dealId": "D6745989372",
                "isActive": true,
                "cards": [],
                "dateTimeRanges": [
                  {
                    "updatedAt": "2019-05-17T06:50:50.904Z",
                    "createdAt": "2019-05-17T06:50:50.904Z",
                    "_id": "5cde59ca4d3a37001c72bf2d",
                    "dateRange": [
                      {
                        "updatedAt": "2019-05-17T06:50:50.904Z",
                        "createdAt": "2019-05-17T06:50:50.904Z",
                        "fromDate": "2019-05-17T00:00:00.000Z",
                        "toDate": "2019-08-31T00:00:00.000Z",
                        "_id": "5cde59ca4d3a37001c72bf2e"
                      }
                    ],
                    "timeRange": [
                      {
                        "updatedAt": "2019-05-17T06:50:50.904Z",
                        "createdAt": "2019-05-17T06:50:50.904Z",
                        "timingTo": "1970-01-01T23:30:00.000Z",
                        "timingFrom": "1970-01-01T07:00:00.000Z",
                        "_id": "5cde59ca4d3a37001c72bf2f"
                      }
                    ]
                  }
                ],
                "termsAndConditions": [
                  "All day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash dealAll day flash deal"
                ],
                "channels": [
                  "WEB",
                  "MOBILE"
                ],
                "bogoGet": 0,
                "bogoBuy": 0,
                "freeItemDescription": "0",
                "value": 15,
                "nextAvailableTimeSlot": {
                  "updatedAt": "2019-05-17T06:50:50.904Z",
                  "createdAt": "2019-05-17T06:50:50.904Z",
                  "timingTo": "1970-01-01T23:30:00.000Z",
                  "timingFrom": "1970-01-01T07:00:00.000Z",
                  "_id": "5cde59ca4d3a37001c72bf2f"
                }
              },
              "totalPromos": 2,
              "promotion": {
                "_id": "5cde45994d3a37001c5c3c92",
                "label": "Breakfast promo deal 40% off",
                "description": "Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%",
                "dealCategory": "PROMOTIONS",
                "dealType": "DISCOUNT",
                "valueType": "PERCENTAGE",
                "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1530860210/5b1675eab224f2001ee4672a/re-3_drtlqv.jpg",
                "institution": null,
                "dealId": "D6952698856",
                "isActive": true,
                "cards": [],
                "dateTimeRanges": [
                  {
                    "_id": "5cde45994d3a37001c5c3c93",
                    "createdAt": "2019-05-17T05:24:41.485Z",
                    "updatedAt": "2019-05-17T05:24:41.485Z",
                    "dateRange": [
                      {
                        "toDate": "2019-08-31T00:00:00.000Z",
                        "fromDate": "2019-05-17T00:00:00.000Z",
                        "_id": "5cde48704d3a37001c5e51de"
                      }
                    ],
                    "timeRange": [
                      {
                        "timingFrom": "1970-01-01T07:00:00.000Z",
                        "timingTo": "1970-01-01T11:30:00.000Z",
                        "_id": "5cde48704d3a37001c5e51df"
                      }
                    ]
                  }
                ],
                "termsAndConditions": [
                  "Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%Breakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40% offBreakfast promo deal 40%"
                ],
                "channels": [
                  "WEB",
                  "MOBILE"
                ],
                "bogoGet": 0,
                "bogoBuy": 0,
                "freeItemDescription": "0",
                "value": 40,
                "nextAvailableTimeSlot": {
                  "timingFrom": "1970-01-01T07:00:00.000Z",
                  "timingTo": "1970-01-01T11:30:00.000Z",
                  "_id": "5cde48704d3a37001c5e51df"
                }
              },
              "totalDeals": 12
            },
            "isLiked": false
          }
        ]
      },
      {
        "_id": "5b4f634a7a1452001941f778",
        "name": "BCA CREDIT CARD OFFERS",
        "shortName": null,
        "imageURL": null,
        "mid": "1",
        "createdByUser": "hushen.savani@iwantunlimited.com",
        "createdByUserType": "MarketPlaceAdmin",
        "isActive": true,
        "priority": 95,
        "channels": [
          "WEB",
          "MOBILE"
        ],
        "applicableTo": [
          "CARD_OFFERS",
          "HOME"
        ],
        "collectionTemplate": "2x2",
        "collectionType": "FILTERED",
        "isFeaturedCollection": false,
        "isCuratedCollection": false,
        "numberOfrestaurants": 0,
        "restaurants": []
      },
      {
        "_id": "5b65dc59f4fb460019d60422",
        "name": "UOB CARD OFFERS",
        "shortName": null,
        "imageURL": null,
        "mid": "1",
        "createdByUser": "hushen.savani@iwantunlimited.com",
        "createdByUserType": "MarketPlaceAdmin",
        "isActive": true,
        "priority": 94,
        "channels": [
          "WEB",
          "MOBILE"
        ],
        "applicableTo": [
          "CARD_OFFERS",
          "HOME"
        ],
        "collectionTemplate": "2x2",
        "collectionType": "FILTERED",
        "isFeaturedCollection": false,
        "isCuratedCollection": false,
        "numberOfrestaurants": 0,
        "restaurants": []
      },
      {
        "_id": "5b6b09dc67f8050019d6ed74",
        "name": "Free Items",
        "shortName": null,
        "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1533741509/5b63d35588aacf00191e5629/free_kaw97q.png",
        "mid": "1",
        "createdByUser": "hushen.savani@iwantunlimited.com",
        "createdByUserType": "MarketPlaceAdmin",
        "isActive": true,
        "priority": 85,
        "channels": [
          "WEB",
          "MOBILE"
        ],
        "applicableTo": [
          "PROMOTIONS",
          "HOME"
        ],
        "collectionTemplate": "3x3",
        "collectionType": "FILTERED",
        "isFeaturedCollection": false,
        "isCuratedCollection": false,
        "numberOfrestaurants": 0,
        "restaurants": []
      }
    ]
  }

  /*loadCollections(){

    this.collectionsService.getCollections().subscribe(data =>{
      this.collections = data['docs']

      console.log("this.collections",this.collections)


    }, err=>{
      console.log(err)
    })
  }*/
}
