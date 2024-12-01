document.getElementById("calculate-fee").addEventListener("click", function() {
    // Get the selected values
    const baseline = parseFloat(document.getElementById("tokens").value);
    const riskMultiplier = parseFloat(document.getElementById("risk-profile").value);
    const webIncrement = parseFloat(document.getElementById("web-app").value);
    const emailIncrement = parseFloat(document.getElementById("emails").value);
    const socialsPresenceIncrement = parseFloat(document.getElementById("socials-presence").value);
    const socialsVolumeIncrement = parseFloat(document.getElementById("socials-volume").value);

    // Calculate the fee
    const fee = 
        (baseline * riskMultiplier) +
        (baseline * (webIncrement + emailIncrement)) +
        (baseline * (socialsPresenceIncrement + socialsVolumeIncrement));

    // Update the result display
    document.getElementById("fee-display").innerText = `£${fee.toFixed(2)}`;
});
