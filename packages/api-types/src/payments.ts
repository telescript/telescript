export interface APIInvoice {
	title: string;
	description: string;
	start_parameter: string;
	currency: string;
	total_amount: number;
}

export interface APIShippingAddress {
	country_code: string;
	state: string;
	city: string;
	street_line1: string;
	street_line2: string;
	post_code: string;
}

export interface APIOrderInfo {
	name?: string;
	phone_number?: string;
	email?: string;
	shipping_address?: APIShippingAddress;
}

export interface APISuccessfulPayment {
	currency: string;
	total_amount: number;
	invoice_payload: string;
	subscription_expiration_date?: number;
	is_recurring?: boolean;
	is_first_recurring?: boolean;
	shipping_option_id?: string;
	order_info?: APIOrderInfo;
	telegram_payment_charge_id: string;
	provider_payment_charge_id: string;
}

export interface APIRefundedPayment {
	currency: string;
	total_amount: number;
	invoice_payload: string;
	telegram_payment_charge_id: string;
	provider_payment_charge_id?: string;
}
