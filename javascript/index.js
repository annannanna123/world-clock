function updateTime() {
  // Vancouver
  let vancouverElement = document.querySelector("#vancouver");
  if (vancouverElement) {
    let vancouverDateElement = vancouverElement.querySelector(".date");
    let vancouverTimeElement = vancouverElement.querySelector(".time");
    let vancouverTime = moment().tz("America/Vancouver");

    vancouverDateElement.innerHTML = vancouverTime.format("MMMM Do YYYY");
    vancouverTimeElement.innerHTML = vancouverTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Luxembourg
  let luxembourgElement = document.querySelector("#luxembourg");
  if (luxembourgElement) {
    let luxembourgDateElement = luxembourgElement.querySelector(".date");
    let luxembourgTimeElement = luxembourgElement.querySelector(".time");
    let luxembourgTime = moment().tz("Europe/Luxembourg");

    luxembourgDateElement.innerHTML = luxembourgTime.format("MMMM Do YYYY");
    luxembourgTimeElement.innerHTML = luxembourgTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Kuala Lumpur
  let kualaLumpurElement = document.querySelector("#kuala-lumpur");
  if (kualaLumpurElement) {
    let kualaLumpurDateElement = kualaLumpurElement.querySelector(".date");
    let kualaLumpurTimeElement = kualaLumpurElement.querySelector(".time");
    let kualaLumpurTime = moment().tz("Asia/Kuala_Lumpur");

    kualaLumpurDateElement.innerHTML = kualaLumpurTime.format("MMMM Do YYYY");
    kualaLumpurTimeElement.innerHTML = kualaLumpurTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  function updateCityTime() {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        <a href="/">All cities</a>
        `;
  }

  updateCityTime();
  setInterval(updateCityTime, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
