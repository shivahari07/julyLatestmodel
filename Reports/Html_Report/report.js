$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking in Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User Login in the Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch the Adactin in Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter the \"jivitha04\" in Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter the \"123456\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click the Login Button And it Navigates to search Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_the_Adactin_in_Application()"
});
formatter.result({
  "duration": 3400542900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jivitha04",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_the_in_Username_Field(String)"
});
formatter.result({
  "duration": 344875500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_the_in_password_field(String)"
});
formatter.result({
  "duration": 164037000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_the_Login_Button_And_it_Navigates_to_search_Hotel_page()"
});
formatter.result({
  "duration": 451578200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User Entering the details in Registration form",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-entering-the-details-in-registration-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user Select the location from Dropdown menu",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user Select the Number of rooms from Dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Select the Adults-per-room from Dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click the Search Button And it Navigates to SelectHotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_the_location_from_Dropdown_menu()"
});
formatter.result({
  "duration": 550203000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Number_of_rooms_from_Dropdown_menu()"
});
formatter.result({
  "duration": 167043600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Adults_per_room_from_Dropdown_menu()"
});
formatter.result({
  "duration": 195458400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_the_Search_Button_And_it_Navigates_to_SelectHotel_page()"
});
formatter.result({
  "duration": 492843300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User Select the Hotel in Select hotel page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-select-the-hotel-in-select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user can click radio-button tp Select the Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user can click the continue button And it navigate to BookHotelpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_can_click_radio_button_tp_Select_the_Hotel()"
});
formatter.result({
  "duration": 111353900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_can_click_the_continue_button_And_it_navigate_to_BookHotelpage()"
});
formatter.result({
  "duration": 538872400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User can enter the personal details in BookHotel page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-can-enter-the-personal-details-in-bookhotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user can Enter the first name in Name textbox",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user can enter the last name in lastname field",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user can Enter the adress in Billing address field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user can Enter the Credit Card No in Credit Card Number field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user can Select the Credit Card Type in Credit Card Type dropdown menu",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user can Select month and year in Expiry Date field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user can enter the 3 digit cvv number in cvv number field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user can click the Book now button And it navigate to BookingConfirm page.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_can_Enter_the_first_name_in_Name_textbox()"
});
formatter.result({
  "duration": 190845200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_can_enter_the_last_name_in_lastname_field()"
});
formatter.result({
  "duration": 148501600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_can_Enter_the_adress_in_Billing_address_field()"
});
formatter.result({
  "duration": 169672600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_can_Enter_the_Credit_Card_No_in_Credit_Card_Number_field()"
});
formatter.result({
  "duration": 173169600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_can_Select_the_Credit_Card_Type_in_Credit_Card_Type_dropdown_menu()"
});
formatter.result({
  "duration": 208502000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_can_Select_month_and_year_in_Expiry_Date_field()"
});
formatter.result({
  "duration": 214069500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "StepDefinition.user_can_enter_the_digit_cvv_number_in_cvv_number_field(int)"
});
formatter.result({
  "duration": 212752300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_can_click_the_Book_now_button_And_it_navigate_to_BookingConfirm_page()"
});
formatter.result({
  "duration": 135784200,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User Check The Booking details and Logout from application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-check-the-booking-details-and-logout-from-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user can check the booking details in this page",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user can click Logout button And it navigate to Logout page.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_can_check_the_booking_details_in_this_page()"
});
formatter.result({
  "duration": 123606200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_can_click_Logout_button_And_it_navigate_to_Logout_page()"
});
formatter.result({
  "duration": 6033596100,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "If User want to relogin We can use this page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;if-user-want-to-relogin-we-can-use-this-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@regressionTest"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "user can click- \"Click here to login again\" And it will navigate to index page that is Login page.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});