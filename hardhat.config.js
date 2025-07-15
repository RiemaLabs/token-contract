require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

const dotenv = require("dotenv");
dotenv.config();

const ETHER_SCAN_API_KEY_TOKEN = process.env.ETHER_SCAN_API_KEY_TOKEN;
const BSC_SCAN_API_KEY_TOKEN = process.env.BSC_SCAN_API_KEY_TOKEN;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        version: "0.8.26",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    networks: {
        hardhat: {
            allowUnlimitedContractSize: true
        },
        bnbTestnet: {
            url: "https://bsc-testnet-rpc.publicnode.com"
        },
        bnb: {
            url: "https://bsc-rpc.publicnode.com"
        }
    },
    etherscan: {
        apiKey: {
            bnbTestnet: BSC_SCAN_API_KEY_TOKEN,
            bnb: BSC_SCAN_API_KEY_TOKEN,
            mainnet: ETHER_SCAN_API_KEY_TOKEN,
            sepolia: ETHER_SCAN_API_KEY_TOKEN
        },
        customChains: [
            {
                network: "bnbTestnet",
                chainId: 97,
                urls: {
                    apiURL: "https://api-testnet.bscscan.com/api",
                    browserURL: "https://testnet.bscscan.com/"
                }
            },
            {
                network: "bnb",
                chainId: 56,
                urls: {
                    apiURL: "https://api.bscscan.com/api",
                    browserURL: "https://bscscan.com/"
                }
            }
        ]
    },
    sourcify: {
        enabled: false
    }
};
