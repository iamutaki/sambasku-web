import {
  CodeHighlightAdapterProvider,
  createHighlightJsAdapter,
} from '@mantine/code-highlight';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import json from 'highlight.js/lib/languages/json';
import type { ReactNode } from 'react';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('json', json);
hljs.registerLanguage('shell', bash);

const highlightJsAdapter = createHighlightJsAdapter(hljs);

/** Provider khusus halaman yang menampilkan cuplikan kode (API publik). */
export function CodeHighlightProvider({ children }: { children: ReactNode }) {
  return (
    <CodeHighlightAdapterProvider adapter={highlightJsAdapter}>
      {children}
    </CodeHighlightAdapterProvider>
  );
}
