document.getElementById("plus").addEventListener("click", function() {

    // Get the element with id "flex_copyer"
    var element = document.getElementById("flex_copy");

    // Clone it to the start of the div with id "container"
    var clone = element.cloneNode(true);

    // Change display to grid
    clone.style.display = "grid";

    // Add the class "flex_item"
    clone.classList.add("flex_item");

    // Remove the id "flex_copy"
    clone.id = "";

    // Add the clone to the container before the element with id "plus"
    document.getElementById("container").insertBefore(clone, document.getElementById("plus"));
});