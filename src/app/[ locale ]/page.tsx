"use client"

import Spline from '@splinetool/react-spline'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCheck, LucideIcon } from 'lucide-react'
import { ReactElement } from 'react'
import {useTranslations} from 'next-intl';
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const t = useTranslations('Index');
  return (
    <><main className="flex min-h-screen flex-col items-center justify-between mt-10 p-10">
    <h2 className="animate__animated animate__rubberBand">{t('paragraph')}</h2>
    </main>
    </>
  
    
 
  );
}
