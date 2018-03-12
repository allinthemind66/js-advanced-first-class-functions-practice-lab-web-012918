// Code your solution in this file!
function logDriverNames(arr){
  for(let element of arr){

    console.log(element.name)
  }
}

function logDriversByHometown(arr, str){
  const filteredByHometown = arr.filter(function(driver){
    return driver.hometown === str
  })
  filteredByHometown.map(function(driver){
    return console.log(driver.name)
  })
}

function driversByRevenue(arr){
  let sortArr = [...arr]
  return sortArr.sort(function(a, b){
    return a.revenue - b.revenue
  })
}

function driversByName(arr){
  const sortArr = arr.slice()
  return sortArr.sort(function(a, b){
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(arr){
  // debugger
  return arr.reduce(function(acc, el){
    return acc += el.revenue
  }, 0)
}

function averageRevenue(arr){
  return totalRevenue(arr)/arr.length
}
