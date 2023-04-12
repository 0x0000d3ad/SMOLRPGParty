// make sure ganache is running
// to run: truffle exec init.js --network development

const web3     = require( 'web3' );
const SMOL = artifacts.require( 'SMOL' );


module.exports = async function( callback ) {

	// dev
	let owner = '0x3DEc0708C13B543FbC6c6f34CAa2e55639b0d8E5';

	// dev
	//let contract_address = '0x124FAd2784a1eaf3B7B419141335eadEA07619d7';

	// goerli
//	let contract_address = '0x3d5fabef8F7E85dDd875aC74af172835E930d8e7';

	// mainnet
	let contract_address = '0x1431de54655b366095724a3945989A0D51D4329C';

	
	//// rinkeby
	//let contract_address = '0xD19090BbC24Df25654347B661Ae09Db9916D945e';
	//let dankbots_address = '0xe4878a048A95b45025fE50a9D1673c23182044ae';
	//let founders_address = '0x644DBfD0090521510EacCDe8cCB9Db4D3Daf9A6C';

	// mainnet 
//	let contract_address = '0x2ee4fbd72eB68770D5e935e9C9D86d062B4c5194';
//	let dankbots_address = '0x1821D56D2f3BC5a5ABA6420676A4bbCBCCb2F7fd';
//	let founders_address = '0xc62f536B47CE58DBb97D36B1BfDD814093392414';

	// initialize token
	let token = await SMOL.at( contract_address );


	console.log( " 0 " );
	await token.mint( owner, 0, 1 )
	console.log( " 1 " );
	await token.mint( owner, 1, 1 )
	console.log( " 2 " );
	await token.mint( owner, 2, 1 )
	console.log( " 3 " );
	await token.mint( owner, 3, 1 )
	console.log( " 4 " );
	await token.mint( owner, 4, 1 )
	console.log( " 5 " );
	await token.mint( owner, 5, 1 )

	console.log( "--> END" );
}
