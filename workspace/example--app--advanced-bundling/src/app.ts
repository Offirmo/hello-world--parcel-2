
import { add } from '@offirmo-private/example--module--ts'

console.log('Hello world!')
console.log('2 + 2 =', add(2, 2))

import { Howl, Howler } from 'howler'
const src = new URL('./assets/audio/licensed/audio_alchemist/SpellBook_TurnPage_01.mp3', import.meta.url)
console.log(src)
const sound = new Howl({
	src: [ src ],
	format: [ 'mp3' ],
	onload(...rest) { console.log(`onload`, rest) },
	onloaderror(...rest) { console.log(`onloaderror`, rest) },
	onplayerror(...rest) { console.log(`onplayerror`, rest) },
	onunlock(...rest) { console.log(`onunlock`, rest); sound.play() },
})

;["mp3", "mpeg", "opus", "ogg", "oga", "wav", "aac", "caf", "m4a", "m4b", "mp4", "weba", "webm", "dolby", "flac"].forEach(ext => {
	console.log(`${ext} support = ${Howler.codecs(ext)}`)
})
/*
import get from './assets/audio/spellbook--turn_page.ts'
get().then(sound => {
	console.log('loaded')
	sound.once('unlock', function() {
		console.log('unlocked')
		sound.play();
	});
})
*/
