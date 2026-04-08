'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    BookOpenIcon,
    ClipboardDocumentIcon,
    DocumentArrowDownIcon,
    DocumentTextIcon,
} from '@heroicons/react/24/outline';
import { Publication } from '@/types/publication';
import { useMessages } from '@/lib/i18n/useMessages';
import { cn } from '@/lib/utils';

interface SelectedPublicationsProps {
    publications: Publication[];
    title?: string;
    enableOnePageMode?: boolean;
}

export default function SelectedPublications({ publications, title, enableOnePageMode = false }: SelectedPublicationsProps) {
    const messages = useMessages();
    const resolvedTitle = title || messages.home.selectedPublications;
    const [expandedBibtexId, setExpandedBibtexId] = useState<string | null>(null);
    const [expandedAbstractId, setExpandedAbstractId] = useState<string | null>(null);

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-serif font-bold text-primary">{resolvedTitle}</h2>
                <Link
                    href={enableOnePageMode ? "/#publications" : "/publications"}
                    prefetch={true}
                    className="text-accent hover:text-accent-dark text-sm font-medium transition-all duration-200 rounded hover:bg-accent/10 hover:shadow-sm"
                >
                    {messages.home.viewAll} →
                </Link>
            </div>
            <div className="space-y-4">
                {publications.map((pub, index) => {
                    const pdfUrl = pub.pdfUrl?.trim() || pub.url?.trim();

                    return (
                        <motion.div
                            key={pub.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-neutral-200 dark:border-[rgba(148,163,184,0.24)] hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                        >
                            <h3 className="font-semibold text-primary mb-2 leading-tight">
                                {pub.title}
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-500 mb-1">
                                {pub.authors.map((author, idx) => (
                                    <span key={idx}>
                                        <span className={author.isHighlighted ? 'font-semibold text-accent' : ''}>
                                            {author.name}
                                        </span>
                                        {(author.isCoAuthor || author.isCorresponding) && (
                                            <sup className={`ml-0 ${author.isHighlighted ? 'text-accent' : 'text-neutral-600 dark:text-neutral-500'}`}>
                                                {author.isCoAuthor ? '*' : ''}
                                                {author.isCorresponding ? '†' : ''}
                                            </sup>
                                        )}
                                        {idx < pub.authors.length - 1 && ', '}
                                    </span>
                                ))}
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-500 mb-2">
                                {pub.conference || [pub.journal, pub.year].filter(Boolean).join(' ')}
                            </p>
                            {pub.description && (
                                <p className="text-sm text-neutral-500 dark:text-neutral-500 line-clamp-2">
                                    {pub.description}
                                </p>
                            )}

                            <div className="flex flex-wrap gap-2 mt-2.5">
                                {pub.abstract && (
                                    <button
                                        onClick={() => setExpandedAbstractId(expandedAbstractId === pub.id ? null : pub.id)}
                                        className={cn(
                                            "inline-flex items-center px-3 py-1 rounded-md text-xs font-medium border transition-colors",
                                            expandedAbstractId === pub.id
                                                ? "bg-accent text-white border-accent"
                                                : "bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:bg-accent hover:text-white hover:border-accent"
                                        )}
                                    >
                                        <DocumentTextIcon className="h-3 w-3 mr-1.5" />
                                        {messages.publications.abstract}
                                    </button>
                                )}
                                {pdfUrl && (
                                    <a
                                        href={pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:bg-accent hover:text-white hover:border-accent transition-colors"
                                    >
                                        <DocumentArrowDownIcon className="h-3 w-3 mr-1.5" />
                                        {messages.publications.pdf}
                                    </a>
                                )}
                                {pub.bibtex && (
                                    <button
                                        onClick={() => setExpandedBibtexId(expandedBibtexId === pub.id ? null : pub.id)}
                                        className={cn(
                                            "inline-flex items-center px-3 py-1 rounded-md text-xs font-medium border transition-colors",
                                            expandedBibtexId === pub.id
                                                ? "bg-accent text-white border-accent"
                                                : "bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:bg-accent hover:text-white hover:border-accent"
                                        )}
                                    >
                                        <BookOpenIcon className="h-3 w-3 mr-1.5" />
                                        {messages.publications.bibtex}
                                    </button>
                                )}
                            </div>

                            <AnimatePresence initial={false}>
                                {expandedAbstractId === pub.id && pub.abstract ? (
                                    <motion.div
                                        key={`${pub.id}-abstract`}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden mt-2"
                                    >
                                        <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                {pub.abstract}
                                            </p>
                                        </div>
                                    </motion.div>
                                ) : null}
                                {expandedBibtexId === pub.id && pub.bibtex ? (
                                    <motion.div
                                        key={`${pub.id}-bibtex`}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden mt-2"
                                    >
                                        <div className="relative bg-white dark:bg-neutral-900 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
                                            <pre className="text-xs text-neutral-600 dark:text-neutral-400 overflow-x-auto whitespace-pre-wrap font-mono">
                                                {pub.bibtex}
                                            </pre>
                                            <button
                                                onClick={() => navigator.clipboard.writeText(pub.bibtex || '')}
                                                className="absolute top-2 right-2 p-1.5 rounded-md bg-neutral-50 dark:bg-neutral-800 text-neutral-500 hover:text-accent shadow-sm border border-neutral-200 dark:border-neutral-700 transition-colors"
                                                title={messages.common.copyToClipboard}
                                            >
                                                <ClipboardDocumentIcon className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
}
