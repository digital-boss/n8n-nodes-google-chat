import {
	INodeProperties,
} from 'n8n-workflow';

export const memberOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'member',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Returns a membership.',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Lists human memberships in a space.',
			},
		],
		default: 'get',
		description: 'The operation to perform.',
	},
] as INodeProperties[];


export const memberFields = [
	/* -------------------------------------------------------------------------- */
	/*                                 member:get                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Space Name',
		name: 'spaceName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'member',
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
		displayName: 'Membership Name',
		name: 'memberName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'members',
				],
				operation: [
					'get',
				],
			},
		},
		default: '',
		description: 'Name of the membership to be retrieved.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                 members:getAll                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Space Name',
		name: 'spaceName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'member',
				],
				operation: [
					'getAll',
				],
			},
		},
		default: '',
		description: 'Name of the space for which membership list is to be fetched.',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [
					'member',
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
					'member',
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
] as INodeProperties[];

