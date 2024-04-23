import { emailRegex } from '../../../app/schemas/userDataValidationSchema';

describe('Email Regex', () => {
  it('should accept a standard email', () => {
    expect(emailRegex.test('user@linkta.com')).toBe(true);
  });

  it('should accept an email with non-English characters in the user name', () => {
    expect(emailRegex.test('üser@linkta.org')).toBe(true);
    expect(emailRegex.test('façade@linkta.org')).toBe(true);
  });

  it('should accept email with subdomains', () => {
    expect(emailRegex.test('user@mail.linkta.org')).toBe(true);
  });

  it('should accept email that includes quoted strings with special characters', () => {
    expect(emailRegex.test('"u..ser"@linkta.org')).toBe(true);
  });

  it('should accept emails with IP as domain', () => {
    expect(emailRegex.test('user@[192.168.1.1]')).toBe(true);
  });

  it('should reject email without an "@" symbol', () => {
    expect(emailRegex.test('linkta.org')).toBe(false);
  });

  it('should reject email without a domain', () => {
    expect(emailRegex.test('linkta@')).toBe(false);
  });

  it('should reject email with more than 2 dots in a row', () => {
    expect(emailRegex.test('linkta..linkta@linkta.org')).toBe(false);
  });

  it('should reject email with special characters outside quotes', () => {
    expect(emailRegex.test('link.ta@link<ta.org')).toBe(false);
  });
});
