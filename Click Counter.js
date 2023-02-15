let counterValueEl = document.getElementById("counterValue");

let clickCount = localStorage.getItem("clickCount");

if (clickCount === null) {
    counterValueEl.textContent = 0;
} else {
    counterValueEl.textContent = clickCount;

}

function onIncrementCount() {
    let previousCounterValue = counterValueEl.textContent;
    let updatedCounterVaue = parseInt(previousCounterValue) + 1;

    localStorage.setItem("clickCount", updatedCounterVaue);
    counterValueEl.textContent = updatedCounterVaue;
}