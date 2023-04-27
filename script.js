let storedData;
function fetchData(){
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((response) => response.json())
      .then((data) => {
        storedData = data;
        displayData(storedData);
      })
      .catch((error) => {
        console.error(error);
      });
    }
    
    // Call the fetchData function whenever you need to retrieve data from the API
    fetchData();
    
  
  function sortDataByNRR(storedData) {
    return storedData.sort((a, b) => a.NRR - b.NRR);
  }
  

  function displayData(storedData) {
    const finalData=sortDataByNRR(storedData);
    const table = document.querySelector('table tbody');
        for (let i = 0; i < finalData.length; i++) {
          const row = table.insertRow();
          const { No,Team, Matches, Won, Lost, Tied, NRR, Points} = finalData[i];
           const cells = [No, Team, Matches, Won, Lost, Tied, NRR, Points];

          for (let j = 0; j < 8; j++) {
            const cell = row.insertCell();
            console.log( cells[j]);
            cell.innerText = cells[j];
          }
        }
      }
  
