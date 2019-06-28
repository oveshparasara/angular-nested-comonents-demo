import { Component, OnInit } from '@angular/core';
import {COLLECTIONS} from "../collections/collections";
import {CollectionsService} from "../services/collections.service";

@Component({
  selector: 'app-flash-deal-collections-list',
  templateUrl: './flash-deal-collections-list.component.html',
  styleUrls: ['./flash-deal-collections-list.component.scss']
})
export class FlashDealCollectionsListComponent implements OnInit {
  collections = COLLECTIONS;
  constructor(private collectionsService: CollectionsService) { }

  ngOnInit() {
    this.collections = [
      {
        "_id": "5b557678d23e5b0019f8656e",
        "name": "Test Curated Collection From Iwant",
        "shortName": "Pizza",
        "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1532068621/1/second_bite_y7gpg9.jpg",
        "createdByUser": "hushen.savani@iwantunlimited.com",
        "createdByUserType": "MarketPlaceAdmin",
        "mid": "1",
        "isActive": true,
        "priority": 100,
        "channels": [
          "WEB",
          "MOBILE"
        ],
        "applicableTo": [
          "HOME",
          "FLASH_DEALS",
          "PROMOTIONS",
          "CARD_OFFERS"
        ],
        "collectionTemplate": "3x3",
        "collectionType": "MANUAL",
        "isFeaturedCollection": false,
        "isCuratedCollection": true,
        "numberOfrestaurants": 2,
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
            "user": "141",
            "updatedByUser": "hushen.savani@iwantunlimited.com",
            "iconImage": "https://res.cloudinary.com/fd-cdn/image/upload/v1530860217/5b1675eab224f2001ee4672a/re-2_c7469j.jpg",
            "slug": "pizza-shop-makarba",
            "enableOutletBooking": true,
            "rank": 840,
            "ratingsMetadata": {
              "totalRatingsCount": 9,
              "averageRatings": 3.7
            },
            "status": {
              "name": "Published",
              "show": true,
              "_id": "5b534ed1608b3f0019d5a233",
              "alias": "PUBLISHED"
            },
            "isDeleted": false,
            "isActive": true,
            "isPromoted": false,
            "priority": 0,
            "cuisines": [
              "French",
              "Indian",
              "Indonesian",
              "Asian"
            ],
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
              "totalPromos": 8,
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
          },
          {
            "_id": "5b3f13084be7420019bcdbc7",
            "name": "New Pizza Shop",
            "geoLocation": [
              72.507417,
              23.0012857
            ],
            "mobileCountryCode": "+91",
            "mobileNumber": "9427553333",
            "email": "karanpizza@g.com",
            "address": {
              "_id": "5b3f13084be7420019bcdbbd",
              "area": "Makarba",
              "cityName": "Ahmedabad",
              "city_id": "5ae95080f975cd00076adbd2"
            },
            "contactDetails": {
              "_id": "5b3f13084be7420019bcdbbe",
              "emails": [
                "karanpizza@g.com"
              ],
              "contactNumbers": [
                {
                  "_id": "5b3f13084be7420019bcdbc0",
                  "numberType": "MOBILE",
                  "countryCode": "+91",
                  "areaCode": null,
                  "ext": null,
                  "num": "9427553333"
                },
                {
                  "_id": "5b3f13084be7420019bcdbbf",
                  "numberType": "LANDLINE",
                  "countryCode": "+62",
                  "areaCode": "079",
                  "ext": "22",
                  "num": "9427553333"
                }
              ]
            },
            "imageURL": "https://res.cloudinary.com/fd-cdn/image/upload/v1530856440/5b1675eab224f2001ee4672a/pizza_m3im3w.jpg",
            "speciality": "  It's a place where you get unlimited pizza with lots of Variety of Salads, pasta, garlic breads and Nachos. This all at very reasonable cost for per person.  The best thing in Hot Manchow Soup, Secondly Nachos with variety of dishes tasted so well.  Garlic breads are soft and tasty, Pizza was cheesylicious loaded with toppings. The interiors are so beautiful, The seating area is so spacious and big.. Service is prompt and fast.",
            "mid": "1",
            "merchant": "5b1675eab224f2001ee4672a",
            "branchId": "RST4770791425",
            "user": "187",
            "slug": "new-pizza-shop-makarba",
            "enableOutletBooking": false,
            "rank": 21,
            "ratingsMetadata": {
              "totalRatingsCount": 6,
              "averageRatings": 3.8
            },
            "status": {
              "show": true,
              "name": "Published",
              "_id": "5b57514939cc0300197c1f1f",
              "alias": "PUBLISHED"
            },
            "isDeleted": false,
            "isActive": true,
            "isPromoted": false,
            "priority": 0,
            "cuisines": [],
            "dealsInfo": {
              "totalFlashDeals": 0,
              "totalPromos": 0,
              "totalDeals": 0
            },
            "isLiked": false
          }
        ]
      }
    ]
  }

  /*loadCollections(){

    this.collectionsService.getFlashdealCollection().subscribe(data =>{
      this.collections = data['docs']

      console.log("this.collections",this.collections)


    }, err=>{
      console.log(err)
    })
  }*/


}
