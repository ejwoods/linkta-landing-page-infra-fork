import {
  emailRegex,
  nameRegex,
} from '../../../app/schemas/userDataValidationSchema';

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

  it('should reject email addresses that contain script tags', () => {
    expect(
      emailRegex.test('user@linkta.org<script>alert("XSS")</script>')
    ).toBe(false);
  });

  it('should reject email addresses that include javascript code', () => {
    expect(emailRegex.test('user@linkta.org<svg onload=alert("XSS")>')).toBe(
      false
    );
  });

  it('should reject email addresses with HTML comments that could hide malicious content', () => {
    expect(emailRegex.test('user@linkta.org<!-- comment -->')).toBe(false);
  });

  it('should reject email addresses that use data URLs to execute JavaScript', () => {
    expect(
      emailRegex.test(
        'user@linkta.org"data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4="'
      )
    ).toBe(false);
  });

  it('should reject email addresses containing embedded commands within backticks', () => {
    expect(emailRegex.test('user@linkta.org`rm -rf /`')).toBe(false);
  });
});

describe('Name Regex', () => {
  it('should accept names with English letters', () => {
    expect(nameRegex.test('Chen Shen')).toBe(true);
  });

  it('should accept hyphenated names', () => {
    expect(nameRegex.test('Chen-Shen')).toBe(true);
  });

  it('should accept names with an apostrophe', () => {
    expect(nameRegex.test("Chen'Shen")).toBe(true);
  });

  it('should accept names in Traditional Chinese', () => {
    expect(nameRegex.test('陳慎')).toBe(true);
  });

  it('should accept names in Simplified Chinese', () => {
    expect(nameRegex.test('陈慎')).toBe(true);
  });

  it('should accept names with Arabic', () => {
    expect(nameRegex.test('چن شن')).toBe(true);
  });

  it('should accept names in Korean', () => {
    expect(nameRegex.test('첸센')).toBe(true);
  });

  it('should accept names in Japanese', () => {
    expect(nameRegex.test('チェン シェン')).toBe(true);
  });

  it('should accept names with extended Latin characters', () => {
    expect(nameRegex.test('Chên Shên')).toBe(true);
  });

  it('should reject names that include numbers', () => {
    expect(nameRegex.test('Chen Shen 2')).toBe(false);
  });

  it('should reject names with special symbols', () => {
    expect(nameRegex.test('Chen@Shen')).toBe(false);
  });

  it('should reject names that contain script tags or JavaScript code', () => {
    expect(nameRegex.test('<script>alert("XSS")</script>')).toBe(false);
    expect(nameRegex.test('Chen Shen <img src=x onerror=alert("XSS")>')).toBe(
      false
    );
  });
});
