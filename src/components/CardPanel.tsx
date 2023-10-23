'use client'
import { useReducer, useRef, useEffect, useState } from 'react'
import CompanyCard from './CompanyCard'
import React from 'react'
import Link from 'next/link'

export default function CardPanel() {

    const mockCompanyRepo = [
        {companyName: 'Agoda', imgSrc: '/image/a.jpg'},
        {companyName: 'booking.com', imgSrc: '/image/b.jpg'},
        {companyName: 'CLEVERSE', imgSrc: '/image/c.jpg'},
        {companyName: 'Dell', imgSrc: '/image/d.jpg'},
        {companyName: 'EY', imgSrc: '/image/e.jpg'},
        {companyName: 'Facebook', imgSrc: '/image/f.jpg'},
        {companyName: 'Google', imgSrc: '/image/g.jpg'},
        {companyName: 'Hewlett Packard', imgSrc: '/image/h.jpg'},
        {companyName: 'IBM', imgSrc: '/image/i.jpg'},
        {companyName: 'JPMorgan Chase', imgSrc: '/image/j.jpg'},
        {companyName: 'KPMG', imgSrc: '/image/k.jpg'},
        {companyName: 'Lazada', imgSrc: '/image/l.jpg'},
        {companyName: 'Microsoft', imgSrc: '/image/m.jpg'},
        {companyName: 'Netflix', imgSrc: '/image/n.jpg'},
        {companyName: 'Oracle', imgSrc: '/image/o.jpg'},
        {companyName: 'PwC', imgSrc: '/image/p.jpg'},
        {companyName: 'Qualcomm', imgSrc: '/image/q.jpg'},
        {companyName: 'Razer', imgSrc: '/image/r.jpg'},
        {companyName: 'Salesforce', imgSrc: '/image/s.jpg'},
        {companyName: 'TikTok', imgSrc: '/image/t.jpg'},
        {companyName: 'Uber', imgSrc: '/image/u.jpg'},
        {companyName: 'Visa', imgSrc: '/image/v.jpg'},
        {companyName: 'Walmart', imgSrc: '/image/w.jpg'},
        {companyName: 'Xiaomi', imgSrc: '/image/x.jpg'},
        {companyName: 'Yahoo', imgSrc: '/image/y.jpg'},
        {companyName: 'Zalora', imgSrc: '/image/z.jpg'},
    ]

    return(
        <div>
            <div className='mt-[90px] grid grid-cols-6 gap-5 mx-4'>
                <CompanyCard companyName={mockCompanyRepo[0].companyName} imgSrc={mockCompanyRepo[0].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[1].companyName} imgSrc={mockCompanyRepo[1].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[2].companyName} imgSrc={mockCompanyRepo[2].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[3].companyName} imgSrc={mockCompanyRepo[3].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[4].companyName} imgSrc={mockCompanyRepo[4].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[5].companyName} imgSrc={mockCompanyRepo[5].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[6].companyName} imgSrc={mockCompanyRepo[6].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[7].companyName} imgSrc={mockCompanyRepo[7].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[8].companyName} imgSrc={mockCompanyRepo[8].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[9].companyName} imgSrc={mockCompanyRepo[9].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[10].companyName} imgSrc={mockCompanyRepo[10].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[11].companyName} imgSrc={mockCompanyRepo[11].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[12].companyName} imgSrc={mockCompanyRepo[12].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[13].companyName} imgSrc={mockCompanyRepo[13].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[14].companyName} imgSrc={mockCompanyRepo[14].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[15].companyName} imgSrc={mockCompanyRepo[15].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[16].companyName} imgSrc={mockCompanyRepo[16].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[17].companyName} imgSrc={mockCompanyRepo[17].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[18].companyName} imgSrc={mockCompanyRepo[18].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[19].companyName} imgSrc={mockCompanyRepo[19].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[20].companyName} imgSrc={mockCompanyRepo[20].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[21].companyName} imgSrc={mockCompanyRepo[21].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[22].companyName} imgSrc={mockCompanyRepo[22].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[23].companyName} imgSrc={mockCompanyRepo[23].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[24].companyName} imgSrc={mockCompanyRepo[24].imgSrc}/>
                <CompanyCard companyName={mockCompanyRepo[25].companyName} imgSrc={mockCompanyRepo[25].imgSrc}/>
            </div>
        </div>
    )
}