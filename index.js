// Code your solution in this file!
const logDriverNames = function(arr){
  for(let element of arr){

    console.log(element.name)
  }
}

const logDriversByHometown = function (arr, str){
  const filteredByHometown = arr.filter(function(driver){
    return driver.hometown === str
  })
  filteredByHometown.map(function(driver){
    return console.log(driver.name)
  })
}

const driversByRevenue = function (arr){
  let sortArr = [...arr]
  return sortArr.sort(function(a, b){
    return a.revenue - b.revenue
  })
}

const driversByName = function (arr){
  const sortArr = arr.slice()
  return sortArr.sort(function(a, b){
    return a.name.localeCompare(b.name)
  })
}

const totalRevenue = function (arr){
  // debugger
  return arr.reduce(function(acc, el){
    return acc += el.revenue
  }, 0)
}

const averageRevenue = function (arr){
  return totalRevenue(arr)/arr.length
}
