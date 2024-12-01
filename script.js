function calculateFee() {
    // Get form values
    const baseline = parseFloat(document.getElementById('numTokens').value);
    const riskProfileMultiplier = parseFloat(document.getElementById('riskProfile').value);
    const webPagesIncrement = parseFloat(document.getElementById('webPages').value);
    const clientCommsIncrement = parseFloat(document.getElementById('emails').value);
    const socialsPresenceIncrement = parseFloat(document.getElementById('socialMedia').value);
    const socialsVolumeIncrement = parseFloat(document.getElementById('socialVolume').value);
    const dickheadFactor = parseFloat(document.getElementById('dickheadFactor').value);

    // Calculate Fee
    const fee = (
        (baseline * riskProfileMultiplier) +
        (baseline * (webPagesIncrement + clientCommsIncrement)) +
        (baseline * (socialsPresenceIncrement + socialsVolumeIncrement))
    ) * dickheadFactor;

    // Update the result
    document.getElementById('feeAmount').textContent = fee.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP'
    });
}
