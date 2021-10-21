import { IDataObject } from 'n8n-workflow';
//
// export interface IMessage {
// 	name?: string;
// 	sender?: IUser;
// 	createTime?: string;
// 	text?: string;
// 	cards?: ICard[];
// 	previewText?: string;
// 	annotations?: IAnnotation[];
// 	thread?: IThread[];
// 	space?: ISpace;
// 	fallbackText?: string;
// 	actionResponse?: IActionResponse;
// 	argumentText?: string;
// 	slashCommand?: ISlashCommand;
// 	attachment?: IAttachment[];
// }

export interface IMessage {
	name?: string;
	sender?: IUser;
	createTime?: string;
	text?: string;
	cards?: IDataObject[];
	previewText?: string;
	annotations?: IDataObject[];
	thread?: IDataObject[];
	space?: IDataObject;
	fallbackText?: string;
	actionResponse?: IDataObject;
	argumentText?: string;
	slashCommand?: IDataObject;
	attachment?: IDataObject[];
}

export interface IMessageUi {
	text?: string;
	cards?: {
		metadata: IDataObject[];
	};
}

export interface IUser {
	name?: string;
	displayName?: string;
	domainId?: string;
	type?: Type;
	isAnonymous?: boolean;
}
enum Type {
	'TYPE_UNSPECIFIED',
	'HUMAN',
	'BOT',
}

export interface ICard {
	header?: ICardHeader;
	sections?: ISection[];
	cardActions?: ICardAction[];
	name?: string;
}

// todo: define other interfaces
export interface ICardHeader {
	// actionLabel?: string,
	// onClick?: IOnClick,
}

export interface ISection {

}

export interface ICardAction {

}

export interface IAnnotation {

}

export interface IThread {

}

export interface ISpace {

}

export interface IActionResponse {

}

export interface ISlashCommand {

}

export interface IAttachment {

}
