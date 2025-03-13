'use server'
import {getEthereumContract} from "../util/contract"

export async function CreateCampaign(goal){
    try{
        const contract = await getEthereumContract();
        const tx = await contract.createCampaign(goal);
        await tx.wait();
        return {success:true,message:"Campaign Created!"};
    }catch(e){
        console.log(e)
        return {success:false,message:"Unable to create Campaign!"};
    }
}

export async function donateToCampaign(campaignId,donationAmount) {
    try{
        const contract = await getEthereumContract();
        const tx = await contract.donate(campaignId, { value: donationAmount });
        await tx.wait();
        return {success:true,message:"Donation Successful!"}
    }catch(e){
        console.log(e)
        return {success:false,message:"Unable to Donate to Campaign!"};
    }

}

export async function verifyCampaign(campaignId) {
    try{
        const contract = await getEthereumContract();
        const tx = await contract.verifyCampaign(campaignId);
        await tx.wait();
        return {success:true,message:"Campaign Verified Successfully!"}
    }catch(e){
        console.log(e)
        return {success:false,message:"Unable to Verify Campaign!"};
    }
}