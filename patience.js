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

function decreaseValue() {
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
    if (cakeSizePrice == "10 inches" && cakeFlavourPrice == "chocolate") {
        price = 200.00
    } else if (cakeSizePrice == "10 inches" && cakeFlavourPrice == "vanilla") {
        price = 10.00
    } else if (cakeSizePrice == "10 inches" && cakeFlavourPrice == "red velvet") {
        price = 12.00
    } else if (cakeSizePrice == "12 inches" && cakeFlavourPrice == "chocolate") {
        price = 14.00
    } else if (cakeSizePrice == "12 inches" && cakeFlavourPrice == "vanilla") {
        price = 16.00
    } else if (cakeSizePrice == "12 inches" && cakeFlavourPrice == "red velvet") {
        price = 18.00
    } else if (cakeSizePrice == "14 inches" && cakeFlavourPrice == "chocolate") {
        price = 22.00
    } else if (cakeSizePrice == "14 inches" && cakeFlavourPrice == "vanilla") {
        price = 24.00
    } else if (cakeSizePrice == "14 inches" && cakeFlavourPrice == "red velvet") {
        price = 26.00
    }

    document.getElementById("mytextareaForPrice").innerHTML = price;
    // updated local storage as the text area for price is shown when the user selects
    // to be able to pick the values the user selected and see it in view cart page, we need to store -
    // it locally.
    localStorage.setItem("cakesize", cakeSizePrice);
    localStorage.setItem("cakeFlavour", cakeFlavourPrice);
}
cakeSizeAndFlavourPrice()

const viewCart = () => {
    let x = document.getElementById("view_cart");
    x.innerHTML = "Hello World";
    console.log(x)


    document.getElementById("view_cart").innerHTML = "Hello beauty";
    // var x = document.getElementById("myTextarea");
    // document.getElementById("view_cart").innerHTML = x;
}
viewCart();

const viewDropDownOption = () => {
    // let e = document.getElementById("cake-flavour").value;
    // let strUser = e.options[e.selectedIndex].text;
    // document.getElementById("view_drop_option").innerHTML = strUser;
    // console.log(e)
    // console.log(strUser)
    // var e = document.getElementById("cake-flavour");
    // var value = e.options[e.selectedIndex].value;
    // var text = e.options[e.selectedIndex].text;
    // document.getElementById("view_drop_option").innerHTML = text;
    let e = document.getElementById("cake-flavour").selectedIndex;
    let strUser = e.options[e.selectedIndex].text;
    document.getElementById("view_drop_option").innerHTML = strUser;
    console.log(e)
    console.log(strUser)
}
viewDropDownOption()

function getOption() {
    //getting what the user has selected by using localstorage
    let localStorageOfCakeSize = localStorage.getItem("cakesize");
    console.log(localStorageOfCakeSize)
    let localStorageOfCakeFlavour = localStorage.getItem("cakeFlavour");

    document.querySelector('.output').textContent = localStorageOfCakeSize;
    console.log(localStorageOfCakeSize)
    
    
}
getOption()