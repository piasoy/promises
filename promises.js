var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ];

// function logFetch (result) {
//     console.log('data was fetched!')
// }

// //build a promise from urls, run logFetch
// let promiseArr = urls.map(function(url){
//     let promise = $.getJSON(url, logFetch)
//     return promise;
// })

// console.log(promiseArr)

// promiseArr[0]
// .then(promiseArr[1])
// .then(promiseArr[2])
// .then(promiseArr[3])
// .then(promiseArr[4])

// *** Excercise 2 ****
// Promise.all(promiseArr)
// .then(console.log('all the data was fetched!'))

// *** Excercise 3***
function addNumbers(x, y) {
    // let sum = x + y
    let promise =  new Promise(function(resolve, reject){
        if((Number.isInteger(x)) && (Number.isInteger(y))){
            resolve(x + y)
        }
        else if(!(Number.isInteger(x)) && (Number.isInteger(y))){
            reject('the first number is not an integer');
        }
        else if((Number.isInteger(x)) && !(Number.isInteger(y))){
            reject('the second number is not an integer')
        }
        else {
            reject('niether numbers are integers')
        }
    })
    // console.log(promise)
    return promise;
   
}

addNumbers(1, "d")
.then(function(sum){
    console.log(sum)
})
.catch(function(error){
    console.log('error: ', error)
})





//how map arrays work
// function customMap (arr, someFn) {
//     let newArray = []
//     for (let i = 0; i < arr.length; i++) {
//         newArray.push( someFn(arr[i], i, arr) )
//     }
//     return newArray
// }


// const promisesArray1 = urls.map(function(url){  
//     console.dir($.getJSON(url));
//    return $.getJSON(url);
// })





// promises[0]
//   .then(logFetch)
//   .then(promises[1])
//   .then(logFetch)


// $.get(urls[0], logFetch)
//   .then($.get(urls[1], logFetch))
//   .then($.get(urls[2], logFetch))
//   .then($.get(urls[3], logFetch))
//   .then($.get(urls[4], logFetch))