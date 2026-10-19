import { registerStructures } from '../registry.js';
import { Animation } from './Animation.js';
import { Audio } from './Audio.js';
import { Document } from './Document.js';
import { LivePhoto } from './LivePhoto.js';
import { PaidMediaInfo } from './PaidMediaInfo.js';
import { PhotoSize } from './PhotoSize.js';
import { Video } from './Video.js';
import { VideoNote } from './VideoNote.js';
import { VideoQuality } from './VideoQuality.js';
import { Voice } from './Voice.js';
export * from './BaseMedia.js';
export * from './Animation.js';
export * from './Audio.js';
export * from './Document.js';
export * from './LivePhoto.js';
export * from './PaidMediaInfo.js';
export * from './PhotoSize.js';
export * from './Video.js';
export * from './VideoNote.js';
export * from './VideoQuality.js';
export * from './UserProfileAudios.js';
export * from './UserProfilePhotos.js';
export * from './Voice.js';
export * from './paid/index.js';
export * from './sticker/index.js';

declare module '../registry.js' {
	interface DefaultTypes {
		Animation: Animation;
		Audio: Audio;
		Document: Document;
		LivePhoto: LivePhoto;
		PaidMediaInfo: PaidMediaInfo;
		PhotoSize: PhotoSize;
		Video: Video;
		VideoNote: VideoNote;
		VideoQuality: VideoQuality;
		Voice: Voice;
	}
}

registerStructures({
	Animation,
	Audio,
	Document,
	LivePhoto,
	PaidMediaInfo,
	PhotoSize,
	Video,
	VideoNote,
	VideoQuality,
	Voice,
});
