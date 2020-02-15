// Check if data.order.support is true or false.
function checkSupport(){
    //If true, write Yes.
    if(data.order.support){
        return "Yes";
    }
    //If false write No.
    else{
        return "No";
    }
}

function writeHTMLContent() {

    document.getElementById("auctionStatus").innerHTML = data.auction.auction_status;
    document.getElementById("createdAt").innerHTML = data.auction.created_at;
    document.getElementById("auctionID").innerHTML = data.auction.id;

    document.getElementById("dealType").innerHTML = data.auction.deal_type;
    document.getElementById("auctionType").innerHTML = data.auction.auction_type;
    document.getElementById("deadline").innerHTML = data.auction.deadline;
    document.getElementById("startPrice").innerHTML = data.auction.start_price;

    document.getElementById("labels").innerHTML = data.order.labels;
    document.getElementById("volume").innerHTML = data.order.volume + " " + "MWh";
    document.getElementById("deliveryDate").innerHTML = data.order.delivery_date;
    document.getElementById("technologies").innerHTML = data.order.technologies;
    document.getElementById("vintage").innerHTML = data.order.vintage;
    document.getElementById("support").innerHTML = checkSupport();

}

writeHTMLContent();


// Create new div element for each countries in data.order.origins
function createCountries(){       
    
    var countries = data.order.origins;

    for (var c in countries) {

        var countryName = countries[c];

        //Create div with id and classname
        var newDiv = document.createElement("div");
        newDiv.id = countryName;
        newDiv.className = "gm_section-auction__country";

        //Write in this div the country name
        newDiv.innerHTML = countryName;

        //Put the div into DOM
        document.getElementById("origins").appendChild(newDiv);

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