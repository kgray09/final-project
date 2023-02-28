'use strict';
// global object for cart
let customerCart = {
    items: [],
    subtotal: 0,
};

//global object for customer
let customer = {};

function changePhoto(e){
    //select the featured img
    let imgSrc = document.querySelector("#featured img");

    //select the featured description
    let paragraph = document.querySelector("#featured p");

    //gather the event target id
    let id = e.target.id;

    //conditional logic based on ID of target element
    if(id === "ghost") {
        paragraph.innerHTML = "<span>Ghost Earrings</span>These purple and white ghost earrings have been hand-beaded and are sure to give a 'boo'!";
        imgSrc.src = "img/ghost.png";
        imgSrc.alt = "Purple and white ghost earrings that say 'boo!'";
    } else if(id === "red") {
        paragraph.innerHTML = "<span>Blood Red Hoops</span>These hand-made red earrings are sure to catch an eye at your next party!";
        imgSrc.src = "img/redHoop.png";
        imgSrc.alt = "Medium length red beaded hoops, made to look like blood dripping.";
    } else if(id === "cat") {
        paragraph.innerHTML = "<span>Black Cat Earrings</span>No bad luck here! These black cat earrings are purrr-fect for next Halloween!";
        imgSrc.src = "img/cat.png";
        imgSrc.alt = "White earrings with the backside of a black cat";
    } else {
        paragraph.innerHTML = "<span>Purple Cross Earrings</span>Due to popular demand - these cross earrings will be back in stock soon. We also offer these in green!";
        imgSrc.src = "img/purpleCross.png";
        imgSrc.alt = "Purple beaded cross earrings, long in length.";
    }
}

// a function to play the guess number game
function guessNumber(e){
    e.preventDefault();

    // generate random number 1 - 10;
    let randomNum = Math.floor(Math.random() * 10 + 1);

    //get random number from submitted value
    let guessedValue = document.querySelector("#game #numGuess");

    //get section for message
    let messageSection = document.querySelector("#game section");

    //get header of message
    let messageHeader = document.querySelector("#game section h3");

    //get span of their number and ours
    let message2Span = document.querySelector("#game section .guessed");
    let ourNum = document.querySelector(".randomNum");



    //get "try again message"
    let tryAgain = document.querySelector("#game section p:last-of-type");

    // get "your number" p
    let yourNum = document.querySelector("#game section p:nth-child(3)");

    let submit = document.querySelector("#submitGuess");

    // Check if the input is a match
    if(guessedValue.value <= 10 && guessedValue.value >= 1){
        // if the value is within range then check if the number matches
        if(Number(guessedValue.value) === randomNum) {
            guessedValue.classList.remove("error");
            yourNum.innerHTML = "Enter this code for 10% off!";
            //change h3 to winner
            messageHeader.innerHTML = "You win!";
            //give code
            tryAgain.innerHTML = "10OFFWIN";
            //remove the hidden class
            messageSection.classList.remove("hiddenResponse");
        } else {
            guessedValue.classList.remove("error");
            //change span
            //for their number
            message2Span.innerHTML = guessedValue.value;
            //our number
            ourNum.innerHTML = randomNum;
            //remove hidden element
            messageSection.classList.remove("hiddenResponse");
        }
        // if the value is NOT in range, alert and add error class
    } else {
        // change the input to invalid
        // alert the user
        guessedValue.classList.add("error");
        alert("Please enter a valid number");
    }

}

// a function to add to cart
function addToCart(e){
    //gather button id
    let shopItem = e.target.id;

    //get ul id
    let cartList = document.querySelector("#cartList");

    //create li node for item
    let liNode = document.createElement('li');

    // create li node for remove button
    let liRemove = document.createElement('li');

    //add class/conditional logic
    if(shopItem === "blueBeaded") {
        //add item to object
        customerCart.items.push([shopItem, 30]);
        liNode.classList.add(shopItem);
        cartList.appendChild(liNode);
        cartList.appendChild(liRemove);
        liRemove.innerHTML = "<a id='remove'>Remove item</a>";
        //add the cost to the cart
        customerCart.subtotal+=30;
        liNode.innerHTML = "Blue Beaded Earrings<span>$30</span>";
        liNode.classList.add("blueBeaded");
    } else if (shopItem === "bluePorcupine") {
        //add item to object
        customerCart.items.push([shopItem, 25]);
        liNode.classList.add(shopItem);
        cartList.appendChild(liNode);
        cartList.appendChild(liRemove);
        liRemove.innerHTML = "<a id='remove'>Remove item</a>";
        //add the cost to the cart
        customerCart.subtotal+=25;
        liNode.innerHTML = "Blue Porcupine Earrings<span>$25</span>";
    } else if (shopItem === "webbedHoops") {
        //add item to object
        customerCart.items.push([shopItem, 35]);
        liNode.classList.add(shopItem);
        cartList.appendChild(liNode);
        cartList.appendChild(liRemove);
        liRemove.innerHTML = "<a id='remove'>Remove item</a>";
        //add the cost to the cart
        customerCart.subtotal+=35;
        liNode.innerHTML = "Webbed Hoops<span>$35</span>";
    } else if (shopItem === "greenCross") {
        //add item to object
        customerCart.items.push([shopItem, 25]);
        liNode.classList.add(shopItem);
        cartList.appendChild(liNode);
        cartList.appendChild(liRemove);
        liRemove.innerHTML = "<a id='remove'>Remove item</a>";
        //add the cost to the cart
        customerCart.subtotal+=25;
        liNode.innerHTML = "Green Cross<span>$25</span>";
    } else if (shopItem === "turquoiseHoop") {
        //add item to object
        customerCart.items.push([shopItem, 35]);
        liNode.classList.add(shopItem);
        cartList.appendChild(liNode);
        cartList.appendChild(liRemove);
        liRemove.innerHTML = "<a id='remove'>Remove item</a>";
        //add the cost to the cart
        customerCart.subtotal+=35;
        liNode.innerHTML = "Turquoise Hoops<span>$35</span>";
    } else if (shopItem === "pinkPorcupine") {
        //add item to object
        customerCart.items.push([shopItem, 25]);
        liNode.classList.add(shopItem);
        cartList.appendChild(liNode);
        cartList.appendChild(liRemove);
        liRemove.innerHTML = "<a id='remove'>Remove item</a>";
        //add the cost to the cart
        customerCart.subtotal+=25;
        liNode.innerHTML = "Pink Porcupine Earrings<span>$25</span>";
    } else if (shopItem === "redEarrings") {
        //add item to object
        customerCart.items.push([shopItem, 30]);
        liNode.classList.add(shopItem);
        cartList.appendChild(liNode);
        cartList.appendChild(liRemove);
        liRemove.innerHTML = "<a id='remove'>Remove item</a>";
        //add the cost to the cart
        customerCart.subtotal+=30;
        liNode.innerHTML = "Red Earrings<span>$30</span>";
    } else {
        //add item to object
        customerCart.items.push([shopItem, 20]);
        liNode.classList.add(shopItem);
        cartList.appendChild(liNode);
        cartList.appendChild(liRemove);
        liRemove.innerHTML = "<a id='remove'>Remove item</a>";
        //add the cost to the cart
        customerCart.subtotal+=20;
        liNode.innerHTML = "Beaded Hoops<span>$20</span>";
    }

    // get the total with shipping included
    getTotal(customerCart.subtotal);

    // add event listener for the remove button, I added the event listener in the add to cart, since the id does not exist until the addToCart function is called
    let removeButton = document.querySelectorAll("#remove");
    removeButton.forEach(function(item) {
        item.addEventListener("click", removeItem)
    });
}

// a function to get the total
function getTotal(subTotal) {
    // get subtotal element
    let sub = document.querySelector("#subTotal span");

    //make subtotal a num
    parseInt(subTotal);

    //change the subtotal
    sub.textContent = `$${subTotal}`;

    //get total id
    let totalElement = document.querySelector("#total span");

    //change the total
    let total = "$" + ((subTotal + (subTotal *.08)) + 5).toFixed(2);

    //set customer total in object and in HTML
    let cartTotal = customerCart.subtotal;
    if(cartTotal === 0) {
        totalElement.textContent = "$" + (((subTotal + (subTotal *.08))).toFixed(2));
    } else {
        totalElement.textContent = total;
    }
    customerCart.total = total;
}

//a function to remove the items from the cart
function removeItem(e){
    //to get the selected element, I have to get the previoud li sibling due to the nature of the remove button being a li element as well
    let targetElm = e.target.parentNode.previousElementSibling;
    let targetLi = e.target;

    //get the class of the target elm
    let targetElmClass = targetElm.classList.value;

    // //remove both of the li elements
    targetLi.parentNode.removeChild(targetLi);
    targetElm.parentNode.removeChild(targetElm);

    //subtract cost of the item to the customerCart object
    if(targetElmClass === "blueBeaded") {
        customerCart.subtotal-=30;
    } else if (targetElmClass === "bluePorcupine") {
        customerCart.subtotal-=25;
    } else if (targetElmClass === "webbedHoops") {
        customerCart.subtotal-=35;
    } else if (targetElmClass === "greenCross") {
        customerCart.subtotal-=25;
    } else if (targetElmClass === "pinkPorcupine") {
        customerCart.subtotal-=25;
    } else if (targetElmClass === "redEarrings") {
        customerCart.subtotal-=30;
    }  else if (targetElmClass === "turquoiseHoop") {
        customerCart.subtotal-=35;
    } else {
        customerCart.subtotal-=20;
    }
    // get the total
    getTotal(customerCart.subtotal);
}

//a function to apply the promo code
function applyPromo(e){
    e.preventDefault();
    //get the promo code element value
    let promoCode = document.getElementById("promoCode").value.trim();

    // if the promocode matches, apply
    if(promoCode === "10OFFWIN" || promoCode === "10offwin"){
        getTotal(customerCart.subtotal * .90);
    }
}

//function to control the checkout process
function checkout(e){
    e.preventDefault();
    //get the cart total from object before changing it to 0
    let cartTotal = customerCart.total;

    //get the cart checkout element
    let cart = document.querySelectorAll("#cartList li");

    //check to make sure that the cart is not empty, if it is empty, alert the customer to add something to the cart
    if(customerCart.subtotal === 0) {
        alert("Please add something to your cart");

    } else {
        // if it is not empty, iterate throught the items of the cart, and remove all of the list items from the cart
        for(let item of cart) {
            item.parentNode.removeChild(item);
        }
        // set the subtotal to 0
        customerCart.subtotal = 0;
        // get the total and alert the customer that they submitted!
        getTotal(customerCart.subtotal);
        alert(`
        You have successfully placed an order!
        Thank you!
        Your order total: ${cartTotal}`);
    }

}

// track validity
let isValid = true;
//clear error classes
let errors = document.querySelectorAll(".errorInput");
if(isValid) {
    for(let elem of errors){
        elem.classList.remove("errorInput");
    }
}

//function to validate values in form before submitting
function submitForm(e){
    e.preventDefault();

    //get form
    let form = document.querySelector("#contact form");

    //set variables for validity
    let isValidfName, isValidlName, validPhone, validEmail, validReason, validContact, validComments;

    //get firstName
    let firstName = document.getElementById("fName");

    //get lastName
    let lastName = document.getElementById("lName");

    //get error spans
    let errorSpans = document.querySelectorAll(".errorMessage");

    //get email
    let email = document.getElementById("email");

    //get phone
    let phone = document.getElementById("phone");

    //get checked
    let phoneCheck = document.getElementById("prefPhone");
    let emailCheck = document.getElementById("prefEmail");

    // get fieldset
    let fieldset = document.querySelector("form fieldset");

    //get comments
    let comments = document.getElementById("comments");

    //get select value
    let reason = document.getElementById("contactReason");

    //regex
    let reName = /[a-z]+/i;
    // I could add .edu, but for this project I aimed my emails towards the type of customers I would have
    let reEmail = /\w+@\w+.com/i;
    let rePhone = /[0-9]/;

    // first name
    if(firstName.value === "" || !reName.exec(firstName.value)) {
        firstName.classList.add("errorInput");
        errorSpans[0].classList.add("error");
        isValidfName = false;   
    } else {
        firstName.classList.remove("errorInput");
        errorSpans[0].classList.remove("error");
        isValidfName = true;  
    }

    //last name
    if(lastName.value === "" || !reName.exec(lastName.value)) {
        lastName.classList.add("errorInput");
        errorSpans[1].classList.add("error");
        isValidlName = false;
    } else {
        lastName.classList.remove("errorInput");
        errorSpans[1].classList.remove("error");
        isValidlName = true;
    }

    //email
    //if the email is checked
    //require the email to be regex and not be empty or else add an error
    if(emailCheck.checked) {
        if(!reEmail.exec(email.value) || email.value == "") {
            console.log("enter");
            email.classList.add("errorInput");
            errorSpans[2].classList.add("error");
            validEmail = false;
        } else {
            email.classList.remove("errorInput");
            errorSpans[2].classList.remove("error");
            validEmail = true;
        }
    } else {
        email.classList.remove("errorInput");
        errorSpans[2].classList.remove("error");
        validEmail = true;
    }


    //phone
    //if the phone is checked
    //require the phone to not be empty and pass regex
    if(phoneCheck.checked) {
        if(!rePhone.exec(phone.value) || phone.value.length == 0) {
            phone.classList.add("errorInput");
            errorSpans[3].classList.add("error");
            validPhone = false;
        } else {
            phone.classList.remove("errorInput");
            errorSpans[3].classList.remove("error");
            validPhone = true;
        }
    } else {
        phone.classList.remove("errorInput");
        errorSpans[3].classList.remove("error");
        validPhone = true;
    }

    //prefered method of contact
    if(!phoneCheck.checked && !emailCheck.checked){
        fieldset.classList.add("errorInput");
        errorSpans[5].classList.add("error");
        validContact = false;
    } else {
        fieldset.classList.remove("errorInput");
        errorSpans[5].classList.remove("error");
        validContact = true;
    }

    //reason for contact
    if(reason.value === "") {
        reason.classList.add("errorInput");
        errorSpans[4].classList.add("error");
        validReason = false;
    } else {
        reason.classList.remove("errorInput");
        errorSpans[4].classList.remove("error");
        validReason = true;
    }

    //comments
    if(comments.value === "") {
        comments.classList.add("errorInput");
        errorSpans[6].classList.add("error");
        validComments = false;
    } else {
        comments.classList.remove("errorInput");
        errorSpans[6].classList.remove("error");
        validComments = true;
    }
    
    //if all values are valid, add all customer information to object, reset form, and alert the customer that they have submitted the form
    if(isValidfName && validReason && validContact && validPhone && isValidlName && validEmail && validReason &&validComments) {
        customer.firstName = firstName.value;
        customer.lastName = lastName.value;
        customer.email = email.value;
        customer.phoneNum = phone.value;
        customer.comments = comments.value;
        customer.reason = reason.value;
        if(phoneCheck.checked) {
            customer.prefMethod = "phone";
        } else {
            customer.prefMethod = "email";
        }
        form.reset();

        alert(`
        Hello ${customer.firstName} ${customer.lastName}😀!
        
        Here is the information that you sucessfully submitted:
        ☎️Phone number: ${customer.phoneNum}
        📧Email: ${customer.email}
        Prefered Method of Contact: ${customer.prefMethod}
        Your comments were: 
        ${customer.comments}

        Thank you, and we will get back to you in 1-3 business days!`);
    }

}

// functin for changing css rules for light/dark mode
function lightMode() {
    //get span with mode
    let mode = document.querySelector("#lightMode span");

    // get the image tag
    let imgTag = document.querySelector("#lightMode img");

    // get the elements that need to be toggled for darkmode
    let contact = document.querySelector("#contact");
    let featured = document.querySelector("#featured");
    let game = document.querySelector("#game");
    let shop = document.querySelector("#shop");
    let errors = document.querySelectorAll("#contact form .errorMessage");
    let body = document.querySelector("body");
    let cart = document.querySelector("#cart");
    let cartListRemove = document.querySelector("#remove");

    // conditional logic to change innerText and img src
    if(mode.textContent === "Dark Mode") {
        imgTag.src = "img/sun.png";
        mode.textContent = "Light Mode";
    } else {
        imgTag.src = "img/moon.png";
        mode.textContent = "Dark Mode";
    }

    //toggle featured and game
    game.classList.toggle("darkModeFeatured");
    featured.classList.toggle("darkModeFeatured");

    //toggle contact and shop
    shop.classList.toggle("darkModeContact");
    contact.classList.toggle("darkModeContact");

    //toggle error color
    for(let error of errors) {
        error.classList.toggle("darkModeError");
    }

    //toggle body color
    body.classList.toggle("darkModeBody");

    //toggle cart color
    cart.classList.toggle("darkModeCart");
}

//*****************************//
// Event Listeners
//*****************************//

//for guess Number
document.getElementById("submitGuess").addEventListener("click", guessNumber);

//for change Photo
document.getElementById("purpleCross").addEventListener("click", changePhoto);
document.getElementById("cat").addEventListener("click", changePhoto);
document.getElementById("ghost").addEventListener("click", changePhoto);
document.getElementById("red").addEventListener("click", changePhoto);

//for add to shopping cart
//get array of all of the buttons
let shoppingButton = document.querySelectorAll("#shopItems section a");

// itereate through all of the buttons and add event listeners
shoppingButton.forEach(function(item) {
    item.addEventListener("click", addToCart);
});

//for promocode
document.getElementById("applyPromo").addEventListener("click", applyPromo);

//for checkout
document.getElementById("checkout").addEventListener("click", checkout);

//for submit
document.getElementById("contactSubmit").addEventListener("click", submitForm);

//for dark mode
document.getElementById("lightMode").addEventListener("click", lightMode);