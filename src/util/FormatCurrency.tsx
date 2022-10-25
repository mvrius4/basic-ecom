const formatter = new Intl.NumberFormat(undefined, {
	style: 'currency',
	currency: 'EUR',
});

export const formatCurrency = (amount: number) => {
	return formatter.format(amount);
};
