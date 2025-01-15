export default ({
    frequency,
    beats = 1,
    bpm = 150,
    currentContext = null,
    real = [0, 1],
    imag = [0, 0],
}) => {
    let context = currentContext;
    if (!context) {
        context = window.AudioContext
            ? new window.AudioContext()
            : new window.webkitAudioContext();
    }

    // https://www.youtube.com/watch?v=p0Fv9CX1FGc might help
    const ac = new AudioContext();

    const wave = new PeriodicWave(ac, {
        real,
        imag,
        disableNormalization: false,
    });

    console.log({real, imag});

    const oscillator = context.createOscillator();
    oscillator.connect(context.destination);
    oscillator.setPeriodicWave(wave);
    oscillator.frequency.value = frequency; // value in hertz
    oscillator.start();

    const duration = (60 / bpm / 4) * beats * 1000;
    setTimeout(() => {
        oscillator.stop();
        oscillator.disconnect();
    }, duration);
};