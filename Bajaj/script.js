fetch("sampleTest.json")
.then(function(response){
   return response.json();
})
.then(function(employees){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let projects of employees){
      out += `
         <tr>
            <td> <img src='${projects.name}'> </td>
            <td>${projects.description}</td>
            <td>${projects.team}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});