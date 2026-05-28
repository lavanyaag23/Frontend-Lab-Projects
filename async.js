function fetchData(callback) {
    console.log("Fetching data...");

    setTimeout(function () {
        console.log("Data fetched successfully");
        callback();
    }, 2000);
}

function processData() {
    console.log("Processing fetched data");
}

fetchData(processData);

function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 completed");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 completed");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 completed");
        callback();
    }, 1000);
}

task1(function () {
    task2(function () {
        task3(function () {
            console.log("All tasks completed");
        });
    });
});

function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");

        setTimeout(() => {
            let success = true;

            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Error fetching data");
            }
        }, 2000);
    });
}

fetchDataPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

    function fetchDataAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched using async-await");
        }, 2000);
    });
}

async function getData() {
    console.log("Fetching data...");

    try {
        let result = await fetchDataAsync();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

getData();