
function getFlames() {
    let king = document.getElementById("uname").value;     //to get the king name
    let queen = document.getElementById("cname").value;   //to get  the queen name
    let result = document.getElementById("result");
    let show = document.getElementById("show");
    console.log(king)

    let kingarr = king.split('');    //to split as a single character of word into array
    let queenarr = queen.split('');
    console.log(kingarr, queenarr);

    let uniquenum = 0;
    if (kingarr.length > queenarr.length) {
        uniquenum = strikeMatch(kingarr, queenarr);
        // getRealtion(uniquenum);
        console.log(getRealtion(uniquenum));
    }
    else {
        uniquenum = strikeMatch(queenarr, kingarr);
        // getRealtion(uniquenum);
        console.log(getRealtion(uniquenum));
    }
    function strikeMatch(arr1, arr2) { //to remove the similar characters
        for (let i = 0; i < arr1.length; i++) {
            let found = arr2.indexOf(arr1[i]);
            if (found >= 0) {
                arr2[found] = 0;
                arr1[i] = 0;
            }
        }
        let combined = arr1.concat(arr2);
        let resarr = [];
        for (let i = 0; i < combined.length; i++) {
            if (combined[i] != 0) {
                resarr.push(combined)
            }
        }
        return resarr.length; // return the length of remaining words called as unique number
    }


    function getRealtion(value) { //to get the relationship of the names
        let finalvalue = value % 6;
        console.log(finalvalue);
        const flames = {
            0: '😎Friends😎',
            1: '😍Lovers😘',
            2: '🤩Afffection😇',
            3: '🤴Marriage👸',
            4: '😠Enemies🤙',
            5: '🤭Sister🤦'
        }
        console.log(flames[finalvalue]);
        result.innerText = flames[finalvalue];
        show.style.display="block";
        return finalvalue;
    }
}