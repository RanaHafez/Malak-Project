console.log("loaded");
// List of Arab countries by their SVG path IDs
const arabCountries = ["bh" ,"qa", "eg","sa", "kw", "path3882","path5410","ly","so","jo","dj","sd","path2592", "path4786","path2784", "iq", "sy", "sa", "jo", "lb", "om", "ae", "dz", "ma"];

// Track the currently selected country
let selectedCountryId = null;

// Function to add click events to each Arab country
function setupCountryClickEvents() {
    // Loop through each country ID in the arabCountries array
    $.each(arabCountries, function(index, countryId) {
        // Attach a click event to the country element if it exists in the DOM
        $("#" + countryId).on("click", function() {
            toggleCountrySelection(countryId);
        });

        $("#" + countryId).on("mouseover", function() {
            console.log("hovered");

            $('.' + countryId + "-flag").fadeIn();
        });

        $("#" + countryId).on("mouseout", function() {
            $('.' + countryId + "-flag").fadeOut();
        });
    });


}

// Function to handle country selection and styling
function toggleCountrySelection(countryId) {
    // Deselect the previously selected country if there is one
    if (selectedCountryId) {
        $("#" + selectedCountryId)
            .css("fill", "#599575")  // Reset to original color
            .removeClass("pressed"); // Remove the "pressed" style class
    }

    // Select the new country only if it's different from the currently selected one
    if (selectedCountryId !== countryId) {
        $("#" + countryId)
            .css("fill", "#2a5d2e")  // New color to show "pressed" state
            .addClass("pressed");    // Add a CSS class for pressed style
        selectedCountryId = countryId;  // Update the selected country ID
    } else {
        // If clicking the same country, deselect it
        selectedCountryId = null;
    }
}

// Initialize the setup once the DOM is ready
$(document).ready(setupCountryClickEvents);
