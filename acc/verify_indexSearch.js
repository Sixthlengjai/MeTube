function verify_indexSearch(str) {
    var i;
    for (i=0;i<acc.length;i++) {
        if (str==acc[i].email || str==acc[i].ph) {
            return i;
            break;
        }
    }
    return -1;
}