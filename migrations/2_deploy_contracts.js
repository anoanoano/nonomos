var Supervisor = artifacts.require("./Supervisor.sol");
var SafeMath = artifacts.require("./SafeMath.sol");
var Ownable = artifacts.require("./Ownable.sol");
var VCGLib1 = artifacts.require("./VCGLib1.sol");
var VCG_operator = artifacts.require("./VCG_operator.sol");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.deploy(Ownable);
  deployer.deploy(VCGLib1);
  deployer.link(SafeMath, [Supervisor, VCG_operator]);
  deployer.link(Ownable, [Supervisor, VCG_operator]);
  deployer.link(VCGLib1, [VCG_operator]);
  deployer.deploy(Supervisor);
  deployer.deploy(VCG_operator);
}
