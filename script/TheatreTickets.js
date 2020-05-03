let buyButton = document.getElementById("buyButton")

buyButton.addEventListener("click", buyClicked);

function buyClicked() {
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value

    let s = document.getElementById("show");
    let showPrice = s.options[s.selectedIndex].value;
    let showName = s.options[s.selectedIndex].text;

    let Radio1 = document.getElementById("eticket");
    let Radio2 = document.getElementById("phone");
    let Radio3 = document.getElementById("post");

    let DeliveryType = "";
    let DeliveryAmount = 0;

    let seats = document.getElementById("seats").value;

    let NoDiscount = 0;
    let Discount = 0;
    let discountAmount = 0;
    let INCDiscount = 0;

    if (Radio1.checked) {
        DeliveryType = "eTicket";
        DeliveryAmount = 0.00;
    } else if (Radio2.checked) {
        DeliveryType = "Collection";
        DeliveryAmount = 1.50;
    } else if (Radio3.checked) {
        DeliveryType = "Post";
        DeliveryAmount = 3.99;
    }


    NoDiscount += showPrice * seats;

    if (seats >= 6 && seats < 10) {
        Discount = 10;
        discountAmount = NoDiscount * 0.1;
        INCDiscount = NoDiscount - discountAmount;
    } else if (seats >= 10) {
        Discount = 15;
        discountAmount = NoDiscount * 0.15;
        INCDiscount = NoDiscount - discountAmount;
    }

    document.getElementById("Display").innerHTML =
        "Sale Information:" +
        "<br><br>" + "Single ticket cost:£ " + showPrice + "<br>" + seats + " tickets purchased for " + showName +
        "<br>Subtotal: £ " + NoDiscount.toFixed(2) +
        "<br>" + "Tickets do not qualify for any discount." + "<br>" + "Delivery method chosen: " + DeliveryType +
        "<br>Delivery charge: £ " + DeliveryAmount.toFixed(2) +
        "<br>Total: £ " + (NoDiscount + DeliveryAmount).toFixed(2) +
        "<br><br>Contact Details:" +
        "<br><br>Name: " + name +
        "<br>Address: " + address;

    if (Discount >= 10) {
        document.getElementById("Display").innerHTML =
            "Sale Information:" +
            "<br><br>" + "Single ticket cost:£ " + showPrice + "<br>" + seats + " tickets purchased for " + showName +
            "<br>Subtotal: £ " + NoDiscount.toFixed(2) +
            "<br>" + Discount + "% discount applied: £ " + discountAmount.toFixed(2) +
            "<br>" + "Delivery method chosen: " + DeliveryType +
            "<br>Delivery charge: £ " + DeliveryAmount.toFixed(2) +
            "<br>Total: £ " + (INCDiscount + DeliveryAmount).toFixed(2) +
            "<br><br>Contact Details" +
            "<br><br>Name: " + name +
            "<br>Address: " + address;

    }
}