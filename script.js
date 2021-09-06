const sectionPotforlio = document.getElementById('Portfolio');

const htmlPotforlio = `<div class="card">
<h5 class="card-header text-center">My Portfolio</h5>
<div class="card-group">
  <div class="card">
  <a href="https://protein-monitoring.netlify.app">
    <img src="images/job1.png" class="card-img-top" alt="...">
    </a>
    <div class="card-body">
      <h5 class="card-title">Protein-Monitoring</h5>
      <p class="card-text">Keep track of your recommended daily protein intake.</p>
    </div>
  </div>
  <div class="card">
  <a href="https://weathers-api.netlify.app">
    <img src="images/job2.png" class="card-img-top" alt="...">
    </a>
    <div class="card-body">
      <h5 class="card-title">Weathers-api</h5>
      <p class="card-text">Look at the weather situation in countries and regions</p>
    </div>
  </div>
  <div class="card">
  <a href="https://statistics-covid-19.netlify.app">
    <img src="images/job3.png" class="card-img-top" alt="...">
    </a>
    <div class="card-body">
      <h5 class="card-title">Statistics-Covid-19</h5>
      <p class="card-text">World wide General Statistics on Covid-19 status</p>

    </div>
  </div>
</div>
</div>`;

sectionPotforlio.insertAdjacentHTML('afterbegin', htmlPotforlio);
