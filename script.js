document.addEventListener('DOMContentLoaded', function () {
    const locateButton = document.getElementById('locate-button');
    const earnCreditButton = document.getElementById('earn-credit-button');
    const locationInput = document.getElementById('location-input');
    const deviceModelInput = document.getElementById('device-model');
    const resultsDiv = document.getElementById('results');
    const creditEarnedP = document.getElementById('credit-earned');

    locateButton.addEventListener('click', function () {
        const location = locationInput.value;
        resultsDiv.innerHTML = `<p>Nearest E-Waste Facility: Example Facility</p>`;
    });

    earnCreditButton.addEventListener('click', function () {
        const deviceModel = deviceModelInput.value;
        const creditEarned = 50; 
        creditEarnedP.innerHTML = `Credit Earned: ${creditEarned} points`;
    });
});
