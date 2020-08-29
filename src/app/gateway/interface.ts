export interface companyKeysData {

    description: string,
    provider: string,
    encripted_api_key: string,
    encrypted_api_secret: string,
    api_region: string

}

export interface exchangeSettingsData {

    vhost: string,
    host: string,
    user_name: string,
    encrypted_password: string

}

export interface SlackChannelData {

    slack_hook: string,
    slack_channel: string,
    slack_username: string

}