const ReducersConceptDemo = () => {
    var counter = 0;
    const increment = (cnt = 0) => {
        counter = cnt + 1;
        return counter;
    }

    let val1 = increment(); //state change is happening here
    console.log(val1);

    val1 = increment(val1); //state change is happening here
    console.log(val1);

    val1 = increment(val1); //state change is happening here    
    console.log(val1);



    /////////////////////////

    var riverName = "Ganga";
    console.log(riverName);

    const isUpperCase = (rvr = " ") => {
        riverName = riverName.toUpperCase();
        return riverName;
    }

    isUpperCase(riverName);
    console.log(riverName);
    ///

    console.log(isUpperCase(riverName));


    var someStr = "haha";

    // not a reducer function
    const isUpperCase2 = (rvr = " ") => {
        someStr = someStr.toUpperCase();
        return rvr;
    }

    var RiverName2 = "Yamuna";
    console.log("101  " + RiverName2);

    isUpperCase2(RiverName2)
    console.log("101  " + RiverName2);

    /////////////////

    var citiesArr = ["Raipur", "Bangalore"];
    const addNewCity = (cArray = []) => {
        return cArray.push("shimla");
    }

    console.log("city array old = " + citiesArr);

    addNewCity(citiesArr);
    console.log("cities after new array = " + citiesArr);

    // addNewCity is not a reducer coz it returns the same array, even
    // with new content added on it
    // Following addNewCity2 is a reducer

    const addNewCity2 = (cArray = []) => {
        let [...newArr] = citiesArr;
        newArr.push("Shimla");
        return newArr;
    }

    console.log("city array old = " + citiesArr);

    addNewCity2(citiesArr);
    console.log("cities after new array = " + citiesArr);


    /////////////
    var player = {
        name: "jayant",
        age: 25
    };

    const addTwenty = (plyr = {}) => {
        plyr.age = plyr.age + 20;
        return plyr;
    }

    console.log(`player 100 ${player.name} and ${player.age}`);

    addTwenty(player);
    console.log(`player 101 ${player.name} and ${player.age}`);

    // addNewCity is not a reducer coz it returns the same object, even
    // with new content added on it
    // Following addTwenty2 is a reducer

    // const addTwenty2 = (plyr={}) =>{
    //     let newPlyr = {...plyr, age:plyr.age + 20};
    //     return newPlyr;

    // }



    /////////// Class Assignment 
    var playerInfo = {
        kName: "jayant",
        age: 25,
        awards: ["National", "State"]
    }

    const assignPlayers = (plyrInfo = {}) => {
        let newPlayer = { ...playerInfo };
        newPlayer.age = newPlayer.age + 5;
        return newPlayer;
    }


    console.log("before playerInfo : ");

    for (let i in playerInfo) {
        console.log(playerInfo[i]);
    }

    playerInfo = assignPlayers(playerInfo);
    console.log("After applying the reducer : ");

    for (let i in playerInfo) {
        console.log(playerInfo[i]);
    }



    ///////////////
    var plyrArr = ["Jayant", "Meghal", "Pooja", "yashika", "Shashank"];

    const addNewName = (plyrArr1 = []) => {
        let [...newArr1] = plyrArr;
        newArr1 = plyrArr1.push("Uma");
        return newArr1;
    }

    console.log("name array old = " + plyrArr);

    addNewName(plyrArr);
    console.log("name after new array = " + plyrArr);


    ////////////////////class assignment 2

    var plyArr = [{
        name: "jayant",
        age: 25,
        awards: "National"
    },
    {
        name: "pooja",
        age: 26,
        awards: "National"
    },
    {
        name: "meghal",
        age: 27,
        awards: "state"
    }]



    const addNewPlayer1 = (plyrArr2 = [{}]) => {
        let [...newArr2] = plyrArr2;
        newArr2.push({ name: "Uma", age: 40, awards: "state" });
        return newArr2;
    }

    console.log("name array old = " + plyArr);
    for (let player of plyArr) {
        for (let locPlayer in player) {
            console.log(player[locPlayer]);
        }
        // console.log(plyArr[i]);
    }

    plyArr = addNewPlayer1(plyArr);
    console.log("name after new array = " + plyArr);

    for (let player of plyArr) {
        for (let locPlayer in player) {
            console.log(player[locPlayer]);
        }
        // console.log(plyArr[i]);
    }





    ////////////class assignment

    var plyArr1 = [{
        name: "jayant",
        age: 25,
        awards: "National"
    },
    {
        name: "pooja",
        age: 26,
        awards: "National"
    },
    {
        name: "meghal",
        age: 27,
        awards: "state"
    }]



    const addNewPlayer2 = (plyrArr3 = [{}], strAction) => {
        if (strAction === "ADD_ONE") {
            let [...newArr3] = plyrArr3;
            newArr3.push({ name: "Uma", age: 40, awards: "state" });
            return newArr3;
        }
        else if (strAction === "ADD_TWO") {
            let [...newArr3] = plyrArr3;
            newArr3.push({ name: "santosh", age: 40, awards: "state" });
            newArr3.push({ name: "rakesh", age: 40, awards: "state" });

            return newArr3;

        }

    }

    console.log("name array old = " + plyArr1);
    for (let i=0; i<plyArr1.length; i++) {
        for (let locPlayer in plyArr1) {
            console.log(plyArr1[locPlayer]);
        }
    }

    plyArr1 = addNewPlayer2(plyArr1,"ADD_TWO");
    console.log("name after new array = " + plyArr1);

    for (let i=0; i<plyArr1.length; i++) {
        for (let locPlayer in plyArr1) {
            console.log(plyArr1[locPlayer]);
        }
    }



















    return (
        <div> <h1>Reducer Redux Demo</h1></div>

    )
}

// increment is a function that takes current state of a variable
//and changes its state (by adding 1 , or by some number),
// and return a new state
// ......are called reducers


export default ReducersConceptDemo;