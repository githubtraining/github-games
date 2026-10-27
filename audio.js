

(function () {
  let audioContext = null;
  let muted = false;
  let musicTimer = null;
  let noteIndex = 0;

  const melody = [
    261.63, 329.63, 392.00, 329.63,
    293.66, 349.23, 440.00, 349.23,
    261.63, 329.63, 392.00, 523.25,
    440.00, 392.00, 329.63, 293.66
  ];

  function init() {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!audioContext && AudioContextClass) {
      audioContext = new AudioContextClass();
    }

    if (audioContext && audioContext.state === "suspended") {
      audioContext.resume();
    }
  }

  function tone(frequency, duration, volume, type) {
    if (muted || !audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const now = audioContext.currentTime;

    oscillator.type = type || "square";
    oscillator.frequency.setValueAtTime(frequency, now);

    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(
      0.001, now + duration
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(now);
    oscillator.stop(now + duration);
  }

  function startMusic() {
    init();

    if (!audioContext || musicTimer) return;

    musicTimer = setInterval(function () {
      if (!muted) {
        tone(melody[noteIndex], 0.18, 0.025, "triangle");
        noteIndex = (noteIndex + 1) % melody.length;
      }
    }, 220);
  }

  function stopMusic() {
    clearInterval(musicTimer);
    musicTimer = null;
  }

  function move() {
    init();
    tone(440, 0.045, 0.04);
  }

  function rotate() {
    init();
    tone(660, 0.065, 0.04);
  }

  function lock() {
    init();
    tone(180, 0.10, 0.05);
  }

  function toggleMute() {
    muted = !muted;

    const button = document.getElementById("muteButton");

    if (button) {
      button.textContent = muted
        ? "🔇 Som desligado"
        : "🔊 Som ligado";

      button.setAttribute("aria-pressed", String(muted));
    }

    if (!muted) init();
  }

  function isMuted() {
    return muted;
  }

  document.getElementById("muteButton")
    ?.addEventListener("click", function () {
      init();
      toggleMute();
    });

  window.TetrisAudio = {
    startMusic,
    stopMusic,
    move,
    rotate,
    lock,
    isMuted
  };
})();
