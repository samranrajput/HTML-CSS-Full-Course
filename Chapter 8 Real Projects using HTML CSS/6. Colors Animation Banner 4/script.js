const canvas = document.getElementById('sparkleCanvas');
    const ctx = canvas.getContext('2d');

    let width, height;
    let particles = [];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    function createParticles(count) {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          opacity: Math.random(),
        });
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#ffffff";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        // bounce
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        // twinkle
        p.opacity += (Math.random() - 0.5) * 0.05;
        if (p.opacity < 0.2) p.opacity = 0.2;
        if (p.opacity > 1) p.opacity = 1;
      }
    }

    function animate() {
      drawParticles();
      requestAnimationFrame(animate);
    }

    createParticles(100); // Sparkles count
    animate();