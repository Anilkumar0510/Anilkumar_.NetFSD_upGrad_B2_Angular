let tasks = [];

const addTaskCallback = (task, callback) => {
    setTimeout(() => {
        tasks.push(task);
        callback(`Task "${task}" added.`);
    }, 1000);
};

const listTasksCallback = (callback) => {
    setTimeout(() => {
        callback(`
📋 Task List:
${tasks.map((t, i) => `${i + 1}. ${t}`).join("\n")}
`);
    }, 1000);
};

console.log("---- CALLBACK VERSION ----");

addTaskCallback("Learn JS", (msg) => {
    console.log(msg);

    addTaskCallback("Practice Async", (msg) => {
        console.log(msg);

        listTasksCallback((list) => {
            console.log(list);
        });
    });
});


/* =========================
PROMISE VERSION
========================= */

const addTaskPromise = (task) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            tasks.push(task);
            resolve(`Task "${task}" added.`);
        }, 1000);
    });
};

const listTasksPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`
📋 Task List:
${tasks.map((t, i) => `${i + 1}. ${t}`).join("\n")}
`);
        }, 1000);
    });
};

// Promise Demo
setTimeout(() => {
    console.log("---- PROMISE VERSION ----");

    addTaskPromise("Build Project")
        .then(console.log)
        .then(() => listTasksPromise())
        .then(console.log);

}, 4000);


/* =========================
ASYNC/AWAIT VERSION
========================= */

const runAsyncVersion = async () => {
    console.log("---- ASYNC/AWAIT VERSION ----");

    try {
        const msg = await addTaskPromise("Revise ES6");
        console.log(msg);

        const list = await listTasksPromise();
        console.log(list);

    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

setTimeout(runAsyncVersion, 7000);