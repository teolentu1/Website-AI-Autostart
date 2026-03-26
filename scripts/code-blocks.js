(function () {
    const KEYWORDS = new Set([
        'def', 'return', 'if', 'else', 'elif', 'for', 'while', 'in', 'not',
        'and', 'or', 'is', 'None', 'True', 'False', 'class', 'import', 'from',
        'pass', 'break', 'continue', 'try', 'except', 'finally', 'with', 'as',
        'lambda', 'yield', 'raise', 'del', 'global', 'nonlocal', 'assert', 'self'
    ]);

    function escape(s) {
        return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    // Wrap text (which may contain newlines) in per-line spans of the given class.
    // Newlines are kept in the stream so line-splitting still works correctly.
    function spanLines(cls, text) {
        return text.split('\n').map(l => `<span class="${cls}">${escape(l)}</span>`).join('\n');
    }

    function highlightPython(code) {
        let i = 0;
        let out = '';

        while (i < code.length) {
            const ch = code[i];

            // Triple-quoted strings / docstrings (may span lines)
            if ((ch === '"' || ch === "'") && code[i + 1] === ch && code[i + 2] === ch) {
                const marker = ch + ch + ch;
                let j = i + 3;
                while (j < code.length) {
                    if (code[j] === '\\') { j += 2; continue; }
                    if (code.slice(j, j + 3) === marker) { j += 3; break; }
                    j++;
                }
                out += spanLines('tok-string', code.slice(i, j));
                i = j;
                continue;
            }

            // Single-line strings
            if (ch === '"' || ch === "'") {
                let j = i + 1;
                while (j < code.length && code[j] !== '\n') {
                    if (code[j] === '\\') { j += 2; continue; }
                    if (code[j] === ch) { j++; break; }
                    j++;
                }
                out += `<span class="tok-string">${escape(code.slice(i, j))}</span>`;
                i = j;
                continue;
            }

            // # Comments — to end of line
            if (ch === '#') {
                let j = i;
                while (j < code.length && code[j] !== '\n') j++;
                out += `<span class="tok-comment">${escape(code.slice(i, j))}</span>`;
                i = j;
                continue;
            }

            // Keywords and identifiers
            if (/[a-zA-Z_]/.test(ch)) {
                let j = i;
                while (j < code.length && /\w/.test(code[j])) j++;
                const word = code.slice(i, j);
                out += KEYWORDS.has(word)
                    ? `<span class="tok-keyword">${escape(word)}</span>`
                    : escape(word);
                i = j;
                continue;
            }

            // Newlines pass through as-is (used to split into lines later)
            out += ch === '\n' ? '\n' : escape(ch);
            i++;
        }

        return out;
    }

    function initCodeBlocks() {
        document.querySelectorAll('pre').forEach(pre => {
            if (pre.closest('.code-block')) return;

            const codeEl = pre.querySelector('code');
            const raw = (codeEl || pre).textContent.replace(/\n$/, '');

            // Wrap in .code-block
            const wrapper = document.createElement('div');
            wrapper.className = 'code-block';
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);

            // Copy button
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn';
            copyBtn.title = 'Copy code';
            copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(raw).then(() => {
                    copyBtn.classList.add('copied');
                    copyBtn.title = 'Copied!';
                    setTimeout(() => {
                        copyBtn.classList.remove('copied');
                        copyBtn.title = 'Copy code';
                    }, 1800);
                });
            });
            wrapper.appendChild(copyBtn);

            // Highlight, then wrap each line with its line number
            const highlighted = highlightPython(raw);
            const numbered = highlighted.split('\n').map((line, idx) =>
                `<span class="code-line"><span class="line-num">${idx + 1}</span><span class="line-content">${line}</span></span>`
            ).join('');

            (codeEl || pre).innerHTML = numbered;
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCodeBlocks);
    } else {
        initCodeBlocks();
    }
})();
