import { APIInvoice } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class Invoice extends Structure<APIInvoice> {
	public get title() {
		return this[Structure.DataProperty].title;
	}

	public get description() {
		return this[Structure.DataProperty].description;
	}

	public get startParameter() {
		return this[Structure.DataProperty].start_parameter;
	}

	public get currency() {
		return this[Structure.DataProperty].currency;
	}

	public get totalAmount() {
		return this[Structure.DataProperty].total_amount;
	}
}
