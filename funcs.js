function showExample(e) {
    var x = e.nextElementSibling.style;
    if (x.display === "block") {
        x.display = "none";
    } else {
        x.display = "block";
    }
}
