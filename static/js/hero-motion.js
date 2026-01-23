(() => {
  const cube = document.querySelector(".pyramid3d");
  const hero = document.querySelector(".hero");
  if (!cube || !hero) return;

  const baseX = 22;   // degrees
  const baseY = -28;  // degrees

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  let ticking = false;

  const update = () => {
    ticking = false;

    const r = hero.getBoundingClientRect();
    const h = Math.max(1, r.height);
    const progress = clamp((-r.top) / h, 0, 1); // 0 at top, 1 after hero scrolls out

    const rotX = baseX + progress * 18;
    const rotY = baseY + progress * 50;
    const driftY = progress * 120;

    cube.style.transform = `translateY(${driftY}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", update);
})();
