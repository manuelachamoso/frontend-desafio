function togglePanel(panelNumber) {
    let panel = document.querySelector('.panel:nth-child(' + panelNumber + ')');
    let panelContent = panel.querySelector('.panel-content');
    panelContent.style.display = (panelContent.style.display === 'block') ? 'none' : 'block';
}
