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

    var price = 1;

    if(inputtedMovieName === "Finding Dory" || inputtedMovieName === "Zootopia" || inputtedMovieName === "X-Men: Apocalypse") {
      price *= 2;
    } else {
      price *=1;
    };

    if(inputtedMovieTime === "11am" || inputtedMovieTime === "12pm" || inputtedMovieTime === "1pm" || inputtedMovieTime === "2pm" || inputtedMovieTime === "3pm" || inputtedMovieTime === "4pm") {
      price *= 1;
    } else {
      price *=2;
    };

    if(inputtedAge === "Senior") {
      price *= 2;
    } else if(inputtedAge === "Child") {
      price *=1;
    } else {
      price *=3;
    };

    $("ul#ticketPrice").append("<li><span class='ticketName'>" + newTicket.movie + "</span></li>");

    $("#ticketPrice").last().click(function() {
      $("#show-ticket").show();
      $("#show-ticket h2").text(newTicket.movie);
      $(".movie-name").text(newTicket.movie);
      $(".movie-time").text(newTicket.time);
      $(".purchaser-age").text(newTicket.age);
      $(".ticket-price").text(price);
    });

    $(".new-address").not("#new-address").hide();
    // resetFields();
  });
});
