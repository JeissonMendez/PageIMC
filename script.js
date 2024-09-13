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
        diet = 'Aumenta tu ingesta calórica con alimentos ricos en proteínas, carbohidratos complejos y grasas saludables. Incluye nueces, aguacates, y batidos de frutas.';
    } else if (imc >= 18.5 && imc < 24.9) {
        diagnosis = 'Peso normal';
        diet = 'Mantén una dieta equilibrada con una variedad de frutas, verduras, proteínas magras y granos enteros. Bebe suficiente agua y realiza ejercicio regularmente.';
    } else if (imc >= 25 && imc < 29.9) {
        diagnosis = 'Sobrepeso';
        diet = 'Reduce tu ingesta calórica, especialmente de azúcares y grasas saturadas. Aumenta el consumo de verduras, frutas y proteínas magras. Realiza actividad física moderada a intensa.';
    } else {
        diagnosis = 'Obesidad';
        diet = 'Consulta a un profesional de la salud para un plan adecuado. En general, enfócate en una dieta baja en calorías, rica en nutrientes, y aumenta la actividad física diaria.';
    }

    document.getElementById('result').innerHTML = `
        <table>
            <tr>
                <th>Nombre</th>
                <th>IMC</th>
                <th>Diagnóstico</th>
                <th>Dieta Recomendada</th>
            </tr>
            <tr>
                <td>${name}</td>
                <td>${imc}</td>
                <td>${diagnosis}</td>
                <td>${diet}</td>
            </tr>
        </table>
    `;
});