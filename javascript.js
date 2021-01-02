let value;

function incrementValue()
{
    value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

console.log(value);

const pageFlip1 = () => {
    if (value >= 5) {
        window.location.href = "page-2.html";
    }
    else {
        window.location.href = "page-2-alt.html";
    }
}

const pageFlip2Alt = () => {
    window.location.href = "page-3-alt.html"
}