# Before Pull Request

1. Validate your contribututions to the standard schema against JSON Schema draft version defined in `$schema` field. See [Tools](#schema-validation) section if you need help to validate your contribution.
2. Format the standard schema following guidelines described in [Style guidelines](#style-guidelines). See [Tools](#schema-formatting) section if you need help to format your contribution.

# Style guidelines

## JSON Schema

### Definitions

For the purposes of this style guide, we define the following terms:

* **property** - a name: value pair inside a JSON object.
* **property name** - the name (or key) portion of the property.
* **property value** - the value portion of the property.

```
{
  // The name: value pair together is a "property".
  "propertyName": "propertyValue"
}
```

### General

#### Identation

Use 4 spaces to indent. Never use tabs.

#### Newlines

Use UNIX-style newlines (\n), and a newline character as the last character of a file. Windows-style newlines (\r\n) are forbidden on the repository.

#### No trailing whitespace

Clean up any trailing space in the JSON Schema files before commiting.

#### Comments

JSON Schema does not allow comments, all documentation must be in the `description` property of the object.

### Properties

#### Naming conventions

Use `lowerCamelCase` for property names. They should also be descriptive. Uncommon abbreviations should be avoided.

`array` types should have plural property names. All other property names should be singular.

#### Values

##### Complex types

Opening braces should go on the same line as property name.

Closing braces should be in a separate line with same identation level as the property name.

```
"properties": {
    "propertyName": {
        "type": "string",
        "description": "Some property description",
        "example": "johnsmith"
    },
}
```

##### Simple types

Property value must be placed in the same line as the property name.

```
{
    "property1": "property1 value",
    "property2": "property2 value"
}
```

# Tools

## Schema validation

We use [AJV](https://ajv.js.org) and [ajv-cli](https://github.com/jessedc/ajv-cli) to validate the standard schema in this project.

With ajv-cli installed you can execute the following command to validate your changes:

```
ajv compile -s callmetadata.schema.json
```

As alternative, you can use [JSON Schema Lint](https://jsonschemalint.com/#/version/draft-07/markup/json) online tool or any other tools available in the [JSON Schema Implementations](https://json-schema.org/implementations.html#validators) page.

## Schema formatting

We provide a simple node script to format standard schema following project guidelines. Please run the formatter script against your modified standard schema before creating your Pull Request:

```
./tools/formatter.js -i callmetadata.schema.json
```

**Warning:** running formatter with `-i` option will edit the file in-place and save a backup of the original file with `.bak` extension in the original file directory. If an existing backup file exists it will be overwritten.
