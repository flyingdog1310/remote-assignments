//A.call back method
function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(() => {
    return callback(n1 + n2);
  }, delayTime);
}

//following is for testing
delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds

//B.promise method
function delayedResultPromise(n1, n2, delayTime) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n1 + n2);
    }, delayTime);
  });
}

//following is for testing
delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds

//C.async/await method
async function main() {
  const answer = await delayedResultPromise(1000, 310, 1000);
  console.log(answer);
}

//following is for testing
main(); // result will be shown in the console after <delayTime> seconds
