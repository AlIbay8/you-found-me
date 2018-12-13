$("p").click(function() {
    $(".input").show();
});

$("button").click(function() {
    var phrase = $("input").val().toLowerCase();
    if (phrase === "get off the internet") {
    $(".riddle").text("an event in which computer programmers collaborate intensively with the goal of creating a functioning product by the end of the event.");}
});