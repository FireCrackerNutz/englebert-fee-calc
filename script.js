// script.js

// Event listener for the Calculate Fee button
document.getElementById("calculate-fee").addEventListener("click", function() {
    // Retrieve values from the dropdowns
    const baseline = parseFloat(document.getElementById("tokens").value);
    const riskMultiplier = parseFloat(document.getElementById("risk-profile").value);
    const webIncrement = parseFloat(document.getElementById("web-app").value);
    const emailIncrement = parseFloat(document.getElementById("emails").value);
    const socialsPresenceIncrement = parseFloat(document.getElementById("socials-presence").value);
    const socialsVolumeIncrement = parseFloat(document.getElementById("socials-volume").value);

    // Calculate the estimated fee
    const fee = 
        (baseline * riskMultiplier) +
        (baseline * (webIncrement + emailIncrement)) +
        (baseline * (socialsPresenceIncrement + socialsVolumeIncrement));

    // Update the fee display
    document.getElementById("fee-display").innerText = `£${fee.toFixed(2)}`;
});
