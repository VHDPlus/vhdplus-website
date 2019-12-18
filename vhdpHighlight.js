module.exports = {
    syntax: function(hljs){
    // Decimal literal:
    var INTEGER_RE = '\\d(_|\\d)*';
    var EXPONENT_RE = '[eE][-+]?' + INTEGER_RE;
    var DECIMAL_LITERAL_RE = INTEGER_RE + '(\\.' + INTEGER_RE + ')?' + '(' + EXPONENT_RE + ')?';
    // Based literal:
    var BASED_INTEGER_RE = '\\w+';
    var BASED_LITERAL_RE = INTEGER_RE + '#' + BASED_INTEGER_RE + '(\\.' + BASED_INTEGER_RE + ')?' + '#' + '(' + EXPONENT_RE + ')?';
    var NUMBER_RE = '\\b(' + BASED_LITERAL_RE + '|' + DECIMAL_LITERAL_RE + ')';

    return {
        
        case_insensitive: true, // language is case-insensitive
        keywords: {
            keywords: 'std_logic_vector std_ulogic_vector std_logic bit_vector bit boolean natural positive integer real character string unsigned signed clk rising_edge falling_edge',
            operators: 'not and nand or nor xor xnor',
            loopkeywords: 'main class component thread attributedeclaration newfunction newcomponent functionparameter functioncontent vhdl entity is library use of architecture component generic port map end name out inout buffer generate input process begin to downto in out with select signal constant variable range others rise fall type array package function stepfunction connections include stepfor \'length to_integer abs resize to_bit to_bitvector to_stdlogicvector to_unsigned to_signed',
            controlflow: 'step stepif stepelse stepelsif stepcase stepwhen while do wait case when else elsif if then for loop break exit default return',
        },
        contains: [
          {
            className: 'string',
            begin: '"', end: '"'
          },
          {
            className: 'digits',
            begin: NUMBER_RE,
            relevance: 0
          },
          {
            className: 'linecomment',
            begin: '--', end: '$'
          },
          {
            className: 'character',
            begin: '{', end: ''
          },
          {
            className: 'character',
            begin: '}', end: ''
          },
          hljs.COMMENT(
            '/\\*', // begin
            '\\*/', // end
            {
              contains: [
                {
                  className: 'doc', begin: '@\\w+'
                }
              ]
            }
          )
        ]
      };
    }
}