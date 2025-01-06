import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import React, { useState } from 'react'

type Props = {}

interface Subject {
    id: string
    name: string
    count: number
  }

const subjects: Subject[] = [
    { id: "davlat", name: "Davlat tilida ish yuritish", count: 2 },
    { id: "dinshunoslik", name: "Dinshunoslik asoslari", count: 1 },
    { id: "huquq", name: "Huquqshunoslik", count: 1 },
    { id: "iqtisodiyot", name: "Iqtisodiyot", count: 2 },
    { id: "madaniyat", name: "Madaniyatshunoslik", count: 2 },
    { id: "manaviyat", name: "Manaviyat asoslari", count: 1 },
    { id: "milliy", name: "Milliy istiqlol g'oyasi", count: 1 },
    { id: "odam", name: "Odam va uning salomatligi", count: 1 },
    { id: "sotsiologiya", name: "Sotsiologiya", count: 1 },
    { id: "tarix", name: "Tarix", count: 4 },
    { id: "texnika", name: "Texnika va texnologiya", count: 1 },
    { id: "transport", name: "Transport", count: 2 },
]

function CategorySidebar({ }: Props) {
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
    const toggleSubject = (id: string) => {
        setSelectedSubjects(prev =>
            prev.includes(id)
                ? prev.filter(subjectId => subjectId !== id)
                : [...prev, id]
        )
    }

    return (
        <div className="w-full lg:w-64 shrink-0">
            <Card className="p-4">
                <h2 className="text-lg font-semibold mb-4">Фильтр</h2>
                <div className="space-y-4">
                    <h3 className="font-medium">Darsliklar</h3>
                    <div className="space-y-2">
                        {subjects.map((subject) => (
                            <div key={subject.id} className="flex items-center space-x-2">
                                <Checkbox
                                    id={subject.id}
                                    checked={selectedSubjects.includes(subject.id)}
                                    onCheckedChange={() => toggleSubject(subject.id)}
                                />
                                <label
                                    htmlFor={subject.id}
                                    className="flex-1 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {subject.name}
                                </label>
                                <span className="text-sm text-muted-foreground">{subject.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CategorySidebar