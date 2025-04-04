export default class Validator {
  validateUsername( username ) {
    // Можно делать всё внутри одной регулярки через пайп, но читать потом сложно, лучше разбить,
    // а там глядишь можно и точечно сообщать по какому правилу мы не пропускаем валидацию логина пользователя

    //const oneLineRegex = /(^[a-zA-Z0-9_-]+$)|(\d{4,})|(^[\d_-]|[\d_-]$)/;

    if ( ! /^[a-zA-Z0-9_-]+$/.test( username ) ) {
      return false;
    }

    if ( /\d{4,}/.test( username ) ) {
      return false;
    }

    if ( /^[\d_-]|[\d_-]$/.test( username ) ) {
      return false;
    }

    return true;
  }
}
