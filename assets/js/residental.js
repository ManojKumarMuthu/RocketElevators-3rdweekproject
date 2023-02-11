// const api_url = "http://99.79.77.144:3000/api/agents";

// let filteredData;

// async function getapi(url) {
//   const response = await fetch(url);
//   var data = await response.json();
//   filteredData = data.filter(item => item.rating >= 95);
//   console.log(filteredData);
//   show(filteredData);
// }

// getapi(api_url);

// function show(data) {
//   let sortDirection = 1;
//   let sortField = 'first_name';

//   const sortselect = document.getElementById('sortselect');
//   const sortorder = document.getElementById('sortorder');

//   sortselect.addEventListener('change', () => {
//     sortField = sortselect.value;
//     showData();
//   });

//   sortorder.addEventListener('change', () => {
//     sortDirection = sortorder.value === 'ascending' ? 1 : -1;
//     showData();
//   });

//   function showData() {
//     // sort data based on selected field and sort direction
//     filteredData.sort((a, b) => {
//       if (a[sortField] < b[sortField]) return -1 * sortDirection;
//       if (a[sortField] > b[sortField]) return 1 * sortDirection;
//       return 0;
//     });

//     let tab = `
//       <table>
//         <tr>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Region</th>
//           <th>Rating</th>
//         </tr>
//     `;

//     for (let r of filteredData) {
//       tab += `
//         <tr>
//           <td>${r.first_name} </td>
//           <td>${r.last_name}</td>
//           <td>${r.region}</td>
//           <td>${r.rating}</td>
//         </tr>
//       `;
//     }

//     tab += "</table>";

//     document.getElementById("tableContainer").innerHTML = tab;
//   }
// }


const api_url = "http://99.79.77.144:3000/api/agents";

async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    filteredData = data.filter(item => item.rating >= 95);
    console.log(filteredData);
    show(filteredData);
  }
  
  getapi(api_url);
  
  function show(data) {
    let sortDirection = 1;
    let sortField = 'first_name';
    let regionFilter = null;
  
    const sortselect = document.getElementById('sortselect');
    const sortorder = document.getElementById('sortorder');
    const regionselect = document.getElementById('regionselect');
  
    sortselect.addEventListener('change', () => {
      sortField = sortselect.value;
      showData();
    });
  
    sortorder.addEventListener('change', () => {
      sortDirection = sortorder.value === 'ascending' ? 1 : -1;
      showData();
    });
  
    regionselect.addEventListener('change', () => {
      regionFilter = regionselect.value === 'all' ? null : regionselect.value;
      showData();
    });
  
    function showData() {
      let dataToShow = filteredData;
  
      if (regionFilter) {
        dataToShow = filteredData.filter(item => item.region === regionFilter);
      }
  
      // sort data based on selected field and sort direction
      dataToShow.sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1 * sortDirection;
        if (a[sortField] > b[sortField]) return 1 * sortDirection;
        return 0;
      });
  
      let tab = `
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Region</th>
            <th>Rating</th>
          </tr>
      `;
  
      for (let r of dataToShow) {
        tab += `
          <tr>
            <td>${r.first_name} </td>
            <td>${r.last_name}</td>
            <td>${r.region}</td>
            <td>${r.rating}</td>
          </tr>
        `;
      }
  
      tab += "</table>";
  
      document.getElementById("tableContainer").innerHTML = tab;
    }
  
    const regions = Array.from(new Set(filteredData.map(item => item.region)));
    let options = '<option value="all">All</option>';
    for (let region of regions) {
      options += `<option value="${region}">${region}</option>`;
    }
    document.getElementById("regionselect").innerHTML = options;
  }
  