import {
	INodeProperties,
} from 'n8n-workflow';

export const attachmentOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'attachment',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Gets the metadata of a message attachment. The attachment data is fetched using the media API.',
			},
		],
		default: 'get',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const  attachmentFields = [
	/* -------------------------------------------------------------------------- */
	/*                                 attachments:get                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Space Name',
		name: 'spaceName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'attachment',
				],
				operation: [
					'get',
				],
			},
		},
		default: '',
		description: 'Name of the space.',
	},
	{
		displayName: 'Message Name',
		name: 'messageName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'attachment',
				],
				operation: [
					'get',
				],
			},
		},
		default: '',
		description: 'Name of the message.',
	},
	{
		displayName: 'Attachment Name',
		name: 'attachmentName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'attachment',
				],
				operation: [
					'get',
				],
			},
		},
		default: '',
		description: 'Name of the attachment.',
	},
] as INodeProperties[];
