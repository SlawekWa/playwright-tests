import { defineConfig, test, request, expect } from '@playwright/test';
import { timeStamp } from 'console';

// test.only('login page with failing assertion', async ({ page }) => { - run only this test -> test.only
const endpoint = "https://restful-booker.herokuapp.com";


test.describe('grupa testow api', () => {

    let respObj: any = undefined;

    test.beforeAll(async ({ request }) => {
        const auth = await request.post(`${endpoint}/auth`, {
            data: {
                "username": process.env.USER_NAME,
                "password": process.env.PASSWORD
            }
        });
        respObj = await auth.json();
        console.log(respObj.token);
    });

    test.only('simple Api test', async ({ request }) => {
        // Arrange
        const updateBooking = await request.put(`${endpoint}/booking/1`, { // hardcoded booking id
            headers: {
                // "Authorization": respObj.token,
                "Cookie": `token=${respObj.token}`
            },
            data: {
                "firstname": "James",
                "lastname": "Brown",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": `Breakfast and some edited stuff + ${timeStamp}`
            }
        });

        const respObjBooking = await updateBooking.json();
        console.log(respObjBooking);

        expect(updateBooking.status()).toBe(200);
        expect(respObjBooking.firstname).toBe("James")

    });
})