export const findCookie = (
  cookieString: string,
  findCookieKey: string
): string | void => {
  return cookieString
    ?.split(";")
    ?.find((cookie) => {
      const key = cookie?.split("=")?.[0];
      return key?.includes(findCookieKey);
    })
    ?.split("=")?.[1]
    ?.trim();
};
