// This mess is from: https://stackoverflow.com/questions/55385129/javascripts-standard-api-to-get-the-runtimes-default-locale

const defaultLocale = new Intl.Locale(new Intl.NumberFormat().resolvedOptions().locale);

export default defaultLocale;