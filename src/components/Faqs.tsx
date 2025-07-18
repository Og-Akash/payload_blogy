import { getCollectionData } from "@/helpers/payload";
import React, { use } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Faq } from "@/payload-types";

const Faqs = () => {
  const faqResults = use(
    getCollectionData("faqs", {
      sort: "-createdAt",
    }),
  );
  if (!faqResults || !faqResults.docs) return null;

  const faqs = faqResults.docs as Faq[];

  return (
    <section aria-label="FAQs" className="mx-auto w-full max-w-3xl p-1 md:p-4">
      <h2 className="mb-6 text-center text-xl font-bold md:text-2xl">Frequently Asked Questions</h2>

      <Accordion.Root type="multiple" className="space-y-4">
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={faq.id || index}
            value={`faq-${index}`}
            className="overflow-hidden rounded-md border border-gray-600"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full cursor-pointer items-center justify-between p-4 text-left font-medium text-white transition-colors hover:bg-gray-700">
                {faq.question}
                <span className="text-gray-400 transition-transform group-data-[state=open]:rotate-180">
                  <ChevronDown />
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="border-t border-gray-700 p-4 text-sm text-gray-300">
              {faq.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
};

export default Faqs;
