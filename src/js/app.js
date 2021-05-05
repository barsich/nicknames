/* eslint-disable class-methods-use-this */
export default class Validator {
  validateUsername(name) {
    return /^[^\d][\w-]*[^\d]$/.test(name) && !(/\d{4,}/.test(name));
  }
}
