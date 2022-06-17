// const toBuildCake = () => {
//     location.replace("https://www.w3schools.com")
// }

const increaseValue = () => {
    let pElement = document.getElementsByClassName("counter");
    previousCount = pElement[0].textContent;
    previousCount = parseInt(previousCount);
    previousCount++;
    pElement[0].innerHTML = previousCount;
}
increaseValue()

const decreaseValue = () => {
    let anotherP = document.getElementsByClassName("counter");
    previousCount = anotherP[0].textContent;
    previousCount = parseInt(previousCount);
    if (previousCount == 0) {
        previousCount = 0
    } else {
        previousCount--;
    }
    anotherP[0].innerHTML = previousCount;
}
decreaseValue()

const cakeSizeAndFlavourPrice = () => {
    let cakeSizePrice = document.getElementById("cake-size").value;
    let cakeFlavourPrice = document.getElementById("cake-flavour").value
    let price = 0
    let nairaSign = "\u20A6"
    if (cakeSizePrice == "10 inches" && cakeFlavourPrice == "chocolate") {
        price = nairaSign + 200.00
    } else if (cakeSizePrice == "10 inches" && cakeFlavourPrice == "vanilla") {
        price = nairaSign + 10.00
    } else if (cakeSizePrice == "10 inches" && cakeFlavourPrice == "red velvet") {
        price = nairaSign + 12.00
    } else if (cakeSizePrice == "12 inches" && cakeFlavourPrice == "chocolate") {
        price = nairaSign + 14.00
    } else if (cakeSizePrice == "12 inches" && cakeFlavourPrice == "vanilla") {
        price = nairaSign + 16.00
    } else if (cakeSizePrice == "12 inches" && cakeFlavourPrice == "red velvet") {
        price = nairaSign + 18.00
    } else if (cakeSizePrice == "14 inches" && cakeFlavourPrice == "chocolate") {
        price = nairaSign + 22.00
    } else if (cakeSizePrice == "14 inches" && cakeFlavourPrice == "vanilla") {
        price = nairaSign + 24.00
    } else if (cakeSizePrice == "14 inches" && cakeFlavourPrice == "red velvet") {
        price = nairaSign + 26.00
    }

    document.getElementById("mytextareaForPrice").innerHTML = price;
    // updated local storage as the text area for price is shown when the user selects
    // to be able to pick the values the user selected and see it in view cart page, we need to store -
    // it locally.
    localStorage.setItem("cakesize", cakeSizePrice);
    localStorage.setItem("cakeFlavour", cakeFlavourPrice);
}
cakeSizeAndFlavourPrice()

function viewOrderMade() {
    //getting what the user has selected by using localstorage
    let localStorageOfCakeSize = localStorage.getItem("cakesize");
    let localStorageOfCakeFlavour = localStorage.getItem("cakeFlavour");
    document.querySelector('.cake_types').textContent = localStorageOfCakeSize + " &" + localStorageOfCakeFlavour;
}

viewOrderMade()

function settingCakeMessageToLocalStorage() {
    let getcakeMessageValue = document.getElementById("cake_message").value
    localStorage.setItem("cakeMess", getcakeMessageValue);

    let getcakeIcingValue = document.getElementById("cake_Icing").value
    localStorage.setItem("cakeIcing", getcakeIcingValue);

}
settingCakeMessageToLocalStorage()

function gettingTheCakeMessageFromLocalStorage() {
    let localStorageOfCakeMessage = localStorage.getItem("cakeMess");
    document.querySelector('.cake_message_from_storage').textContent = localStorageOfCakeMessage

    let localStorageOfCakeIcing = localStorage.getItem("cakeIcing");
    document.querySelector('.icing_color_from_storage').textContent = localStorageOfCakeIcing
    console.log(localStorageOfCakeIcing)
}
gettingTheCakeMessageFromLocalStorage()