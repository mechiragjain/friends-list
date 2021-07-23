const NAME_REGEX = /^[a-z A-Z]+$/;

export const NameValidation = name => NAME_REGEX.test(name)