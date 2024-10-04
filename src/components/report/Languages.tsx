
'use client'
import React, { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import PageTitle from '../ui/PageTitle'

type languageType = { id: number, text: string }

export default function Languages() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentLanguage = searchParams.get('language')
    
    // Local state to store the previous language
    const [prevLanguage, setPrevLanguage] = useState<string | null>(currentLanguage)

    const handleLanguageChange = (lan: string) => {
        router.replace(`/dashboard/report?language=${lan}`)
    }

    useEffect(() => {
        // Reload only if the language has changed and isn't the initial load
        if (currentLanguage && currentLanguage !== prevLanguage) {
            setPrevLanguage(currentLanguage) // Update previous language
            window.location.reload() // Reload the page
        }
    }, [currentLanguage, prevLanguage])

    const languages: languageType[] = [
        { id: 1, text: "Bangla" },
        { id: 2, text: "English" },
        { id: 3, text: "Hindi" },
        { id: 4, text: "Vietnamese" },
        { id: 5, text: "Indonesian" },
    ]

    return (
        <div className='flex flex-row items-center justify-between border-slate-200 border-b py-4'>
            <div>
                <PageTitle title="Overall Report" />
            </div>
            <div className='flex flex-row space-x-2 items-center'>
            {
                languages.map((lan) => (
                    <Button key={lan.id} onClick={() => handleLanguageChange(lan.text)} className={cn('','',{'bg-primary text-white' : currentLanguage === lan.text,'bg-white text-primary shadow-none border border-primary hover:text-white' : currentLanguage !== lan.text})}>
                        {lan.text}
                    </Button>
                ))
            }
            </div>
        </div>
    )
}
