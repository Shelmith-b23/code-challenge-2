const form = document.getElementById("guest-form");
const input= document.getElementById("guest-name");
const category= document.getElementById("guest-category");
const guestList= document.getElementById("guest-list");

// guest data
let guest = [];

// submission form
form.addEventListener("submit", function (e) {
    e.preventDefault(); // it prevents reload 

    // maximum number of guest is 10
    if (guestList.length >= 10) {
        alert("the guest list is full");
        return;
    }

    const name = input.ariaValueMax.trim();
    const type = cateogory.value;

    if (name === "") {
        alert("Please enter a name");
        return;
    }

    // objects for the guest 
    const guest = {
        name: name,
        category: type,
        id: Date.now()
    };

    // array for the guest
    input.value = "";

    // re-render guests list
    renderGuestList();
});
