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

 function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr")

    for(const flightDetail in flight) {
      const tableCell = document.createElement("td")
      const word = 

      
      tableCell.innerText = flight[flightDetail]
      tableRow.append(tableCell)

    }
    
    tableBody.append(tableRow)

  }
 }

 populateTable()