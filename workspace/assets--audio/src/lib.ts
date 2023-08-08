
// important!
// 1) loading this lib has side effects = will try to enable sound on any user interaction
// 2) as of 08/2023 it’s not compatible with dynamic import
import { Howl, Howler } from 'howler'

/////////////////////////////////////////////////

function createꓽsound(url: URL) {
	console.log(url)
	const sound = new Howl({
		src: url.toString(),
		onload(...rest) { console.log(`onload`, rest) },
		onloaderror(...rest) { console.log(`onloaderror`, rest) },
		onplayerror(...rest) { console.log(`onplayerror`, rest) },
		onunlock(...rest) { console.log(`onunlock`, rest); sound.play() },
	})

	return sound
}

// TODO global settings

/////////////////////////////////////////////////

export {
	createꓽsound,
}
