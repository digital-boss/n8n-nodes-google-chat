import {
	INodeProperties,
} from 'n8n-workflow';

export const spaceOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'space',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Returns a space.',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Lists spaces the caller is a member of.',
			},
			{
				name: 'Webhook',
				value: 'webhook',
				description: 'Creates messages through a webhook (no chat bot is needed).',
			},
		],
		default: 'get',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const  spaceFields = [
	/* -------------------------------------------------------------------------- */
	/*                                 space:get                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Space Name',
		name: 'spaceName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'space',
				],
				operation: [
					'get',
				],
			},
		},
		default: '',
		description: 'Name of the space.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                 space:getAll                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [
					'space',
				],
				operation: [
					'getAll',
				],
			},
		},
		default: false,
		description: 'If all results should be returned or only up to a given limit.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'space',
				],
				operation: [
					'getAll',
				],
				returnAll: [
					false,
				],
			},
		},
		options: [
			{
				displayName: 'Page Size',
				name: 'pageSize',
				type: 'number',
				typeOptions: {
					minValue: 1,
					numberStepSize: 1,
				},
				default: '',
				description: 'Requested page size. The value is capped at 1000. Server may return fewer results than requested. If unspecified, server will default to 100.',
			},
			{
				displayName: 'Page Token',
				name: 'pageToken',
				type: 'string',
				default: '',
				description: 'A token identifying a page of results the server should return.',
			},
		],
	},

	/* -------------------------------------------------------------------------- */
	/*                                 space:webhooks                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'See <a href="https://developers.google.com/chat/how-tos/webhooks" target="_blank">Google Chat guide</a> to webhooks',
		name: 'jsonNotice',
		type: 'notice',
		displayOptions: {
			show: {
				resource: [
					'space',
				],
				operation: [
					'webhook',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Incoming Webhook URL',
		name: 'webhookUrl',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'space',
				],
				operation: [
					'webhook',
				],
			},
		},
		default: '',
		description: 'URL for the incoming webhook.',
	},

	{
		displayName: 'Json Parameter Message',
		name: 'jsonParameterMessage',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [
					'space',
				],
				operation: [
					'webhook',
				],
			},
		},
		default: false,
		description: 'Pass message object as JSON.',
	},
	{
		displayName: 'Message',
		name: 'messageUi',
		type: 'collection',
		required: true,
		placeholder: 'Add Options',
		displayOptions: {
			show: {
				resource: [
					'space',
				],
				operation: [
					'webhook',
				],
				jsonParameterMessage: [
					false,
				],
			},
		},
		default: {'text': ''},
		description: '',
		options: [
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				description: 'The message text.',
			},
		],
	},
	{
		displayName: 'See <a href="https://developers.google.com/chat/reference/rest/v1/spaces.messages#Message" target="_blank">Google Chat guide</a> to creating messages',
		name: 'jsonNotice',
		type: 'notice',
		displayOptions: {
			show: {
				resource: [
					'space',
				],
				operation: [
					'webhook',
				],
				jsonParameterMessage: [
					true,
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Message (JSON)',
		name: 'messageJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {

				resource: [
					'space',
				],
				operation: [
					'webhook',
				],
				jsonParameterMessage: [
					true,
				],
			},
		},
		default: '',
		description: 'Message input as JSON.',
	},

] as INodeProperties[];