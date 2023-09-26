// Check for current browser theme using window.matchMedia method
const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Add event listener to detect theme change
themeQuery.addEventListener('change', (event) => {
    // Check whether the browser's current theme is set to dark
    let theme = event.matches ? 'dark' : 'light';
    // Log the theme in the console
    console.log(theme);
});


// Define an array of hex color codes for colors that should be excluded
const excludedColors = ["000000", "FFFFFF", "FFF"];

// Generate a random color
let randomColor = (() => {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  while (excludedColors.includes(color)) {
    color = Math.floor(Math.random() * 16777215).toString(16);
  }
  return color;
})();

// check if profileIcon class exists
if(document.querySelector(".profileIcon")){
  // use above colors for profile icon
  let profileIcon = document.querySelector(".profileIcon");
  profileIcon.style.backgroundColor = "#" + randomColor;
}
// check if dropdown class exists
if(document.querySelectorAll("ul li.dropdown")){
    // dropdown function
    let dropdownLinks = document.querySelectorAll("ul li.dropdown");
    dropdownLinks.forEach((dropdownLink) => {
        // Add click event listener to dropdownLink
        dropdownLink.addEventListener("click", (event) => {
            event.stopPropagation();
            let dropdownMenu = dropdownLink.querySelector(".dropdownMenu");
            // check if dropdownMenu class exists
            if(dropdownMenu){
                let otherDropdownMenus = document.querySelectorAll(".dropdownMenu");
                otherDropdownMenus.forEach((otherDropdownMenu) => {
                  if (otherDropdownMenu !== dropdownMenu) {
                    otherDropdownMenu.classList.remove("show");
                    otherDropdownMenu.classList.add("hide");
                  }
                });
                dropdownMenu.classList.toggle("hide");
                dropdownMenu.classList.toggle("show");
            }
        });
    });

    // Add click event listener to the entire document
    document.addEventListener("click", (event) => {
        let dropdownMenus = document.querySelectorAll(".dropdownMenu");
        // Loop through each dropdown menu and remove the "show" class
        dropdownMenus.forEach((dropdownMenu) => {
            if (!event.target.closest('.dropdown')) {
                dropdownMenu.classList.remove("show");
                dropdownMenu.classList.add("hide");
            }
        })
    })
}