var BaseSoundManager = require('./BaseSoundManager');
var WebAudioSoundManager = require('./webaudio/WebAudioSoundManager');

var SoundManagerCreator = {

    create: function (game)
    {
        var audioConfig = game.config.audio;
        var deviceAudio = game.device.Audio;

        if ((audioConfig && audioConfig.noAudio) || (!deviceAudio.webAudio && !deviceAudio.audioData))
        {
            // TODO add no audio implementation of BaseSoundManager id:321 gh:322
            return new BaseSoundManager(game);
        }

        if(deviceAudio.webAudio && !(audioConfig && audioConfig.disableWebAudio))
        {
            return new WebAudioSoundManager(game);
        }

        // TODO return HTML5 Audio sound manager id:292 gh:293
        return new BaseSoundManager(game);
    }

};

module.exports = SoundManagerCreator;
