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
        tableDataElement.innerHTML = "#" + offer.id;
        tableDataElement.classList.add("gm_section-offers__id");
        document.getElementById(offer.id).appendChild(tableDataElement);

                //Status
                var tableDataElement = document.createElement("td");
                tableDataElement.classList.add("gm_section-offers__status-container");
                //First, check if the current offer is in the transactions array
                var offerIDIsInTransactions = data.transactions.find(function (currentTransaction) {
                    return currentTransaction.offer.id === offer.id
                  });
                //If yes, write Traded, otherwise write Pending
                if (offerIDIsInTransactions) {
                    //tableDataElement.innerHTML = "Traded"
                    var createSpanElement = document.createElement("span");
                    createSpanElement.innerHTML = "Traded";
                    createSpanElement.classList.add("gm_status", "is--active");
                    tableDataElement.appendChild(createSpanElement);
                } 
                else {
                    var createSpanElement = document.createElement("span");
                    createSpanElement.innerHTML = "Pending";
                    createSpanElement.classList.add("gm_status", "is--pending");
                    tableDataElement.appendChild(createSpanElement);
                }
                document.getElementById(offer.id).appendChild(tableDataElement);

        //Technologies
        var tableDataElement = document.createElement("td");
        tableDataElement.innerHTML = offer.technologies;
        tableDataElement.classList.add("gm_section-offers__technologies");
        document.getElementById(offer.id).appendChild(tableDataElement);
        //add icon
        var icon = document.createElement("IMG");
        icon.setAttribute("src", "assets/icon/icon--" + offer.technologies + ".svg");
        icon.setAttribute("width", "12");
        icon.setAttribute("height", "18");
        icon.setAttribute("alt", "Icon " + offer.technologies + "energy");
        //Put the flag img before the first child of the parent(= document.getElementById(countryName))
        tableDataElement.prepend(icon);



        //Volume
        var tableDataElement = document.createElement("td");
        tableDataElement.innerHTML = offer.volume;
        tableDataElement.classList.add("gm_section-offers__volume");
        tableDataElement.classList.add("is--right-aligned");
        document.getElementById(offer.id).appendChild(tableDataElement);
        
        //Traded volume
        var tableDataElement = document.createElement("td");
        tableDataElement.classList.add("gm_section-offers__traded-volume__is-empty");
        tableDataElement.classList.add("is--right-aligned");
        document.getElementById(offer.id).appendChild(tableDataElement);
        //Check if the current offer is in the transactions array and if yes, write the tx_volume
        var offerIDIsInTransactions = data.transactions.find(function (currentTransaction) {
            if (currentTransaction.offer.id === offer.id) {
                tableDataElement.innerHTML = currentTransaction.tx_volume;
                tableDataElement.classList.remove("gm_section-offers__traded-volume__is-empty");
                tableDataElement.classList.add("gm_section-offers__traded-volume");
            }
        });

        //Price
        var tableDataElement = document.createElement("td");
        tableDataElement.innerHTML = offer.price;
        tableDataElement.classList.add("gm_section-offers__price");
        tableDataElement.classList.add("is--right-aligned");
        document.getElementById(offer.id).appendChild(tableDataElement);

        //Origin
        var tableDataElement = document.createElement("td");
        tableDataElement.classList.add("gm_section-offers__origins");
        //tableDataElement.classList.add("is--center-aligned");
        document.getElementById(offer.id).appendChild(tableDataElement);
        // Create new div element for each countries in data.offers.origins
        var countries = offer.origins;
        for (var country in countries) {
            var countryName = countries[country];
            //Create div with id and classname
            var countryWrapperElement = document.createElement("div");
            countryWrapperElement.id = countryName + " " + offer.id;
            countryWrapperElement.className = "gm_section-offers__country";
            //Write in this div the country name
            countryWrapperElement.innerHTML = countryName;
            //Put the div into DOM
            tableDataElement.appendChild(countryWrapperElement);
            //add flag img
            var flag = document.createElement("IMG");
            flag.setAttribute("src", "assets/img/flag/" + countryName + ".jpg");
            flag.setAttribute("width", "20");
            flag.setAttribute("height", "20");
            flag.setAttribute("alt", "Flag of " + countryName);
            //Put the flag img before the first child of the parent(= document.getElementById(countryName))
            document.getElementById(countryName + " " + offer.id).prepend(flag);
        } 
    

    }

}

createOffers();