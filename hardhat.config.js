require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: {
	compilers: [
		{
		  version: "0.8.0",
		},
		{
		  version: "0.8.6",
		},
		{
			version: "0.8.13",
		}, 
	  ]
	},  
	networks: {
		hardhat: {
			mining: {
				auto: true,
				interval: 0,
				mempool: {
					order: "priority",
				},
			},
		},
		htb: {
			url: "http://167.172.61.89:32496/rpc",
			accounts: [
				`0xda0fc7edfed90ae7b0c11845564fb006f0df0573e55c6b298e8abc01eb7f3ec3`,
			],
		},
	},
};
