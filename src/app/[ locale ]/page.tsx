"use client"

import Spline from '@splinetool/react-spline'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCheck, LucideIcon } from 'lucide-react'
import { ReactElement } from 'react'
import {useTranslations} from 'next-intl';
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <>
    <h2 className="animate__animated animate__rubberBand">Hello World</h2>
    </>
  
    
 
  );
}
