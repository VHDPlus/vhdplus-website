'use strict';

var theme = {
  plain: {
    backgroundColor: "#F6F8FA",
    color: "#000"
  },
  styles: [{
    types: ["comment", "alternativecomment"],
    style: {
      color: "#608B4E"
    }
  }, 
  {
    types: ["punctuation"],
    style: {
      color: "#f0f"
    }
  },
  {
    types: ["tag", "operator", "number"],
    style: {
      color: "#90A486"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
    style: {
      color: "#44AB7C"
    }
  }, {
    types: ["loopkeyword", "controlflow"],
    style: {
      color: "#447C94"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

module.exports = theme;