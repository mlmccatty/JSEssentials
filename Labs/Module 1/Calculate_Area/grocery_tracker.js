function grocerycalculate() {
    let grocery1 = parseFloat(document.getElementById('grocery_1').value);
    let grocery2 = parseFloat(document.getElementById('grocery_2').value);
    let grocery3 = parseFloat(document.getElementById('grocery_3').value);
    let total_grocery = grocery1 + grocery2 + grocery3; 
    document.getElementById('total_print').innerText = `The final cost will be $${total_grocery}.`;
}