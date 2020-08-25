/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect, useState, useRef} from 'react';
import classnames from 'classnames';
import Highlight, {defaultProps} from 'prism-react-renderer';
import defaultTheme from 'prism-react-renderer/themes/palenight';
import Clipboard from 'clipboard';
import rangeParser from 'parse-numeric-range';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

// Custom Language
import Prism from 'prism-react-renderer/prism';
(typeof global !== 'undefined' ? global : window).Prism = Prism;

Prism.languages.vhdp = {
  'alternativecomment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
  'comment': /--.+/,
	// support for all logic vectors
	'vhdl-vectors': {
		'pattern': /\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,
		'alias': 'number'
	},
	// support for operator overloading included
	'quoted-function': {
		pattern: /"\S+?"(?=\()/,
		alias: 'function'
	},
	'string': /"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/,
  'constant': /\b(?:use|library)\b/i,
  
  'keyword': /\b(std_logic_vector|std_ulogic_vector|std_logic|bit_vector|bit|boolean|natural|positive|integer|real|character|string|unsigned|signed|clk|rising_edge|falling_edge)(?![-\S])?\b/ig,
  'loopkeyword': /\b(main|class|component|thread|attributedeclaration|newfunction|newcomponent|functionparameter|functioncontent|vhdl|entity|is|library|use|of|architecture|component|generic|port|map|end|name|out|inout|buffer|generate|input|process|begin|to|downto|in|out|with|select|signal|constant|variable|range|others|rise|fall|type|array|package|function|stepfunction|connections|include|seqfor|\'length|to_integer|abs|resize|to_bit|to_bitvector|to_stdlogicvector|to_unsigned|to_signed)(?![-\S])?\b/ig,
  'controlflow': /\b(step|stepif|stepelse|stepelsif|stepcase|stepwhen|while|do|wait|case|when|else|elsif|if|then|for|loop|break|exit|default|return)(?![-\S])?\b/ig,
  'boolean': /\b(?:true|false)\b/i,
	'function': /\w+(?=\()/,
	// decimal, based, physical, and exponential numbers supported
	'number': /'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,
	'operator': /\b(?:abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|xnor|xor|nor)\b/i,
	'punctuation': /[{}[]/
};

Prism.languages.vhdl = {
	'comment': /--.+/,
	// support for all logic vectors
	'vhdl-vectors': {
		'pattern': /\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,
		'alias': 'number'
	},
	// support for operator overloading included
	'quoted-function': {
		pattern: /"\S+?"(?=\()/,
		alias: 'function'
	},
	'string': /"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/,
	'constant': /\b(?:use|library)\b/i,
	// support for predefined attributes included
	'keyword': /\b(?:'active|'ascending|'base|'delayed|'driving|'driving_value|'event|'high|'image|'instance_name|'last_active|'last_event|'last_value|'left|'leftof|'length|'low|'path_name|'pos|'pred|'quiet|'range|'reverse_range|'right|'rightof|'simple_name|'stable|'succ|'transaction|'val|'value|access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with)\b/i,
	'boolean': /\b(?:true|false)\b/i,
	'function': /\w+(?=\()/,
	// decimal, based, physical, and exponential numbers supported
	'number': /'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,
	'operator': /[<>]=?|:=|[-+*/&=]|\b(?:abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|xnor|xor|nor)\b/i,
	'punctuation': /[{}[\];(),.:]/
};

const highlightLinesRangeRegex = /{([\d,-]+)}/;

export default ({children, className: languageClassName, metastring}) => {
  const {
    siteConfig: {
      themeConfig: {prism = {}},
    },
  } = useDocusaurusContext();
  const [showCopied, setShowCopied] = useState(false);
  const target = useRef(null);
  const button = useRef(null);
  let highlightLines = [];

  if (metastring && highlightLinesRangeRegex.test(metastring)) {
    const highlightLinesRange = metastring.match(highlightLinesRangeRegex)[1];
    highlightLines = rangeParser.parse(highlightLinesRange).filter(n => n > 0);
  }

  useEffect(() => {
    let clipboard;

    if (button.current) {
      clipboard = new Clipboard(button.current, {
        target: () => target.current,
      });
    }

    return () => {
      if (clipboard) {
        clipboard.destroy();
      }
    };
  }, [button.current, target.current]);

  let language =
    languageClassName && languageClassName.replace(/language-/, '');

  if (!language && prism.defaultLanguage) {
    language = prism.defaultLanguage;
  }

  const handleCopyCode = () => {
    window.getSelection().empty();
    setShowCopied(true);

    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <div className={styles.codeBlockWrapper}>
      <button
        ref={button}
        type="button"
        aria-label="Copy code to clipboard"
        className={styles.copyButton}
        onClick={handleCopyCode}>
        {showCopied ? 'Copied' : 'Copy'}
      </button>

      <Highlight
        {...defaultProps}
        theme={prism.theme || defaultTheme}
        code={children.trim()}
        language={language}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <pre className={classnames(className, styles.codeBlock)}>
            <code
              ref={target}
              className={classnames(className, styles.codeBlockLines)}
              style={style}>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({line, key: i});

                if (highlightLines.includes(i + 1)) {
                  lineProps.className = `${lineProps.className} docusaurus-highlight-code-line`;
                }

                return (
                  <div key={i} {...lineProps}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({token, key})} />
                    ))}
                  </div>
                );
              })}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
};