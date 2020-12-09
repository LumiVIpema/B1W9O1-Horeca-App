alert("Welcome in the Crystal fox Bar and Inn, Please may I take your order?");

function addOrder() {
    var order = prompt("What drinks do you wish to order? \nSnacks or Drinks or write stop to pay or cancel?").toLowerCase()
    if (order == "snacks") {

        var order = prompt("How many snacks do you wish to order? \n 8 piece or the 16 piece").toLowerCase()
        switch (order) {
            case "8":
                order = prompt("How many 8 piece snackplatters do you wish to order?")
                food[0].amount = Number(order)
                food[0].total = food[0].amount * food[0].price
                addOrder();
                break;
            case "16":
                order = prompt("How many 16 piece snackplatters do you wish to order?")
                food[1].amount = Number(order)
                food[1].total = food[1].amount * food[1].price
                addOrder();
                break;
        }

    } else if (order == "drinks") {
        var order = prompt("What drinks do you wish to order? \nwe have Soda,Wine,Beer.").toLowerCase()
        switch (order) {
            case "soda":
                order = prompt("How many Soda's do you wish to order?")
                drinks[0].amount = Number(order)
                drinks[0].total = drinks[0].amount * drinks[0].price
                addOrder();
                break;
            case "wine":
                order = prompt("How many Wine's do you wish to order?")
                drinks[1].amount = Number(order)
                drinks[1].total = drinks[1].amount * drinks[1].price
                addOrder();
                break;
            case "beer":
                order = prompt("How many Beers do you wish to order?")
                drinks[2].amount = Number(order)
                drinks[2].total = drinks[2].amount * drinks[2].price
                addOrder();
                break;
        }
    }else if (order =="stop"){
        printBill(); 

    } else {
        alert("please enter snacks or drinks");
        addOrder();
    }

}

function printBill() {
    let total = 0;
    for (i = 0; i < food.length; i++) {
        if (food[i].total !=undefined){
        document.write(food[i].type + " : " + food[i].amount + " x " + food[i].price + " = " + food[i].total + "<br>" )
        total = total + food[i].total;

        }
    }
    for (i = 0; i < drinks.length; i++) {
        if (drinks[i].total !=undefined){
        document.write(drinks[i].type + " : " + drinks[i].amount + " x " + drinks[i].price + " = " + drinks[i].total + "<br>" )
        total = total + drinks[i].total;

        }
    }
    document.write ("total = "+total.toFixed(2)+"<br>")
}

addOrder();