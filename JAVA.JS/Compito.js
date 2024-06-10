 // Array di esempio con lavori disponibili
 const jobs = [
                 { location: "NY, US", title: "java dev" },
                 { location: "Genoa, IT", title: "web dev" },
                 { location: "US", title: "dev" }
             ];

              // Funzione per cercare i lavori in base al titolo e alla posizione
 function searchJobs(jobTitle, jobLocation) {
                 return jobs.filter(job => {
                     const titleMatch = job.title.includes(jobTitle); // Controlla se il titolo contiene la stringa cercata
                     const locationMatch = job.location.includes(jobLocation); // Controlla se la posizione contiene la stringa cercata
                     return titleMatch && locationMatch; // Ritorna vero se entrambe le condizioni sono soddisfatte
                 });
                 }

                   // Funzione per eseguire la ricerca quando si invia il form
  function performSearch() {
                 const jobTitle = document.getElementById("jobTitle").value; 
                 const jobLocation = document.getElementById("jobLocation").value; 
                 const results = searchJobs(jobTitle, jobLocation); 
                 const resultsContainer = document.getElementById("results");
                 resultsContainer.innerHTML = ""; 
                 if (results.length === 0) {
                     resultsContainer.innerHTML = "<p>Nessun risultato trovato</p>"; 
                 } else {
                     for (const element of results) {
                         const job = element;
                         const jobElement = document.createElement("div");
                         jobElement.className = "job";
                         jobElement.innerHTML = `<p>Location: ${job.location}, Title: ${job.title}</p>`;
                         resultsContainer.appendChild(jobElement); 
                     }
                 }
             }