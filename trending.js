var max = [];

function findTrending_max() {
    var i, j;
    var k;
    max = [];
    for (i = 0; i < 12; i++) {
        max.push({id: parseInt(128), daily: parseInt(0)});
    }
    for (i = 0; i < vid.length; i++) {
        for (j = 0; j < 12; j++) {
            if (parseInt(vid[i].daily) > parseInt(max[j].daily)) {
                k = j;
                break;
            }
        }
        for (j = 11; j > k; j--) {
            max[j].id = parseInt(max[j - 1].id);
            max[j].daily = parseInt(max[j - 1].daily);
        }
        max[k].id = parseInt(vid[i].id);
        max[k].daily = parseInt(vid[i].daily);
    }
}
findTrending_max();


function outputTrending_max() {
    for (var i = 0; i < 12; i++) {
        console.log(i + " - id: ", + max[i].id + ", daily: " + max[i].daily);
    }
}