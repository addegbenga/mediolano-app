'use client'

import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Cpu, DollarSign, Shield, Zap, HelpCircle } from 'lucide-react'

const faqData = [
  {
    category: "general",
    question: "What is Programmable IP?",
    answer: "Programmable intellectual property uses blockchain technology to securely register and upgrade intellectual property rights with smart contracts. It provides a transparent, immutable record of ownership and transactions related to intellectual property assets."
  },
  {
    category: "registration",
    question: "How to register intellectual property?",
    answer: "Our dapp allows users to easily register their intellectual property by creating a unique digital representation of their work on the blockchain. This creates a timestamped, immutable record of Proof of Ownership that can be used in 181 countries."
  },
  {
    category: "management",
    question: "What types of intellectual property can I manage with your dapp?",
    answer: "Our dapp supports various types of intellectual property, including artworks, patents, trademarks, software. audio, video, rwa (real world assets). Users can register and manage different IP assets through a unified interface."
  },
  {
    category: "monetization",
    question: "How does the monetization feature work?",
    answer: "The monetization feature allows IP owners to license or sell their assets directly through the platform with smart contracts to automate and secure the process."
  },
  {
    category: "security",
    question: "Is my intellectual property information secure on the blockchain?",
    answer: "Yes, blockchain technology provides a high level of security. The information is encrypted and distributed across a network of computers, making it extremely difficult to tamper with. However, users should still take precautions to protect their private keys and access information."
  },
  {
    category: "tokenization",
    question: "What is IP tokenization and how does it work in your dapp?",
    answer: "IP tokenization is the process of creating a digital token that represents ownership or rights to a specific piece of intellectual property. In our dapp, users can tokenize their IP assets, creating unique, tradable tokens on the blockchain. This enables fractional ownership, easier transfer of rights, and new ways to monetize IP."
  },
  {
    category: "management",
    question: "How does blockchain improve the traditional IP management process?",
    answer: "Blockchain technology enhances IP management by providing: 1) Immutable proof of creation and ownership. 2) Transparent and easily accessible records of IP rights and transactions. 3) Automated licensing and royalty payments through smart contracts. 4) Reduced risk of IP infringement and disputes. 5) Streamlined process for IP registration and transfer."
  },
  {
    category: "monetization",
    question: "Can I create custom licensing terms for my intellectual property?",
    answer: "Yes, our dapp allows IP owners to create custom licensing terms using smart contracts. You can define parameters such as usage rights, duration, territorial limitations, and payment structures. These terms are then encoded into the blockchain, ensuring automatic enforcement and transparency for all parties involved."
  }
]

const categoryIcons = {
  general: <BookOpen className="h-5 w-5" />,
  registration: <Cpu className="h-5 w-5" />,
  management: <DollarSign className="h-5 w-5" />,
  monetization: <DollarSign className="h-5 w-5" />,
  security: <Shield className="h-5 w-5" />,
  tokenization: <Zap className="h-5 w-5" />,
}

export default function Component() {
  const [filter, setFilter] = useState('all')

  const filteredFAQ = filter === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === filter)

  return (
    <div className="min-h-screen ">
      

      <main className="container mx-auto px-4 py-10 mb-20">
        <div className="max-w-8xl mx-auto">
          <Card className="mb-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/50 text-foreground">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to common questions about our blockchain-based IP management platform</CardDescription>
            </CardHeader>
            <CardContent>
              <Select onValueChange={(value) => setFilter(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="registration">Registration</SelectItem>
                  <SelectItem value="management">Management</SelectItem>
                  <SelectItem value="monetization">Monetization</SelectItem>
                  <SelectItem value="security">Security</SelectItem>
                  <SelectItem value="tokenization">Tokenization</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <div className="rounded space-y-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75 text-foreground p-6 round">
            {filteredFAQ.map((item, index) => (
              <Accordion type="single" collapsible key={index}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="p-1">
                        {/*categoryIcons[item.category]*/}
                      </Badge>
                      <span className='text-1xl'>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Card>
                      <CardContent className="pt-6">
                        {item.answer}
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>

          {filteredFAQ.length === 0 && (
            <Card className="p-6 text-center">
              <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-2 text-lg font-semibold">No matching FAQ items found</p>
              <p className="text-muted-foreground">Try selecting a different category or check back later for updates.</p>
            </Card>
          )}

          
        </div>
      </main>
    </div>
  )
}