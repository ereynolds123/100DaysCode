// const arry = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
    // JS by default uses a crappy string compare.
    // (we use slice to clone the array so the
    // original array won't be modified)
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  }
  
  let duplicatedArray = [10, 20, 20, 10, 10, 30, 50, 10, 20];

  console.log(`The duplicates in ${duplicatedArray} are ${findDuplicates(duplicatedArray)}`);
  