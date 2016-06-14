//business logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.price = function() {
  var price = 1;

  if(this.movie === "Finding Dory" || this.movie === "Zootopia" || this.movie === "X-Men: Apocalypse") {
    price *= 2;
  } else {
    price *= 1;
  };

  if(this.time === "11am" || this.time === "12pm" || this.time === "1pm" || this.time === "2pm" || this.time === "3pm" || this.time === "4pm") {
    price *= 1;
  } else {
    price *= 2;
  };

  if(this.age === "Senior") {
    price *= 2;
  } else if(this.age === "Child") {
    price *= 1;
  } else {
    price *= 3;
  };

  return price;
};

Ticket.prototype.poster = function() {
  var poster;

  if(this.movie === "Finding Dory") {
    poster = "finding-dory.jpg";
  } else if (this.movie === "Zootopia") {
    poster = "zootopia.jpg";
  } else if (this.movie === "X-Men: Apocalypse") {
    poster = "x-men.jpg";
  } else {
    poster = "deadpool.jpg";
  };

  return poster;
};



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
      $("#show-ticket h2").html('<img src="img/' + newTicket.poster() + '">');
      $(".movie-name").text(newTicket.movie);
      $(".movie-time").text(newTicket.time);
      $(".purchaser-age").text(newTicket.age);
      $(".ticket-price").text(newTicket.price());
    });

  });
});
