export interface AccountData {

    code:string, 
    name:string  

}

export interface AccountDetailsData {

    phone_number: number,
    primary_email: string,
    web_site?: string,
    twitter?: string,
    fb?: string,
    instagram?: string,
    linkedin?: string,
    youtube?: string,
    blog?: string,
    network_a: string,
    network_b: string,
    notes?: string,

}

export interface ContactData {

    first_name:string,
    middle_name?:string,
    last_name:string,
    primary_email:string,
    primary_phone:number

}

export interface FollowUpsData {

    code: string,
    notes: string,
    next_action_at: string,
    reminder: string,
    total: number,
    owner_unique_id: string,
    owner_name: string,
    owner_email: string,
    duration: number,
    duration_unit: number,
    duration_description: string,
    status: string,
    enabled: string,

}

export interface LeadData {

    first_name: string,
    middle_name?: string,
    last_name: string,
    phone_number: string,
    lead_email: string, 
    web_site?: string,
    twitter?: string, 
    fb?: string,
    instagram?: string,
    linkedin?: string,
    youtube?: string,
    blog?: string,
    network_a: string,
    network_b: string,
    notes?: string

}

export interface OpportunityData {

    code: string,
    name: string,
    notes: string,
    content_url: string,
    money: number,
    budget: number,
    total: number,
    duration: number,
    duration_unit: number,
    duration_description: string,
    payload: string, 
    next_action_at: string,
    owner_unique_id: string,
    owner_name: string,
    owner_email: string

}

export interface QuoteData {

    code: string,
    name: string,
    notes: string,
    content_url: string,
    budget: number,
    total: number,
    duration: number,
    duration_unit: number,
    duration_description: string,
    payload: string,
    next_action_at: string,

}