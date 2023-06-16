const challengeCardContainer = document.querySelector(".challenge-container");

const loadData = async () => {
  const url = "../public/js/data.json";
  const response = await fetch(url);
  const data = await response.json();

  challengeCardContainer.innerHTML = "";

  data.forEach((item) => {
    createChallenge(item);
  });
};

const createChallenge = (data) => {
  const url = `https://${data.name}.netlify.app`;
  const repository = `https://github.com/Renzorr/${data.name}`;

  let card = `
    <div class="challenge-card" data-value=${data.level}>
      <picture>
        <img src="../public/assets/${data.name}.png" alt=${data.name}>
      </picture>
      <figcaption class="card-hover">
        <a class="visit" href=${url} target="_blank">Visit</a>
        <div class="challenge-content">
          <h2>${data.title}</h2>
          <div class="challenge-content_info">
            <p>${data.level}</p>
            <a class="repository" href=${repository} target="_blank">Github</a>
          </div>
        </div>
      </figcaption>
    </div>`;

  challengeCardContainer.innerHTML += card;
};
