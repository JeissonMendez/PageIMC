document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    
    const imc = (weight / (height * height)).toFixed(2);
    let diagnosis = '';
    let diet = '';

    if (imc < 18.5) {
        diagnosis = 'Bajo peso';
        diet = 'Aumenta tu ingesta calórica con alimentos saludables.';
    } else if (imc >= 18.5 && imc < 24.9) {
        diagnosis = 'Peso normal';
        diet = 'Mantén una dieta equilibrada y saludable.';
    } else if (imc >= 25 && imc < 29.9) {
        diagnosis = 'Sobrepeso';
        diet = 'Reduce tu ingesta calórica y aumenta la actividad física.';
    } else {
        diagnosis = 'Obesidad';
        diet = 'Consulta a un profesional de la salud para un plan adecuado.';
    }

    document.getElementById('result').innerHTML = `
        <h2>Hola, ${name}</h2>
        <p>Tu IMC es: ${imc}</p>
        <p>Diagnóstico: ${diagnosis}</p>
        <p>Dieta recomendada: ${diet}</p>
    `;
});