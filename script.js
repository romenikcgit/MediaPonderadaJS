function calcularMediaPonderada() {
    let n1 = 10, n2 = 8.0, n3 = 9.0;
    let p1 = 2, p2 = 3, p3 = 5;

    let media = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);

    document.getElementById("resultado").innerText = "A média ponderada é: " + media.toFixed(2);
}
