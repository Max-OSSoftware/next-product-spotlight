import {useTranslations} from 'next-intl';
import { Landing } from '@/components/component/landing'
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">

<h1>{t('title')}</h1>
<Landing />
    </main>
  );
}
