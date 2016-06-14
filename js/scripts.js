//business logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// };
//
// Address.prototype.fullAddress = function() {
//   return this.addressType + ": " + this.street + ", " + this.city + ", " + this.state;
// }
//
// function resetFields() {
//     $("selcet#movieName").val("");
//     $("input#new-last-name").val("");
//     $("input.new-street").val("");
//     $("input.new-city").val("");
//     $("input.new-state").val("");
// }

// user interface logic
$(document).ready(function() {
  $("form#new-ticket").submit(function(event) {
    event.preventDefault();

    var inputtedMovieName = $("select#movie-name").val();
    var inputtedMovieTime = $("select#movie-time").val();
    var inputtedAge = $("input:radio[name=age]:checked").val();
    var newTicket = new Ticket(inputtedMovieName, inputtedMovieTime, inputtedAge);

    $("ul#ticketPrice").append("<li><span class='ticketName'>" + newTicket.movie + "</span></li>");

    $("#ticketPrice").last().click(function() {
      $("#show-ticket").show();
      $("#show-ticket h2").text(newTicket.movie);
      $(".movie-name").text(newTicket.movie);
      $(".movie-time").text(newTicket.time);
      $(".purchaser-age").text(newTicket.age);
      $(".ticket-price").text(newTicket.fullPrice());
    });

    $(".new-address").not("#new-address").hide();
    // resetFields();
  });
});
