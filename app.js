 const tableBody = document.getElementById('table-body')

 let flights = [
  {
    time: "08:11",
    destination: "OMAN",
    flight: "OX 207",
    gate: "A 08",
    remarks: "ON TIME"
  },
  {
    time: "09:14",
    destination: "LONDON",
    flight: "DX 506",
    gate: "B 09",
    remarks: "CANCELLED"
  },
  {
    time: "10:11",
    destination: "NEW YORK",
    flight: "OV 589",
    gate: "K 11",
    remarks: "DELAYED"
  },
  {
    time: "11:11",
    destination: "WARSZAWA",
    flight: "OX 207",
    gate: "A 08",
    remarks: "ON TIME"
  },
  {
    time: "15:11",
    destination: "OSLO",
    flight: "OX 207",
    gate: "A 08",
    remarks: "ON TIME"
  },
 ]


 const destinations = ["TOKYO", "PARIS", "LONDON", "BEIRUT", "BANGKOK", "RHODOS"]
 const remarks = ["ON TIME", "CANCELLED", "DELAYED"]
 let hour = 15

 function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr")

    for(const flightDetail in flight) {
      const tableCell = document.createElement("td")
      const word = Array.from(flight[flightDetail])

      for(const [index,letter] of word.entries()) {
        const letterElement = document.createElement('div')

        setTimeout(() => {
          letterElement.classList.add('flip')
          letterElement.textContent = letter
          tableCell.append(letterElement)
        }, 100 * index)

      }

      tableRow.append(tableCell)

    }
    
    tableBody.append(tableRow)

  }
 }

 populateTable()


 function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPRSTUVWXYZ"
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
 }


 function generateRandomNumber(maxNumber) {
  const numbers = "0123456789"
  if(maxNumber) {
    const newNumbers = numbers.slice(0, maxNumber + 1)
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
  }
  return numbers.charAt(Math.floor(Math.random() * numbers.length))
 }

 function generateTime() {
     let displayHour = hour

     if (hour < 24) {
      hour++
     }
     if (hour >= 24) {
      hour = 1
      displayHour = hour
     }
     if (hour < 10) {
      displayHour = "0" + hour
     }

     return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber()

 }

function shuffleUP() {
  flights.shift()
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
    gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })
    tableBody.textContent = ""
    populateTable()
}

setInterval(shuffleUP, 2000)
