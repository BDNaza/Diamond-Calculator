// Import the react-native-sound module
// var Sound = require('react-native-sound');
import Sound from 'react-native-sound';

// Enable playback in silence mode
Sound.setCategory('Ring');

// Load the sound file 'whoosh.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.

var whoosh = new Sound('single_tick.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

    // Play the sound with an onEnd callback
    whoosh.play((success) => {
        if (success) {
            console.log('successfully finished playing');
        } else {
            console.log('playback failed due to audio decoding errors');
        }
    });
});

// Reduce the volume by half
whoosh.setVolume(0.1);

// Position the sound to the full right in a stereo field
// whoosh.setPan(1);

// Loop indefinitely until stop() is called
whoosh.setNumberOfLoops(0);

// Get properties of the player instance
console.log('volume: ' + whoosh.getVolume());
console.log('pan: ' + whoosh.getPan());
console.log('loops: ' + whoosh.getNumberOfLoops());

// Seek to a specific point in seconds
// whoosh.setCurrentTime(2.5);

// Get the current playback point in seconds
whoosh.getCurrentTime((seconds) => console.log('at ' + seconds));

// Pause the sound
// whoosh.pause();

// Stop the sound and rewind to the beginning
whoosh.stop(() => {
    // Note: If you want to play a sound after stopping and rewinding it,
    // it is important to call play() in a callback.
    whoosh.play();
});

// Release the audio player resource
whoosh.release();



