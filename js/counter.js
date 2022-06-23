function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

document.addEventListener("load", animateValue(document.getElementById("robots"), 0,$("#robots").data("value"),5000))
document.addEventListener("load", animateValue(document.getElementById("schools"), 0,$("#schools").data("value"),5000))
