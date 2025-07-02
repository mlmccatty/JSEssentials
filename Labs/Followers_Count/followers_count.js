let count = 0;
function increaseCount() {
    count++; // count = count + 1; || Incrementing count by 1.
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram account has gained 10 followers.")
    } else if (count === 20) {
        alert("Your Instagram account has gained 20 followers.")
    }
}

