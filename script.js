//-------
//Attach the constants with HTML elements
//------

const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      //Update charging info

      updateAllBatteryInfo();

      function updateChargeInfo() {
        batteryChargingTime.innerHTML = `${battery.chargingTime} seconds`;
      }
      function updateLevelInfo() {
        batteryLevel.textContent = battery.level * 100 + "%";
      }
      function updateChargingInfo() {
        const isCharging = battery.charging ? "Yes" : "No";
        batteryCharging.innerHTML = isCharging;
      }
      function updateDischargingInfo() {
        batteryDisChargingTime.innerHTML = `${battery.dischargingTime} seconds`;
      }
      function updateAllBatteryInfo() {
        updateChargeInfo();
        updateLevelInfo();
        updateChargingInfo();
        updateDischargingInfo();
      }
    });
  }
};
battery();
