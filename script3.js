function getData(dataId, getNextData) {
    //2s
    setTimeout( () => {
         console.log("data", dataId);
         if(getNextData) {
         getNextData();
         }
    },2000);
}

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});

let promise = new Promise( (resolve, reject) => {
     console.log("promise is pending");
     resolve("promise is resolved");
        //reject("promise is rejected");
});

