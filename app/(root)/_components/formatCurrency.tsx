const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
})

const formatCurrency = (number: number) => CURRENCY_FORMATTER.format(number)

export default formatCurrency