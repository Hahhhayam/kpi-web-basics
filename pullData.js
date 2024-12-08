addEventListener("DOMContentLoaded", ()  => {
    fetch("https://randomuser.me/api/?results=100")
        .then(response => response.json())
        .then(data => buildProfiles(data));
})

function buildProfiles(data) {
    const loader = document.getElementById("loader-nest");
    loader.style.display = "none";

    const nest = document.getElementById("cards-nest");
    nest.style.display = "content";

    for (const item of data.results) {
        nest.innerHTML +=
            `<div class="card">
                <img alt="User photo" src=${item.picture.large}>
                <div class="field">Name</div>
                <div class="value">${Object.values(item.name).join(" ")}</div>
                <div class="field">Cell</div>
                <div class="value">${item.cell}</div>
                <div class="field">City</div>
                <div class="value">${item.location.city}</div>
                <div class="field">Country</div>
                <div class="value">${item.location.country}</div>
                <div class="field">Postcode</div>
                <div class="value">${item.location.postcode}</div>
            </div>`;
    }
}