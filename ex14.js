//Receba uma data no formato &quot;2025-04-15&quot; e transforme para &quot;15/04/2025&quot; usando split() e reverse().

function reorganizarData(data) {
    return data.split('-').reverse().join('/');
  }
  
  console.log(reorganizarData('2025-04-15')); // Saída: 15/04/2025