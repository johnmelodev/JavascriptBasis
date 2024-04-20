// FLOW OF OPERATION
let continueLoop = true;
do {
    let option = prompt("Choose an option:\n1 - Register hotel\n2 - Register Reservation\n3 - Search reservation by hotel\n4 - Search hotel by reservation\n5 - Search reservation by responsible\n6 - Search hotels by category\n7 - Update hotel phone\n8 - End the program");

    switch (option) {
        case "1":
            RegisterHotel();
            break;
        case "2":
            RegisterReservation();
            break;
        case "3":
            SearchReservationsByHotel(prompt("Enter the hotel id"));
            break;
        case "4":
            SearchHotelByReservation(prompt("Enter the reservation id"));
            break;
        case "5":
            SearchReservationByName(prompt("Enter the name of the person responsible for the reservation"));
            break;
        case "6":
            SearchHotelByCategory(parseInt(prompt("Enter the category you want to search")));
            break;
        case "7":
            let idHotel = parseInt(prompt("Enter the id of the hotel you want to update"));
            let phone = prompt("Enter the new phone");
            UpdatePhone(idHotel, phone);
            break;
        case "8":
            console.log("Program ended");
            continueLoop = false;
            break;
        default:
            console.log("Invalid option");
            break;
    }
} while (continueLoop);

// FUNCTION TO UPDATE HOTEL PHONE
function UpdatePhone(idHotel, phone) {
    hotels[idHotel - 1].Phone = phone;
    console.log("Phone number updated!");
}

// FUNCTION TO SEARCH HOTELS BY CATEGORY
function SearchHotelByCategory(category) {
    let searchedHotels = [];
    for (let i = 0; i < hotels.length; i++) {
        if (category === hotels[i].Category) {
            searchedHotels.push(hotels[i]);
        }
    }
    console.log(searchedHotels);
    return searchedHotels;
}
