(() => {
  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("play");
  const pauseBtn = document.getElementById("pause");
  const stopBtn = document.getElementById("stop");
  const reverseBtn = document.getElementById("reverse");
  const counter = document.querySelector("#screen .counter");

  if (!audio || !playBtn || !pauseBtn || !stopBtn || !reverseBtn || !counter) return;

  function formatTime(totalSeconds) {
    const s = Math.max(0, Math.floor(totalSeconds || 0));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }

  function render() {
    counter.textContent = formatTime(audio.currentTime);
  }

  playBtn.addEventListener("click", async () => {
    try {
      await audio.play();
    } catch (e) {
      // If the browser blocks playback, user will need to click again after interacting.
      // Keep silent to avoid spamming console for a class project.
    }
  });

  pauseBtn.addEventListener("click", () => {
    audio.pause();
    render();
  });

  stopBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    render();
  });

  // "Reverse" = jump back 10 seconds
  reverseBtn.addEventListener("click", () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
    render();
  });

  audio.addEventListener("loadedmetadata", render);
  audio.addEventListener("timeupdate", render);
  audio.addEventListener("ended", render);

  render();
})();



