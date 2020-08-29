export interface CampaignData {

    name: string,     
    duration: number,  
    duration_unit: string,     
    budget: number,

}

export interface FbKeysData {

    unique_id: string,
    company_unique_id: string,
    name: string,
    account_name: string,
    app_name: string,
    user_name: string,
    source: string,
    source_id: string,
    source_type: string,
    source_alias: string,
    status: string,
    enabled: string,
    encrypted_app_id: string,
    encrypted_account_id: string,
    encrypted_access_token: string,
    encrypted_app_secret: string,

}

export interface MediaData {

    textname: string,
    textcode: string,
    textdescription: string,
    textmedium_type: string,
    textmedium_link: string,
    textstatus: string,
    textenabled: string,

}