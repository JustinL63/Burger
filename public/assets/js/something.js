// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".addBurger").on("submit", function(event) {
        event.preventDefault()
      var id = $(this).children("id").val();
      console.log(id);
  
      
  
      // Send the PUT request.
      $.ajax( {
        method: "PUT",
        url: "/api/burgers/" + id
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
})
  