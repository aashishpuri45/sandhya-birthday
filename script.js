const codeInput = document.getElementById("code");
const error = document.getElementById("error");

function unlock() {
  const code = codeInput.value.trim().toUpperCase();

  if (code === "ZEBRACROSSING") {
    document.getElementById("gate").style.display = "none";
    document.getElementById("surprise").classList.remove("hidden");
    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);

    // Start background music
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic) {
      bgMusic.volume = 0.35;
      bgMusic.play().catch(() => {});
    }

  } else {
    error.textContent = "Hmm... that's not the secret code 😄";

    codeInput.animate(
      [
        { transform: "translateX(-6px)" },
        { transform: "translateX(6px)" },
        { transform: "translateX(0)" }
      ],
      { duration: 220 }
    );
  }
}

codeInput.addEventListener("keydown", e => {
  if (e.key === "Enter") unlock();
});

function revealSecret() {
  const msg = document.getElementById("secretMessage");
  const btn = document.getElementById("secretBtn");

  msg.classList.add("show");
  btn.textContent = "✨ Secret unlocked";
  btn.disabled = true;
}