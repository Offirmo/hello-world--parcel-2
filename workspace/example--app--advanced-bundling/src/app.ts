
import { add } from '@offirmo-private/example--module--ts'

console.log('Hello world!')
console.log('2 + 2 =', add(2, 2))

import get from '@offirmo-private/assets--audio/SpellBook--TurnPage--01'

const sound = get()
sound.once('unlock', function() {
		console.log('unlocked')
		sound.play()
	});

globalThis.spellbook = function() {
	const sound = get()
	sound.play()
}
/*
import { Howl, Howler } from 'howler'
const url = new URL('./assets/audio/licensed/audio_alchemist/SpellBook_TurnPage_01.mp3', import.meta.url)
console.log(url)
const sound = new Howl({
	src: url.toString(),
	onload(...rest) { console.log(`onload`, rest) },
	onloaderror(...rest) { console.log(`onloaderror`, rest) },
	onplayerror(...rest) { console.log(`onplayerror`, rest) },
	onunlock(...rest) { console.log(`onunlock`, rest); sound.play() },
})

;["mp3", "mpeg", "opus", "ogg", "oga", "wav", "aac", "caf", "m4a", "m4b", "mp4", "weba", "webm", "dolby", "flac"].forEach(ext => {
	console.log(`${ext} support = ${Howler.codecs(ext)}`)
})
*/

