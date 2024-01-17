// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");
// MESSAGES
const messagesNotifications = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = messages.querySelector("#message-search");
// THEME
const theme = document.querySelector("#theme");
const themeModel = document.querySelector(".customize-theme")
const fontSizes = document.querySelectorAll(".choose-size span");

var root = document.querySelector(":root");

const colorPalette = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

/*=================== SIDEBAR ================ */ 

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach((item) => {
        if (item.classList.contains("active")) {
            item.classList.remove("active");    
        }
    });
}

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        const note = item.querySelector(".notifications-popup");
        if (item.id != "notifications") {
            note.style.display = "none";
        } else {
            note.style.display = "block";
            item.querySelector(".notification-count").style.display = "none";
        }
    });
});

/*=================== MESSAGES ================ */ 

// search chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach((chat) => {
        let name = chat.querySelector("h5").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }
    });
}


// search chat
messageSearch.addEventListener("keyup", searchMessage)


// highlight messages card when messages menu item is clicked
messagesNotifications.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotifications.querySelector(".notification-count").style.display = "none";
    // remove box shadow after 2 sec
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
});


/*=================== THEME/DISPLAY CUSTOMIZATION ================ */

// opens model
const openThemeModel = () => {
    themeModel.style.display = "grid";
}

// close model
const closeThemeModel = (e) => {
    if (e.target.classList.contains("customize-theme")) {
        themeModel.style.display = "none";
    }
}


themeModel.addEventListener("click", closeThemeModel);

theme.addEventListener("click", openThemeModel);


const removeSizeSelector = () => {
    fontSizes.forEach((size) => {
        if (size.classList.contains("active")) {
            size.classList.remove("active");
        }
    })
}

// FONTS
fontSizes.forEach((size) => {
    
    size.addEventListener("click", () => {

        removeSizeSelector();
        size.classList.add("active");

        let fontSize;
        if (size.classList.contains("font-size-1")) {
            fontSize = "10px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "5.4rem");
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "13px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "-7rem");
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "16px";
            root.style.setProperty("--sticky-top-left", "-2rem");
            root.style.setProperty("--sticky-top-right", "-17rem");
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "19px";
            root.style.setProperty("--sticky-top-left", "-5rem");
            root.style.setProperty("--sticky-top-right", "-25rem");
        } else {
            fontSize = "22px";
            root.style.setProperty("--sticky-top-left", "-10rem");
            root.style.setProperty("--sticky-top-right", "-33rem");
        }
    
        // change font size of root html element
        document.querySelector('html').style.fontSize = fontSize;
    
    });

});


// remove active class from colors
const removeColorSelector = () => {
    colorPalette.forEach((color) => {
        if (color.classList.contains("active")) {
            color.classList.remove("active");
        }
    });
}


// change primary color
colorPalette.forEach((color) => {
    color.addEventListener("click", () => {

        removeColorSelector();
        color.classList.add("active");
        let primaryHue;

        if (color.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52;
            
        } else if (color.classList.contains("color-3")) {
            primaryHue = 352;
            
        } else if (color.classList.contains("color-4")) {
            primaryHue = 152;
                        
        } else {
            primaryHue = 202;
            
        }

        root.style.setProperty("--primary-color-hue", primaryHue);

    })
});



// Background

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
}

Bg1.addEventListener("click", () => {
    darkColorLightness = '17%';
    whiteColorLightness = "100%";
    lightColorLightness = "95%";

    // add active class
    Bg1.classList.add("active");
    // remove active class from the others
    Bg2.classList.remove("active");
    Bg3.classList.remove("active");
    changeBG();
    // window.location.reload();
});

Bg2.addEventListener("click", () => {
    darkColorLightness = '95%';
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    // add active class
    Bg2.classList.add("active");
    // remove active class from the others
    Bg1.classList.remove("active");
    Bg3.classList.remove("active");
    changeBG();
});

Bg3.addEventListener("click", () => {
    darkColorLightness = '95%';
    whiteColorLightness = "10%";
    lightColorLightness = "0%";

    // add active class
    Bg3.classList.add("active");
    // remove active class from the others
    Bg1.classList.remove("active");
    Bg2.classList.remove("active");
    changeBG();
});