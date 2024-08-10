export const sanitizeString = (value: string) => {
  const htmlEntities: any = {
    '&quot;': '"',
    '&apos;': "'",
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&minus;': '−',
  };

  return value.replace(
    /&[a-zA-Z0-9]+;/g,
    match => htmlEntities[match] || match,
  );
};
