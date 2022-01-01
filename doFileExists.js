function doFileExists(link) {
    var request = new XMLHttpRequest();
    request.open('head', link, false);
    request.send();

    if (request.status=="404") return false;
    else return true;
}