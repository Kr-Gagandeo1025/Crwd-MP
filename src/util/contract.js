import { ethers } from "ethers";

// Replace with your deployed contract address
const CONTRACT_ADDRESS = "LOCAL_CONTRACT_ADDRESS";

const ABI = [
    {
        "inputs": [
            { "internalType": "uint256", "name": "goal", "type": "uint256" }
        ],
        "name": "createCampaign",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "uint256", "name": "campaignId", "type": "uint256" }
        ],
        "name": "donate",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "uint256", "name": "campaignId", "type": "uint256" }
        ],
        "name": "verifyCampaign",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
];

const getEthereumContract = async () => {
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    } else {
        alert("MetaMask not detected!");
    }
};

export { getEthereumContract };
