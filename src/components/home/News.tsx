'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useMessages } from '@/lib/i18n/useMessages';

export interface NewsItem {
    date: string;
    content: string;
}

interface NewsProps {
    items: NewsItem[];
    title?: string;
}

export default function News({ items, title }: NewsProps) {
    const messages = useMessages();
    const resolvedTitle = title || messages.home.news;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">{resolvedTitle}</h2>
            <div className="space-y-3">
                {items.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <span className="text-xs text-neutral-500 mt-1 w-16 flex-shrink-0">{item.date}</span>
                        <div className="min-w-0 text-sm text-neutral-700 dark:text-neutral-600 leading-relaxed">
                            <ReactMarkdown
                                components={{
                                    p: ({ children }) => <p className="m-0">{children}</p>,
                                    a: ({ ...props }) => (
                                        <a
                                            {...props}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent font-medium transition-all duration-200 rounded hover:bg-accent/10 hover:shadow-sm"
                                        />
                                    ),
                                    strong: ({ children }) => <strong className="font-semibold text-primary">{children}</strong>,
                                    em: ({ children }) => <em className="italic">{children}</em>,
                                    code: ({ children }) => (
                                        <code className="px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-[0.95em]">
                                            {children}
                                        </code>
                                    ),
                                }}
                            >
                                {item.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
