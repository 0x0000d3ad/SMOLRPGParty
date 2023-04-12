const { time } = require( '@openzeppelin/test-helpers' );

var SMOL = artifacts.require( "SMOL.sol" );

module.exports = function( deployer ) {
	const addresses = web3.eth.getAccounts();
	var res2 = deployer.deploy( SMOL );
}
