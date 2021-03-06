$(".state-select").change(function () {
  $(".container").show();
  var query = document.getElementById("search-term").value;
  maps.src = images[query];
  console.log(query);
});

//Movement animation piece
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const map = document.querySelector(".map");
const description = document.querySelector(".description");
const list = document.querySelector(".list");
const moreinfo = document.querySelector(".more-info");
const weather = document.querySelector(".weather");
const trails = document.querySelector(".trails");

//Animation event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Pop out
  title.style.transform = "translateZ(80px)";
  map.style.transform = "translateZ(50px)";
  description.style.transform = "translateZ(50px)";
  weather.style.transform = "translateZ(50px)";
  trails.style.transform = "translateZ(60px)";
  //moreinfo.style.transform = "translateZ(80px)";
});
//Animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Pop back
  title.style.transform = "translateZ(0px)";
  map.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  weather.style.transform = "translateZ(0px)";
  trails.style.transform = "translateZ(0px)";
  //moreinfo.style.transform = "translateZ(0px)";
});

// -----------------------------------------------------------------------------------------
var currentTime = moment().format("MM/DD/YY");
var apiKey = "78abac7397dbff0934df4ef82fc5fd58";
var apiKey2 = "200974984-c9f2b134614b531af1bbb9832b1b52b5";
var query = document.getElementById("search-term");
var maps = document.getElementById("map");

var images = {
  Alabama: "https://kohringsw.github.io/hike-now/assets/images/state-images/alabama.png",
  Alaska: "https://kohringsw.github.io/hike-now/assets/images/state-images/alaska.png",
  Arizona: "https://kohringsw.github.io/hike-now/assets/images/state-images/arizona.png",
  Arkansas: "https://kohringsw.github.io/hike-now/assets/images/state-images/arkansas.png",
  California: "https://kohringsw.github.io/hike-now/assets/images/state-images/california.png",
  Colorado: "https://kohringsw.github.io/hike-now/assets/images/state-images/colorado.png",
  Connecticut: "https://kohringsw.github.io/hike-now/assets/images/state-images/connecticut.png",
  Delaware: "https://kohringsw.github.io/hike-now/assets/images/state-images/delaware.png",
  Florida: "https://kohringsw.github.io/hike-now/assets/images/state-images/florida.png",
  Georgia: "https://kohringsw.github.io/hike-now/assets/images/state-images/georgia.png",
  Hawaii: "https://kohringsw.github.io/hike-now/assets/images/state-images/hawaii.png",
  Idaho: "https://kohringsw.github.io/hike-now/assets/images/state-images/idaho.png",
  Illinois: "https://kohringsw.github.io/hike-now/assets/images/state-images/illinois.png",
  Indiana: "https://kohringsw.github.io/hike-now/assets/images/state-images/indiana.png",
  Iowa: "https://kohringsw.github.io/hike-now/assets/images/state-images/iowa.png",
  Kansas: "https://kohringsw.github.io/hike-now/assets/images/state-images/kansas.png",
  Kentucky: "https://kohringsw.github.io/hike-now/assets/images/state-images/kentucky.png",
  Louisiana: "https://kohringsw.github.io/hike-now/assets/images/state-images/louisiana.png",
  Maine: "https://kohringsw.github.io/hike-now/assets/images/state-images/maine.png",
  Maryland: "https://kohringsw.github.io/hike-now/assets/images/state-images/maryland.png",
  Massachusetts: "https://kohringsw.github.io/hike-now/assets/images/state-images/massachusetts.png",
  Michigan: "https://kohringsw.github.io/hike-now/assets/images/state-images/michigan.png",
  Minnesota: "https://kohringsw.github.io/hike-now/assets/images/state-images/minnesota.png",
  Mississippi: "https://kohringsw.github.io/hike-now/assets/images/state-images/mississippi.png",
  Missouri: "https://kohringsw.github.io/hike-now/assets/images/state-images/missouri.png",
  Montana: "https://kohringsw.github.io/hike-now/assets/images/state-images/montana.png",
  Nebraska: "https://kohringsw.github.io/hike-now/assets/images/state-images/nebraska.png",
  Nevada: "https://kohringsw.github.io/hike-now/assets/images/state-images/nevada.png",
  "New Hampshire": "https://kohringsw.github.io/hike-now/assets/images/state-images/newhampshire.png",
  "New Jersey": "https://kohringsw.github.io/hike-now/assets/images/state-images/newjersey.png",
  "New Mexico": "https://kohringsw.github.io/hike-now/assets/images/state-images/newmexico.png",
  "New York": "https://kohringsw.github.io/hike-now/assets/images/state-images/newyork.png",
  "North Carolina": "https://kohringsw.github.io/hike-now/assets/images/state-images/northcarolina.png",
  "North Dakota": "https://kohringsw.github.io/hike-now/assets/images/state-images/northdakota.png",
  Ohio: "https://kohringsw.github.io/hike-now/assets/images/state-images/ohio.png",
  Oklahoma: "https://kohringsw.github.io/hike-now/assets/images/state-images/oklahoma.png",
  Oregon: "https://kohringsw.github.io/hike-now/assets/images/state-images/oregon.png",
  Pennsylvania: "https://kohringsw.github.io/hike-now/assets/images/state-images/pennsylvania.png",
  "Rhode Island": "https://kohringsw.github.io/hike-now/assets/images/state-images/rhodeisland.png",
  "South Carolina": "https://kohringsw.github.io/hike-now/assets/images/state-images/southcarolina.png",
  "South Dakota": "https://kohringsw.github.io/hike-now/assets/images/state-images/southdakota.png",
  Tennessee: "https://kohringsw.github.io/hike-now/assets/images/state-images/tennessee.png",
  Texas: "https://kohringsw.github.io/hike-now/assets/images/state-images/texas.png",
  Utah: "https://kohringsw.github.io/hike-now/assets/images/state-images/utah.png",
  Vermont: "https://kohringsw.github.io/hike-now/assets/images/state-images/vermont.png",
  Virginia: "https://kohringsw.github.io/hike-now/assets/images/state-images/virginia.png",
  Washington: "https://kohringsw.github.io/hike-now/assets/images/state-images/washington.png",
  "West Virginia": "https://kohringsw.github.io/hike-now/assets/images/state-images/westvirginia.png",
  Wisconsin: "https://kohringsw.github.io/hike-now/assets/images/state-images/wisconsin.png",
  Wyoming: "https://kohringsw.github.io/hike-now/assets/images/state-images/wyoming.png",
};

console.log(currentTime);

$("#search-term").keypress(function (e) {
  if (e.which == 13) {
    $("#search-term").change();
  }
});

// UV index
function uvIndex(lng, lat) {
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lng}`,
    method: "GET",
  }).then(function (response1) {
    var uvFormat = response1.value.toFixed(2);
    if (uvFormat < 3) {
      document.getElementById("uvIndex").innerHTML =
        "UV Index: " + `<span class=" badge badge-success">${uvFormat}</span>`;
    } else if (uvFormat > 2.99 && uvFormat < 6) {
      document.getElementById("uvIndex").innerHTML =
        "UV Index: " + `<span class=" badge badge-warning">${uvFormat}</span>`;
    } else if (uvFormat > 5.99) {
      document.getElementById("uvIndex").innerHTML =
        "UV Index: " + `<span class=" badge badge-danger">${uvFormat}</span>`;
    }
  });
}

let geocoder;

function successFunction(position) {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  console.log(lat, lng);

  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=${apiKey}`,
    method: "GET",
  }).then(function (response) {
    updateLocation(response);
  });
  uvIndex(lng, lat);
}

// Trails
function getTrails(lng, lat) {
  $.ajax({
    url: `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&key=${apiKey2}`,
    method: "GET",
  }).then(function (response) {
    console.log(response.trails[0]);
    $("#trail1").html(`<h2>${response.trails[0].name}</h2>`);
    $("#trail2").html(`<h2>${response.trails[1].name}</h2>`);
    $("#trail3").html(`<h2>${response.trails[2].name}</h2>`);
    $("#trail4").html(`<h2>${response.trails[3].name}</h2>`);
    $("#trail5").html(`<h2>${response.trails[4].name}</h2>`);
    $("#location1").text(response.trails[0].location);
    $("#location2").text(response.trails[1].location);
    $("#location3").text(response.trails[2].location);
    $("#location4").text(response.trails[3].location);
    $("#location5").text(response.trails[4].location);
    $("#difficulty1").text("Difficulty: " + response.trails[0].difficulty);
    $("#difficulty2").text("Difficulty: " + response.trails[1].difficulty);
    $("#difficulty3").text("Difficulty: " + response.trails[2].difficulty);
    $("#difficulty4").text("Difficulty: " + response.trails[3].difficulty);
    $("#difficulty5").text("Difficulty: " + response.trails[4].difficulty);
    $("#length1").text("Length: " + response.trails[0].length + " miles");
    $("#length2").text("Length: " + response.trails[1].length + " miles");
    $("#length3").text("Length: " + response.trails[2].length + " miles");
    $("#length4").text("Length: " + response.trails[3].length + " miles");
    $("#length5").text("Length: " + response.trails[4].length + " miles");
    $("#url1").text("MORE INFORMATION").attr("href", response.trails[0].url);
    $("#url2").text("MORE INFORMATION").attr("href", response.trails[1].url);
    $("#url3").text("MORE INFORMATION").attr("href", response.trails[2].url);
    $("#url4").text("MORE INFORMATION").attr("href", response.trails[3].url);
    $("#url5").text("MORE INFORMATION").attr("href", response.trails[4].url);
  });
}

function updateLocation(response) {
  $(".date").html(`<h2>${currentTime}:</h2>`);
  $(".weather-icon").html(
    `<h2><img src="https://openweathermap.org/img/w/${response.weather[0].icon}.png"></h2>`
  );
  $(".temperature").text("Temp: " + Math.round(response.main.temp) + "°F");
  $(".title").html(response.name);
  // maps.src = images[response.name];
  if (response.name === "State of Maine") {
    $(".title").text("Maine");
    $(".trail-desc").text("BEST HIKING TRAILS IN MAINE");
  } else if (response.name === "State of Wyoming") {
    $(".title").text("Wyoming");
    $(".trail-desc").text("BEST HIKING TRAILS IN WYOMING");
  } else {
    $(".trail-desc").text("BEST HIKING TRAILS IN " + response.name);
  }
}

function errorFunction() {
  alert("Geocoder failed");
}

function stateSearch() {
  $(".state-select").change(function (event) {
    //this event prevents default refreshing of the page upon button click
    event.preventDefault("change");
    let city = $("#search-term").val().trim();
    if (city != "") {
      $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`,
        method: "GET",
      }).then(function (response) {
        updateLocation(response);
        uvIndex(response.coord.lon, response.coord.lat);
        getTrails(response.coord.lon, response.coord.lat);
      });
    }
  });
}
stateSearch();

const cityInfo = async (city) => {
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  const response = await fetch(queryURL);
  const result = await response.json();
  return result;
};

const buttonClick = (city) => {
  cityInfo(city).then((response) => {
    updateLocation(response);
    uvIndex(response.coord.lon, response.coord.lat);
    getTrails(response.coord.lon, response.coord.lat);
  });
};
