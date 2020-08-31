export interface CustomerRewardsData {

    unique_id: string,
    customer_unique_id: string,  
    customer_id: string,  
    spent: number,  
    points: number,  
    expire_rule: string, 
    expiry_at: string,

}

export interface LoyaltyDetailsData {

    loyalty_tier: string,
    unique_id: string, 
    name: string,  
    country_id: string,  
    country_name: string,  
    currency_unique_id: string,  
    currency_code: string,  
    currency_name: string,  
    minimum_spend: number, 
    maximum_spend: number,
    minimum_points: number,  
    maximum_points: number,  
    default_tier: string, 

}

export interface LoyaltyTiersData {

    unique_id: string,
    code: string,
    name: string,  
    next_tier: string,  
    previous_tier: string,  
    source: string,
    source_alias: string,
    source_id: string, 
    source_type: string,

}

export interface PurchaseTresholdsData {

    unique_id: string,
    name: string,
    threshold: number,  
    extra_points: number, 

}

export interface RewardCouponsData {

    unique_id: string,
    code: string,  
    name: string, 
    description: string,  
    coupon_code: string,
    country_id: string,  
    country_name: string,  
    currency_unique_id: string,  
    currency_code: string,  
    currency_name: string,  
    money_threshold: number,
    points_threshold: number, 
    source: string,
    source_alias: string,
    source_id: string,
    source_type: string,

}