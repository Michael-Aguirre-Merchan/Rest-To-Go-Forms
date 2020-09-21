export interface SettingsData {

    unique_id: string,
    user_unique_id: string,  
    mail_optin: string,  
    mail_updated_at: string,
    sms_optin: string,  
    sms_updated_at: string,  
    whatsapp_optin: string,  
    whatsapp_updated_at: string,  
    notifications_optin: string,  
    notifications_updated_at: string,  
    location_optin: string,  
    location_updated_at: string,  
    payload: string,
    status: string,  
    enabled: string,

}

export interface NotificacionData {

    id: string, 
    unique_id: string, 
    content: string, 
    url: string, 
    status: string, 
    source: string, 
    source_type: string, 
    source_id: string, 
    source_alias: string, 
    target_id: string, 
    target: string, 
    target_alias: string, 
    target_type: string, 
    target_email: string, 
    target_phone: string, 
    created_at: string, 
    created_by: string, 
    updated_at: string, 
    updated_by: string, 
    
}

export interface MensajeData {

    id: string,
    unique_id: string,
    context_id: string,
    parent_id: string,
    content: string,
    source: string,
    source_alias: string,
    source_email: string,
    source_phone: string,
    target: string,
    target_alias: string,
    target_email: string,
    target_phone: string,
    value: string,
    data_source: string,
    data_source_id: string,
    data_source_type: string,
    data_source_alias: string,
    created_by: string,
    created_at: string,
    updated_by: string,
    updated_at: string,
    payload: string,

}