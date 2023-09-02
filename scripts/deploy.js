async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  // console.log("Deploying contracts with the account :", 0x232F996451cd34b6F29853073E85C36Ab2105E33);

  const token = await ethers.deployContract("Upload");

  console.log("Token address:", await token);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


// const hre = require("hardhat");

// async function main() {
//   const Upload = await hre.ethers.getContractFactory("Upload");
//   const upload = await Upload.deploy();

//   await upload.deployed();

//   console.log("Library deployed to:", upload.address);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });