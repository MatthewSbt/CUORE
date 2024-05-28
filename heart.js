window.onload = function() {
    const canvas = document.getElementById('heartCanvas');
    const ctx = canvas.getContext('2d');

    function hearta(k) {
        return 15 * Math.sin(k) ** 3;
    }

    function heartb(k) {
        return 12 * Math.cos(k) - 5 * Math.cos(2 * k) - 2 * Math.cos(3 * k) - Math.cos(4 * k);
    }

    function drawHeart(scale) {
        ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        ctx.beginPath();
        for (let i = 0; i <= 2000; i++) {
            const k = i * 2 * Math.PI / 2000;
            const x = hearta(k) * scale;
            const y = heartb(k) * scale;
            if (i === 0) {
                ctx.moveTo(x, -y);
            } else {
                ctx.lineTo(x, -y);
            }
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'red';

    let scale = 20;
    let growing = true;

    function animateHeart() {
        if (growing) {
            scale += 0.2;
            if (scale >= 22) {
                growing = false;
            }
        } else {
            scale -= 0.2;
            if (scale <= 18) {
                growing = true;
            }
        }
        drawHeart(scale);
        requestAnimationFrame(animateHeart);
    }

    animateHeart();
};
