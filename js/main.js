function writeHTMLContent() {

    document.getElementById("auctionStatus").innerHTML = data.auction.auction_status;
    document.getElementById("createdAt").innerHTML = data.auction.created_at;
    document.getElementById("auctionID").innerHTML = data.auction.id;

    document.getElementById("dealType").innerHTML = data.auction.deal_type;
    document.getElementById("auctionType").innerHTML = data.auction.auction_type;
    document.getElementById("deadline").innerHTML = data.auction.deadline;
    document.getElementById("startPrice").innerHTML = data.auction.start_price;

    document.getElementById("labels").innerHTML = data.order.labels;
    document.getElementById("volume").innerHTML = data.order.volume;
    document.getElementById("deliveryDate").innerHTML = data.order.delivery_date;
    document.getElementById("technologies").innerHTML = data.order.technologies;
    document.getElementById("vintage").innerHTML = data.order.vintage;
    document.getElementById("support").innerHTML = data.order.support ? "Yes" : "No";

}

writeHTMLContent();




// Create new div element for each countries in data.order.origins
function createCountries(){       
    
    var countries = data.order.origins;

    for (var country in countries) {

        var countryName = countries[country];

        //Create div with id and classname
        var countryWrapperElement = document.createElement("div");
        countryWrapperElement.id = countryName;
        countryWrapperElement.className = "gm_section-auction__country";

        //Write in this div the country name
        countryWrapperElement.innerHTML = countryName;

        //Put the div into DOM
        document.getElementById("origins").appendChild(countryWrapperElement);

        //add flag img
        var flag = document.createElement("IMG");
        flag.setAttribute("src", "assets/img/flag/" + countryName + ".jpg");
        flag.setAttribute("width", "20");
        flag.setAttribute("height", "20");
        flag.setAttribute("alt", "Flag of " + countryName);
        //Put the flag img before the first child of the parent(= document.getElementById(countryName))
        document.getElementById(countryName).prepend(flag);
    } 

}      

createCountries();




// Create new table row for each offers in data.offers
function createOffers(){

    var offers = data.offers;

    for (var offer in offers) {

        var offer = offers[offer];

        //Create new table row and add the offer id as id
        var tableRowElement = document.createElement("tr");
        tableRowElement.id = offer.id;

        //Put the table row into the table body
        document.getElementById("offerTable").appendChild(tableRowElement);

        //Create table datas

        //Id
        var tableDataElement = document.createElement("td");
        tableDataElement.innerHTML = offer.id;
        document.getElementById(offer.id).appendChild(tableDataElement);

        //Technologies
        var tableDataElement = document.createElement("td");
        tableDataElement.innerHTML = offer.technologies;
        document.getElementById(offer.id).appendChild(tableDataElement);

        //Status
        var tableDataElement = document.createElement("td");
        document.getElementById(offer.id).appendChild(tableDataElement);
        var offerIDIsInTransactions = data.transactions.find(function (currentTransaction) {
            return currentTransaction.offer.id === offer.id
          });
        if (offerIDIsInTransactions) {
            return "Traded"
            } 
        else {
            return "Pending"
        }
        
    

    }

}

createOffers();