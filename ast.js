var ast = {};

ast.Attribute = function Attribute(properties) {
    this.kind = "Attribute";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.Boolean = function Boolean(properties) {
    this.kind = "Boolean";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.Comment = function Comment(properties) {
    this.kind = "Comment";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.CommentHTML = function CommentHTML(properties) {
    this.kind = "CommentHTML";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.Doctype = function Doctype(properties) {
    this.kind = "Doctype";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.Document = function Document(properties) {
    this.kind = "Document";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.Extend = function Extend(properties) {
    this.kind = "Extend";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.Filter = function String(properties) {
    this.kind = "Filter";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.ForEach = function ForEach(properties) {
    this.kind = "ForEach";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.Identifier = function Identifier(properties) {
    this.kind = "Identifier";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.IfStatement = function IfStatement(properties) {
    this.kind = "IfStatement";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.Import = function Import(properties) {
    this.kind = "Import";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.Include = function Include(properties) {
    this.kind = "Include";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.Interpolation = function Interpolation(properties) {
    this.kind = "Interpolation";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.MacroDefinition = function MacroDefinition(properties) {
    this.kind = "MacroDefinition";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.Modifier = function Modifier(properties) {
    this.kind = "Modifier";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.Number = function Number(properties) {
    this.kind = "Number";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.Raw = function Raw(properties) {
    this.kind = "Raw";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.String = function String(properties) {
    this.kind = "String";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

ast.Tag = function Tag(properties) {
    this.kind = "Tag";
    for (var prop in properties) {
        this[prop] = properties[prop];
    }
}

module.exports = ast;
