let waterAvailable = 300;

if (waterAvailable > 500) {
  console.log("Enough Water.");
} else if (waterAvailable >= 200 && waterAvailable <= 500) {
  console.log("Water is limited.");
} else {
  console.log("Water shortage.");
}