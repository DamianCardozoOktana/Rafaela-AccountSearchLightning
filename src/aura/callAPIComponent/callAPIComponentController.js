({

	callToAction: function(component, event) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                component.set("v.beerName", "Beer: " + JSON.parse(this.responseText)[0].name);
            }
        };
        xhttp.open("GET", "https://api.punkapi.com/v2/beers/random", true);
        xhttp.send();
    }

})