let mymap = L.map('mapid').setView([-6.186462, 106.828021], 14);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', maxZoom: 20, id: 'mapbox.streets', accessToken: 'pk.eyJ1IjoicHV0cmlhbHZ0IiwiYSI6ImNqazk4NGpwbjBneWozeHF4aWJ2dThvNXEifQ.4ZeJeNYPLXUHgzqoXzuFFQ'}).addTo(mymap);
// let lokasi = [-6.186387, 106.830929];
// let sponsor = "KalaKopi Cafe";
let places= [
 {"lokasi": [-6.186387, 106.830929], "sponsor" : "KalaKopi Cafe"},
 {"lokasi": [-6.187379, 106.829953], "sponsor" : "Martabakku Menteng"},
 {"lokasi": [-6.188168, 106.825779], "sponsor" : "Pisa Cafe Menteng"},
 {"lokasi": [-6.184040, 106.825007], "sponsor" : "Pempek Cawan Putih"},
 {"lokasi": [-6.183155, 106.825801], "sponsor" : "Nasi Goreng Kambing Kebon Sirih"}
 ];
for (var p of places) {
 var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
}