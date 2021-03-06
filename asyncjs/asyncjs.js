// ex1: where have you seen callbacks?
            // btn.addEventListener('click', () => {
            //     document.body.style.backgroundColor = red;
            // });


        // ex2:
            // const strLength = (myName, cb) => {
            //     const myNameLength = myName.length;
            //     cb(myNameLength);
            // }

            // const printName = (lengthOfName) => console.log(`OMG! my name is ${lengthOfName} char long!`);


        // ex3:
            // const willThanosKillMe = (name, aliveCb, deadCb) => {
            //     if(name.length % 2 === 0)
            //     aliveCb();
            //     else
            //     deadCb();
            // }
            // alive = () => console.log(`Yay! I am alive!`);
            // dead = () => console.log(`My will`);


        //ex4:
            // const delayIt = (msg, delay) => {
            //     setTimeout(() => {
            //         console.log(msg);
            //     }, delay)
            // }


        //ex5: 1.ACB 2.BAC 3.ACB


        //ex6:
        //6.1
            // const intervalIt = (msg, interval) => {
            //     setInterval(() => {
            //        console.log(msg);
            //     }, interval);
            // }

        //6.2
            // const countDown = startTime => {
            //     const intervalId = setInterval(() => {
            //         let i = startTime--;
            //         if(i>0){
            //             console.log(i);
            //         }
            //         else {
            //             console.log(i, "Bang Bang!");
            //             clearInterval(intervalId);
            //         }
            //     }, 1000);
            // }

            // Even shorter variation:

            // const countDown = startTime => { 
            //     let id = setInterval(() => { 
            //         console.log(startTime--); 
            //         if (startTime < 0) clearInterval(id) || console.log("bang bang");     
            //     }, 1000); 
            // };  
            // countDown(4);


        // ex7: in react codeSandBox

        // ex8: promises becasue code is easier to follow and avoids callback hell.


        //ex9:
            // Promise -> States= pending (undefined), fulfill (result) and reject (error)

            // callAPromise().then(successHandler).catch(rejectHandler)
        
        //ex10:
            // Tanay's fetch
            // function fakeFetch(msg, shouldReject) {
            //     return new Promise((resolve, reject) => {
            //         setTimeout(() => {
            //         if (shouldReject) {
            //             reject(`error from server: ${msg}`)
            //         }
            //         resolve(`from server: ${msg}`)
            //         }, 3000)
            //     })
            // }

            // my fetch
            const myFetch = (msg, decision) => {
                let shouldResolve = decision.toLowerCase();
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if(shouldResolve === "yes") {
                            resolve(`Success: ${msg}`)
                        }
                        else if(shouldResolve === "no") {
                            reject(`Error!: ${msg}`)
                        }
                        else {
                            console.log(`Please give second arguement as "yes" or "no"`);
                        }
                    }, 2000)
                })
            }


        //ex11:
            //myFetch("Taran", "yes");


        //ex12:
            // myFetch("taran", "no")
            // .catch(error => {
            //     console.log(error);
            // })


        //ex13:
            // const getServerResponseLength = msg => {
            //     myFetch(msg, "yes")
            //     .then(data => console.log(data, data.length))
            //     .catch(error => console.log(error))
            // }


        //ex14:
            // const syncCallsToServer = (msg1, msg2) => {
            //     myFetch(msg1, "yes")
            //     .then(dataFromMsg1 => myFetch(msg2, "yes")
            //     .then(dataFromMsg2 => console.log(dataFromMsg1, dataFromMsg2)))
            //     .catch(error => console.log(error))
            // }


        //ex15:
            // const callMyFetch = async () => {
            //     try {
            //         const dataFromFetch = await myFetch("some", "yes");
            //         console.log(dataFromFetch);
            //     } catch(error) {
            //         console.log(error); 
            //     }
            // }
        

        //ex:16:
            // const syncCallsToServerWithAsync = async (msg1, msg2) => {
            //     try {
            //         const dataFromFetch = await myFetch(msg1, "yes");
            //         const dataFromFetch2 = await myFetch(msg2, "yes");
            //         console.log(dataFromFetch, dataFromFetch2);
            //     }
            //     catch(error) {
            //         console.log(error);
            //     }
            // }

            // Variation for catching both errors
            // const syncCallsToServerWithAsync = async (msg1, msg2) => {
            //     try {
            //         const dataFromFetch = await myFetch(msg1, "no");
            //     }
            //     catch(error) {
            //         console.log(error);
            //     }
            //     try {
            //         const dataFromFetch2 = await myFetch(msg2, "no");
            //         console.log(dataFromFetch, dataFromFetch2);
            //     }
            //     catch(error) {
            //         console.log(error);
            //     }
            // }



        //parallel calls in async-await
            // const syncCallsToServerWithAsyncParallel = async (msg1, msg2) => {
            //     try {
            //         const dataFromFetch = await Promise.all([
            //         myFetch(msg1, "yes"),
            //         myFetch(msg2, "yes")
            //         ]);
            //         console.log(dataFromFetch);
            //     }
            //     catch(error) {
            //         console.log(error);
            //     }
            // }

            // Variation for catching both error & success

            // const syncCallsToServerWithAsyncParallel2 = async (msg1, msg2) => {
            //     try {
            //         const dataFromFetch = await Promise.allSettled([
            //         myFetch(msg1, "no"),
            //         myFetch(msg2, "yes")
            //         ]);
            //         console.log(dataFromFetch);
            //     }
            //     catch(error) {
            //         console.log(error);
            //     }
            // }