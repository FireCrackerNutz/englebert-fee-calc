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

// Popup logic
const infoButton = document.getElementById("info-button");
const overlay = document.createElement("div");
overlay.id = "overlay";

const popup = document.createElement("div");
popup.className = "popup";

popup.innerHTML = `
    <h3>Medium-High/High Risk Tokens</h3>
    <p><strong>Medium-High Risk:</strong></p>
    <ul>
        <li>AAVE</li>
        <li>ACALA</li>
        <li>ADA</li>
        <li>ANKR</li>
        <li>ARB</li>
        <li>AXS</li>
        <li>BSW</li>
        <li>BTTC</li>
        <li>CHR</li>
        <li>CVX</li>
        <li>DEGO</li>
        <li>DF</li>
        <li>DODO</li>
        <li>DOGE</li>
        <li>FTM</li>
        <li>GLM</li>
        <li>MATIC</li>
        <li>OP</li>
        <li>ORN</li>
        <li>PORTO</li>
        <li>QTUM</li>
        <li>QUICK</li>
        <li>SHIB</li>
        <li>SOL</li>
        <li>STEEM</li>
        <li>TRU</li>
        <li>XLM</li>
        <li>XVS</li>
        <li>YFI</li>
    </ul>
    <p><strong>High Risk:</strong></p>
    <ul>
        <li>ALCX</li>
        <li>ALGO</li>
        <li>ARS</li>
        <li>BAL</li>
        <li>BNT</li>
        <li>BOND</li>
        <li>CATI</li>
        <li>CHZ</li>
        <li>COMP</li>
        <li>COTI</li>
        <li>CRV</li>
        <li>DASH</li>
        <li>DCR</li>
        <li>DUSK</li>
        <li>ETC</li>
        <li>FIL</li>
        <li>FIRO</li>
        <li>FTT</li>
        <li>GMX</li>
        <li>GMT</li>
        <li>IOTA</li>
        <li>JASMY</li>
        <li>JST</li>
        <li>LINA</li>
        <li>LUNA</li>
        <li>LUNC</li>
        <li>MANA</li>
        <li>MOB</li>
        <li>MULTI</li>
        <li>NEAR</li>
        <li>NEXO</li>
        <li>OMG</li>
        <li>ONE</li>
        <li>OOKI</li>
        <li>PEPE</li>
        <li>PIVX</li>
        <li>POPCAT</li>
        <li>REN</li>
        <li>RUNE</li>
        <li>SCRT</li>
        <li>STG</li>
        <li>SYN</li>
        <li>TRX</li>
        <li>USTC</li>
        <li>WTC</li>
        <li>XMR</li>
        <li>ZEC</li>
        <li>ZRX</li>
    </ul>
    <button id="close-popup">Close</button>
`;

document.body.appendChild(overlay);
document.body.appendChild(popup);

infoButton.addEventListener("click", () => {
    overlay.style.display = "block";
    popup.style.display = "block";
});

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    popup.style.display = "none";
});

document.getElementById("close-popup").addEventListener("click", () => {
    overlay.style.display = "none";
    popup.style.display = "none";
});
