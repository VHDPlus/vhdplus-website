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
    'loopkeyword': /\b(main|class|component|thread|attributedeclaration|newfunction|newcomponent|functionparameter|functioncontent|vhdl|entity|is|library|use|of|architecture|component|generic|port|map|end|name|out|inout|buffer|generate|input|process|begin|to|downto|in|out|with|select|signal|constant|variable|range|others|rise|fall|type|array|package|function|seqfunction|connections|include|seqfor|seqwhile|\'length|to_integer|abs|resize|to_bit|to_bitvector|to_stdlogicvector|to_unsigned|to_signed)(?![-\S])?\b/ig,
    'controlflow': /\b(step|seqif|seqelse|seqelsif|seqcase|seqwhen|while|do|wait|case|when|else|elsif|if|then|for|loop|break|exit|default|return|parfor|parwhile|seqfor|seqwhile)(?![-\S])?\b/ig,
    'boolean': /\b(?:true|false)\b/i,
      'function': /\w+(?=\()/,
      // decimal, based, physical, and exponential numbers supported
      'number': /\b\d+[m,n]{0,1}[s]?/i,
      'operator': /\b(?:abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|xnor|xor|nor)\b/i,
      'punctuation': /[{}[]/
  };