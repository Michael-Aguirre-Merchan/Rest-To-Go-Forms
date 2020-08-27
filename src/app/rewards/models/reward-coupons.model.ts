export interface RewardCoupons {

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