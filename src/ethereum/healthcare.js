import web3 from './web3';

//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = '0x571f6e83a80ce1d108f1e5918215867661ab26bc'; //'0xcb66cd97ba527d7d8d0eddb287bf25e81f910e4c';
//use the ABI from your contract
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "userid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "patient",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "recordtype",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ipfshash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dat",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "referencingdoctor",
				"type": "string"
			}
		],
		"name": "addRecord",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "docid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "userid",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "record_id",
				"type": "uint256"
			}
		],
		"name": "givePermission",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "docid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "userid",
				"type": "string"
			}
		],
		"name": "view_all_records_for_doctor",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "patient",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ipfshash",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "recordtype",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "recordid",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "dateandtime",
						"type": "string"
					}
				],
				"internalType": "struct Healthcare.Record[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "userid",
				"type": "string"
			}
		],
		"name": "view_all_records_for_user",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "patient",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ipfshash",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "recordtype",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "recordid",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "dateandtime",
						"type": "string"
					}
				],
				"internalType": "struct Healthcare.Record[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

/*[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "docid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_data",
				"type": "string"
			}
		],
		"name": "addPermission",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_data",
				"type": "string"
			}
		],
		"name": "addRecord",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			}
		],
		"name": "docDocs",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "docPermission",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "peopleData",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			}
		],
		"name": "userDocs",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]*/
export default new web3.eth.Contract(abi, address);
