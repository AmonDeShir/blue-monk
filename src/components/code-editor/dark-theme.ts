import * as monaco from 'monaco-editor-vite-fix';

export const DARK_THEME: monaco.editor.IStandaloneThemeData = {
  "inherit": false,
  "base": "vs-dark",
  "colors": {
    "activityBarBadge.background": "#007acc",
    "editor.background": "#1e1e1e",
    "editor.foreground": "#d4d4d4",
    "editor.inactiveSelectionBackground": "#3a3d41",
    "editor.selectionHighlightBackground": "#add6ff26",
    "editorIndentGuide.activeBackground": "#707070",
    "editorIndentGuide.background": "#404040",
    "input.placeholderForeground": "#a6a6a6",
    "list.dropBackground": "#383b3d",
    "menu.background": "#252526",
    "menu.foreground": "#cccccc",
    "settings.numberInputBackground": "#292929",
    "settings.textInputBackground": "#292929",
    "sideBarTitle.foreground": "#bbbbbb"
  },
  "rules": [
    {
      "foreground": "#D4D4D4",
      "token": "meta.embedded"
    },
    {
      "foreground": "#D4D4D4",
      "token": "source.groovy.embedded"
    },
    {
      "fontStyle": "italic",
      "token": "emphasis"
    },
    {
      "fontStyle": "bold",
      "token": "strong"
    },
    {
      "foreground": "#000080",
      "token": "header"
    },
    {
      "foreground": "#6A9955",
      "token": "comment"
    },
    {
      "foreground": "#569cd6",
      "token": "constant.language"
    },
    {
      "foreground": "#b5cea8",
      "token": "constant.numeric"
    },
    {
      "foreground": "#646695",
      "token": "constant.regexp"
    },
    {
      "foreground": "#569cd6",
      "token": "entity.name.tag"
    },
    {
      "foreground": "#d7ba7d",
      "token": "entity.name.tag.css"
    },
    {
      "foreground": "#9cdcfe",
      "token": "entity.other.attribute-name"
    },
    {
      "foreground": "#d7ba7d",
      "token": "entity.other.attribute-name.class.css"
    },
    {
      "foreground": "#d7ba7d",
      "token": "entity.other.attribute-name.class.mixin.css"
    },
    {
      "foreground": "#d7ba7d",
      "token": "entity.other.attribute-name.id.css"
    },
    {
      "foreground": "#d7ba7d",
      "token": "entity.other.attribute-name.parent-selector.css"
    },
    {
      "foreground": "#d7ba7d",
      "token": "entity.other.attribute-name.pseudo-class.css"
    },
    {
      "foreground": "#d7ba7d",
      "token": "entity.other.attribute-name.pseudo-element.css"
    },
    {
      "foreground": "#d7ba7d",
      "token": "source.css.less entity.other.attribute-name.id"
    },
    {
      "foreground": "#d7ba7d",
      "token": "entity.other.attribute-name.attribute.scss"
    },
    {
      "foreground": "#d7ba7d",
      "token": "entity.other.attribute-name.scss"
    },
    {
      "foreground": "#f44747",
      "token": "invalid"
    },
    {
      "fontStyle": "underline",
      "token": "markup.underline"
    },
    {
      "fontStyle": "bold",
      "foreground": "#569cd6",
      "token": "markup.bold"
    },
    {
      "fontStyle": "bold",
      "foreground": "#569cd6",
      "token": "markup.heading"
    },
    {
      "fontStyle": "italic",
      "token": "markup.italic"
    },
    {
      "foreground": "#b5cea8",
      "token": "markup.inserted"
    },
    {
      "foreground": "#ce9178",
      "token": "markup.deleted"
    },
    {
      "foreground": "#569cd6",
      "token": "markup.changed"
    },
    {
      "foreground": "#6A9955",
      "token": "punctuation.definition.quote.begin.markdown"
    },
    {
      "foreground": "#6796e6",
      "token": "punctuation.definition.list.begin.markdown"
    },
    {
      "foreground": "#ce9178",
      "token": "markup.inline.raw"
    },
    {
      "foreground": "#808080",
      "token": "punctuation.definition.tag"
    },
    {
      "foreground": "#569cd6",
      "token": "meta.preprocessor"
    },
    {
      "foreground": "#ce9178",
      "token": "meta.preprocessor.string"
    },
    {
      "foreground": "#b5cea8",
      "token": "meta.preprocessor.numeric"
    },
    {
      "foreground": "#9cdcfe",
      "token": "meta.structure.dictionary.key.python"
    },
    {
      "foreground": "#569cd6",
      "token": "meta.diff.header"
    },
    {
      "foreground": "#569cd6",
      "token": "storage"
    },
    {
      "foreground": "#569cd6",
      "token": "storage.type"
    },
    {
      "foreground": "#569cd6",
      "token": "storage.modifier"
    },
    {
      "foreground": "#ce9178",
      "token": "string"
    },
    {
      "foreground": "#ce9178",
      "token": "string.tag"
    },
    {
      "foreground": "#ce9178",
      "token": "string.value"
    },
    {
      "foreground": "#d16969",
      "token": "string.regexp"
    },
    {
      "foreground": "#569cd6",
      "token": "punctuation.definition.template-expression.begin"
    },
    {
      "foreground": "#569cd6",
      "token": "punctuation.definition.template-expression.end"
    },
    {
      "foreground": "#569cd6",
      "token": "punctuation.section.embedded"
    },
    {
      "foreground": "#d4d4d4",
      "token": "meta.template.expression"
    },
    {
      "foreground": "#9cdcfe",
      "token": "support.type.vendored.property-name"
    },
    {
      "foreground": "#9cdcfe",
      "token": "support.type.property-name"
    },
    {
      "foreground": "#9cdcfe",
      "token": "variable.css"
    },
    {
      "foreground": "#9cdcfe",
      "token": "variable.scss"
    },
    {
      "foreground": "#9cdcfe",
      "token": "variable.other.less"
    },
    {
      "foreground": "#9cdcfe",
      "token": "source.coffee.embedded"
    },
    {
      "foreground": "#569cd6",
      "token": "keyword"
    },
    {
      "foreground": "#569cd6",
      "token": "keyword.control"
    },
    {
      "foreground": "#d4d4d4",
      "token": "keyword.operator"
    },
    {
      "foreground": "#569cd6",
      "token": "keyword.operator.new"
    },
    {
      "foreground": "#569cd6",
      "token": "keyword.operator.expression"
    },
    {
      "foreground": "#569cd6",
      "token": "keyword.operator.cast"
    },
    {
      "foreground": "#569cd6",
      "token": "keyword.operator.sizeof"
    },
    {
      "foreground": "#569cd6",
      "token": "keyword.operator.instanceof"
    },
    {
      "foreground": "#569cd6",
      "token": "keyword.operator.logical.python"
    },
    {
      "foreground": "#b5cea8",
      "token": "keyword.other.unit"
    },
    {
      "foreground": "#569cd6",
      "token": "punctuation.section.embedded.begin.php"
    },
    {
      "foreground": "#569cd6",
      "token": "punctuation.section.embedded.end.php"
    },
    {
      "foreground": "#9cdcfe",
      "token": "support.function.git-rebase"
    },
    {
      "foreground": "#b5cea8",
      "token": "constant.sha.git-rebase"
    },
    {
      "foreground": "#d4d4d4",
      "token": "storage.modifier.import.java"
    },
    {
      "foreground": "#d4d4d4",
      "token": "variable.language.wildcard.java"
    },
    {
      "foreground": "#d4d4d4",
      "token": "storage.modifier.package.java"
    },
    {
      "foreground": "#569cd6",
      "token": "variable.language"
    },
    {
      "foreground": "#DCDCAA",
      "token": "entity.name.function"
    },
    {
      "foreground": "#DCDCAA",
      "token": "support.function"
    },
    {
      "foreground": "#DCDCAA",
      "token": "support.constant.handlebars"
    },
    {
      "foreground": "#4EC9B0",
      "token": "meta.return-type"
    },
    {
      "foreground": "#4EC9B0",
      "token": "support.class"
    },
    {
      "foreground": "#4EC9B0",
      "token": "support.type"
    },
    {
      "foreground": "#4EC9B0",
      "token": "entity.name.type"
    },
    {
      "foreground": "#4EC9B0",
      "token": "entity.name.class"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.numeric.go"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.byte.go"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.boolean.go"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.string.go"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.uintptr.go"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.error.go"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.rune.go"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.cs"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.generic.cs"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.modifier.cs"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.variable.cs"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.annotation.java"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.generic.java"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.java"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.object.array.java"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.primitive.array.java"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.primitive.java"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.token.java"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.groovy"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.annotation.groovy"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.parameters.groovy"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.generic.groovy"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.object.array.groovy"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.primitive.array.groovy"
    },
    {
      "foreground": "#4EC9B0",
      "token": "storage.type.primitive.groovy"
    },
    {
      "foreground": "#4EC9B0",
      "token": "meta.type.cast.expr"
    },
    {
      "foreground": "#4EC9B0",
      "token": "meta.type.new.expr"
    },
    {
      "foreground": "#4EC9B0",
      "token": "support.constant.math"
    },
    {
      "foreground": "#4EC9B0",
      "token": "support.constant.dom"
    },
    {
      "foreground": "#4EC9B0",
      "token": "support.constant.json"
    },
    {
      "foreground": "#4EC9B0",
      "token": "entity.other.inherited-class"
    },
    {
      "foreground": "#C586C0",
      "token": "keyword.control"
    },
    {
      "foreground": "#9CDCFE",
      "token": "variable"
    },
    {
      "foreground": "#9CDCFE",
      "token": "meta.definition.variable.name"
    },
    {
      "foreground": "#9CDCFE",
      "token": "support.variable"
    },
    {
      "foreground": "#9CDCFE",
      "token": "entity.name.variable"
    },
    {
      "foreground": "#9CDCFE",
      "token": "meta.object-literal.key"
    },
    {
      "foreground": "#CE9178",
      "token": "support.constant.property-value"
    },
    {
      "foreground": "#CE9178",
      "token": "support.constant.font-name"
    },
    {
      "foreground": "#CE9178",
      "token": "support.constant.media-type"
    },
    {
      "foreground": "#CE9178",
      "token": "support.constant.media"
    },
    {
      "foreground": "#CE9178",
      "token": "constant.other.color.rgb-value"
    },
    {
      "foreground": "#CE9178",
      "token": "constant.other.rgb-value"
    },
    {
      "foreground": "#CE9178",
      "token": "support.constant.color"
    },
    {
      "foreground": "#CE9178",
      "token": "punctuation.definition.group.regexp"
    },
    {
      "foreground": "#CE9178",
      "token": "punctuation.definition.group.assertion.regexp"
    },
    {
      "foreground": "#CE9178",
      "token": "punctuation.definition.character-class.regexp"
    },
    {
      "foreground": "#CE9178",
      "token": "punctuation.character.set.begin.regexp"
    },
    {
      "foreground": "#CE9178",
      "token": "punctuation.character.set.end.regexp"
    },
    {
      "foreground": "#CE9178",
      "token": "keyword.operator.negation.regexp"
    },
    {
      "foreground": "#CE9178",
      "token": "support.other.parenthesis.regexp"
    },
    {
      "foreground": "#d16969",
      "token": "constant.character.character-class.regexp"
    },
    {
      "foreground": "#d16969",
      "token": "constant.other.character-class.set.regexp"
    },
    {
      "foreground": "#d16969",
      "token": "constant.other.character-class.regexp"
    },
    {
      "foreground": "#d16969",
      "token": "constant.character.set.regexp"
    },
    {
      "foreground": "#DCDCAA",
      "token": "keyword.operator.or.regexp"
    },
    {
      "foreground": "#DCDCAA",
      "token": "keyword.control.anchor.regexp"
    },
    {
      "foreground": "#d7ba7d",
      "token": "keyword.operator.quantifier.regexp"
    },
    {
      "foreground": "#569cd6",
      "token": "constant.character"
    },
    {
      "foreground": "#d7ba7d",
      "token": "constant.character.escape"
    },
    {
      "foreground": "#6796e6",
      "token": "token.info-token"
    },
    {
      "foreground": "#cd9731",
      "token": "token.warn-token"
    },
    {
      "foreground": "#f44747",
      "token": "token.error-token"
    },
    {
      "foreground": "#b267e6",
      "token": "token.debug-token"
    }
  ],
  "encodedTokensColors": []
}

