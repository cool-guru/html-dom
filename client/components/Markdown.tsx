import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import SampleCode from './SampleCode';

interface MarkdownProps {
    content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => {
    const renderBlockquote = (p: any) => {
        return <blockquote>{p.children}</blockquote>;
    };
    const renderCode = (p: any) => {
        return <SampleCode code={p.value} lang={p.language} />;
    };
    const renderInlineCode = (p: any) => {
        return <code>{p.children}</code>;
    };
    const renderHeading = (p: any) => {
        switch (p.level) {
            case 1: return <h1 className="text-4xl mb-8">{p.children}</h1>;
            case 2: return <h2 className="text-3xl mb-4">{p.children}</h2>;
            case 3: return <h3>{p.children}</h3>;
            case 4: return <h4>{p.children}</h4>;
            case 5: return <h5>{p.children}</h5>;
            default: return <></>;
        }
    };
    const renderHorizontalLine = (p: any) => {
        return <hr className="my-6" />;
    };
    const renderLink = (p: any) => {
        return (p.href.startsWith('http://') || p.href.startsWith('https://'))
            ? <a href={p.href} className="underline">{p.children}</a>
            : <Link to={p.href} className="underline">{p.children}</Link>;
    };
    const renderList = (p: any) => {
        return p.ordered
                ? <ol className="mb-8 ml-4 list-decimal">{p.children}</ol>
                : <ul className="mb-8 ml-4 list-disc">{p.children}</ul>;
    };
    const renderParagraph = (p: any) => {
        return <p className="mb-8">{p.children}</p>;
    };
    const renderTable = (p: any) => {
        return <table className="border mb-8 text-white">{p.children}</table>;
    };
    const renderTableRow = (p: any) => {
        return <tr className={`border-t ${p.isHeader ? "" : ""}`}>{p.children}</tr>;
    };
    const renderTableCell = (p: any) => {
        return <td className="p-3">{p.children}</td>;
    };

    return (
        <ReactMarkdown
            renderers={{
                blockquote: renderBlockquote,
                code: renderCode,
                heading: renderHeading,
                inlineCode: renderInlineCode,
                link: renderLink,
                list: renderList,
                paragraph: renderParagraph,
                table: renderTable,
                tableCell: renderTableCell,
                tableRow: renderTableRow,
                thematicBreak: renderHorizontalLine,
            }}
            source={content}
        />
    );
};

export default Markdown;
