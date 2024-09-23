import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
    {
        id: 'item-1',
        question: 'Primer acordion',
        answer: 'Contenido del primer acordion',
    },
    {
        id: 'item-2',
        question: 'Segundo acordion',
        answer: 'Contenido del segundo acordion',
    },
    {
        id: 'item-3',
        question: 'Tercer acordion',
        answer: 'Contenido del tercer acordion',
    },
]
export default function AccordionPage() {

    return (
        <div>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Primer acordion</AccordionTrigger>
                    <AccordionContent>
                        Contenido del primer acordeon
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Segundo acordion</AccordionTrigger>
                    <AccordionContent>
                        Contenido del segundo acordeon
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Tercer acordion</AccordionTrigger>
                    <AccordionContent>
                        Contenido del tercer acordeon
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-full">
                {
                    items.map(item => {
                        return (
                            <AccordionItem value={item.id} key={item.id}>
                                <AccordionTrigger>{item.question}</AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        )
                    })
                }

            </Accordion>
        </div>
    )
}