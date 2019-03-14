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