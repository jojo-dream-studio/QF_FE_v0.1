
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "my-checkbox"; 

import("./index.js");



function walkaround(){

    console.log("walkaround");

    if (checkbox.checked) {
        console.log("Checkbox is checked");
        response(response_type.UPDATE, "1_%%_1");
    } else {
        console.log("Checkbox is unchecked");
        response(response_type.UPDATE, "1_%%_0");
        response(response_type.UPDATE, "2_%%_0xE2d14C24Ede3576e8DE5Fec2462f45eeBC3f4f67");
        response(response_type.UPDATE, "3_%%_0x1861D347F3F6ea009B05a1def6116013FEBe6683");
        response(response_type.UPDATE, "4_%%_0x58C4C693599efE1586d43e3c455A8a8b4500Ad9b");
    }

}

// Add an event listener to the checkbox
checkbox.addEventListener("change", function () { 
    console.log("toggle");
    walkaround(); 
});


document.body.appendChild(checkbox);
