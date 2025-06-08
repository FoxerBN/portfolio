import type { Locale } from '@/i18n';

declare module 'next-intl' {
  interface AbstractIntlMessages {
    [key: string]: any;
  }

  type Pathnames = {
    '/': undefined;
  };

  interface PathnamesDefinition {
    locales: Locale[];
    pathnames: Pathnames;
  }
}
