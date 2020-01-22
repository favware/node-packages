import unescapedefault, { unescape } from '../src';

describe('verify all supported characters', () => {
  test('should unescape double quotation mark', () => {
    expect(unescape('&quot;')).toBe('"');
    expect(unescape('&#34;')).toBe('"');
    expect(unescape('&#034;')).toBe('"');
    expect(unescape('&#x22;')).toBe('"');
  });

  test('should unescape single quotation mark (apostrophe)', () => {
    expect(unescape('&apos;')).toBe("'");
    expect(unescape('&#39;')).toBe("'");
    expect(unescape('&#039;')).toBe("'");
    expect(unescape('&#x27;')).toBe("'");
  });

  test('should unescape ampersand', () => {
    expect(unescape('&amp;')).toBe('&');
    expect(unescape('&#38;')).toBe('&');
    expect(unescape('&#038;')).toBe('&');
    expect(unescape('&#x26;')).toBe('&');
  });

  test('should unescape greater than', () => {
    expect(unescape('&gt;')).toBe('>');
    expect(unescape('&#62;')).toBe('>');
    expect(unescape('&#062;')).toBe('>');
    expect(unescape('&#x3e;')).toBe('>');
  });

  test('should unescape less than', () => {
    expect(unescape('&lt;')).toBe('<');
    expect(unescape('&#60;')).toBe('<');
    expect(unescape('&#060;')).toBe('<');
    expect(unescape('&#x3c;')).toBe('<');
  });

  test('should unescape copyright', () => {
    expect(unescape('&copy;')).toBe('©');
    expect(unescape('&#169;')).toBe('©');
    expect(unescape('&#xa9;')).toBe('©');
  });

  test('should unescape registered trademark', () => {
    expect(unescape('&reg;')).toBe('®');
    expect(unescape('&#174;')).toBe('®');
    expect(unescape('&#xae;')).toBe('®');
  });

  test('should unescape cent', () => {
    expect(unescape('&cent;')).toBe('¢');
    expect(unescape('&#162;')).toBe('¢');
    expect(unescape('&#xa2;')).toBe('¢');
  });

  test('should unescape euro', () => {
    expect(unescape('&euro;')).toBe('€');
    expect(unescape('&#8364;')).toBe('€');
  });

  test('should unescape pound', () => {
    expect(unescape('&pound;')).toBe('£');
    expect(unescape('&#163;')).toBe('£');
    expect(unescape('&#xa3;')).toBe('£');
  });

  test('should unescape yen', () => {
    expect(unescape('&yen;')).toBe('¥');
    expect(unescape('&#165;')).toBe('¥');
    expect(unescape('&#xa5;')).toBe('¥');
  });

  test('should unescape non-breaking space', () => {
    expect(unescape('&nbsp;')).toBe(' ');
    expect(unescape('&#160;')).toBe(' ');
    expect(unescape('&#xa0;')).toBe(' ');
  });

  test('should unescape Right Single Quotation Mark', () => {
    expect(unescape('&rsquo;')).toBe('’');
    expect(unescape('&#8217;')).toBe('’');
    expect(unescape('&#x2019;')).toBe('’');
  });

  test('should unescape Left Single Quotation Mark', () => {
    expect(unescape('&lsquo;')).toBe('‘');
    expect(unescape('&#8216;')).toBe('‘');
    expect(unescape('&#x2018;')).toBe('‘');
  });

  test('should unescape Horizontal Ellipsis', () => {
    expect(unescape('&hellip;')).toBe('…');
    expect(unescape('&#8230;')).toBe('…');
    expect(unescape('&#x2026;')).toBe('…');
  });
});

describe('verify that function parses correctly', () => {
  test('should support template tag literals', () => {
    expect(unescape`&#34;`).toBe('"');
  });

  test('should support template tag literals with variables', () => {
    const chars = '&lt;div&gt;abc&lt;/div&gt;';

    expect(unescape`iting ${chars}`).toBe('iting <div>abc</div>');
    expect(unescape`iting ${chars} iting`).toBe('iting <div>abc</div> iting');
    expect(unescape`${chars} iting ${chars}`).toBe('<div>abc</div> iting <div>abc</div>');
  });
});

describe('verify that default export works', () => {
  test('should use default export', () => {
    expect(unescapedefault('&quot;')).toBe('"');
    expect(unescapedefault('&#34;')).toBe('"');
    expect(unescapedefault('&#034;')).toBe('"');
    expect(unescapedefault('&#x22;')).toBe('"');
  });
});
