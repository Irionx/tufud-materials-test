export interface TLActions {
    name?: string;
    alternativeName?: string;
    actionButton?: boolean;
    iconButtoncolor?:string;
    propertyToVerify?:string;
    conditionToSwitchNames?:string;
}

export interface TLHeader {
    column:string;
    displayName:string;
    additionalText?:string;
}
