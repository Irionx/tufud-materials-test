export interface TLActions {
    name?: string;
    alternativeName?: string;
    actionButton?: boolean;
    iconButtoncolor?:string;
    propertyToVerify?:string;
    conditionToSwitchNames?:string;
}

export interface TLHeaderAdditionalText {
    column:string;
    content:string;
}