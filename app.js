function calcularDistanciaYDireccion(eA, nA, eB, nB) {
    const deltaE = eB - eA;
    const deltaN = nB - nA;

    const distancia = Math.sqrt(deltaE ** 2 + deltaN ** 2);

    let anguloRad = Math.atan2(deltaE, deltaN);
    let anguloGrados = anguloRad * (180 / Math.PI);
    if (anguloGrados < 0) anguloGrados += 360;

    const anguloMilesimos = anguloGrados / 0.05625;

    let cuadrante;
    if (deltaE >= 0 && deltaN >= 0) cuadrante = "I";
    else if (deltaE >= 0 && deltaN < 0) cuadrante = "II";
    else if (deltaE < 0 && deltaN < 0) cuadrante = "III";
    else cuadrante = "IV";

    return {
        distancia: distancia.toFixed(3),
        direccion: anguloMilesimos.toFixed(2),
        cuadrante
    };
}

function mostrarResultado() {
    const eA = parseFloat(document.getElementById('eA').value);
    const nA = parseFloat(document.getElementById('nA').value);
    const eB = parseFloat(document.getElementById('eB').value);
    const nB = parseFloat(document.getElementById('nB').value);

    if (isNaN(eA) || isNaN(nA) || isNaN(eB) || isNaN(nB)) {
        document.getElementById('resultado').innerText = "⚠️ Por favor ingresá todas las coordenadas.";
        return;
    }

    const { distancia, direccion, cuadrante } = calcularDistanciaYDireccion(eA, nA, eB, nB);

    document.getElementById('resultado').innerText =
        `📏 Distancia: ${distancia} m\n🧭 Dirección: ${direccion} milésimos\n📐 Cuadrante: ${cuadrante}`;
}