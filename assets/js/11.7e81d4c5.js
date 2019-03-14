(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{201:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("The validator offers an API to add new fields and trigger validations.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("table",[t._m(3),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("errors")]),t._v(" "),s("td",[s("router-link",{attrs:{to:"/api/errorbag.html"}},[s("code",[t._v("ErrorBag")])])],1),t._v(" "),s("td",[t._v("Instance of the ErrorBag class to manage errors.")])]),t._v(" "),s("tr",[s("td",[t._v("fields")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://github.com/baianat/vee-validate/blob/master/src/core/fieldBag.js",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("FieldBag")]),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("Instance of the FieldBag class to manage fields.")])]),t._v(" "),t._m(4)])]),t._v(" "),t._m(5),t._v(" "),s("table",[t._m(6),t._v(" "),s("tbody",[t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("tr",[s("td",[t._v("extend(name: string, rule: Rule, options?: ExtendOptions)")]),t._v(" "),t._m(14),t._v(" "),s("td",[t._v("Adds a new validation rule. The provided rule param must be a "),s("router-link",{attrs:{to:"/guide/custom-rules.html"}},[t._v("valid Rule function or object")]),t._v(".")],1)]),t._v(" "),t._m(15)])]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),s("p",[t._v("The validate method is the primary way to trigger validation, all arguments are optional but that will produce different results depending on which arguments you did provide.")]),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("The field descriptor is a string that can have the following forms:")]),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),s("p",[t._v("You can pass the options to modify the behavior of the validation, the options is an object that can contain the following:")]),t._v(" "),s("table",[t._m(24),t._v(" "),s("tbody",[t._m(25),t._v(" "),s("tr",[s("td",[t._v("initial")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),t._m(26),t._v(" "),s("td",[t._v("If true the rules marked as "),s("router-link",{attrs:{to:"/guide/custom-rules.html#non-immediate-rules"}},[t._v("non-immediate")]),t._v(" will be skipped during this call, used to prevent initial validation from triggering backend calls.")],1)])])]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._v(" "),s("p",[t._v("Verify accepts a third parameter that is used to configure the validation and messages.")]),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"validator-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validator-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Validator API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[this._v("#")]),this._v(" Properties")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Type")]),this._v(" "),e("th",[this._v("Description")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("locale")]),this._v(" "),e("td",[e("code",[this._v("string")])]),this._v(" "),e("td",[this._v("The Currently activated locale.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Return Type")]),this._v(" "),e("th",[this._v("Description")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("attach(field: FieldOptions)")]),this._v(" "),e("td",[e("code",[this._v("Field")])]),this._v(" "),e("td",[this._v("attaches a new field to the validator.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("validate(descriptor?: String, value?: any, options?: Object)")]),this._v(" "),e("td",[e("code",[this._v("Promise<boolean>")])]),this._v(" "),e("td",[this._v("Validates the matching fields of the provided "),e("a",{attrs:{href:"#field-descriptor"}},[this._v("descriptor")]),this._v(". when validation is done, the Promise resolves a boolean indicating whether the selected was valid or not.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("validateAll(fields?: String or Object)")]),this._v(" "),e("td",[e("code",[this._v("Promise<boolean>")])]),this._v(" "),e("td",[this._v("Validates each value against the corresponding field validations.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("pause()")]),this._v(" "),e("td",[e("code",[this._v("void")])]),this._v(" "),e("td",[this._v("Disables validation.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("resume()")]),this._v(" "),e("td",[e("code",[this._v("void")])]),this._v(" "),e("td",[this._v("Enables validation.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("verify(value: any, rules: string")]),this._v(" "),e("td",[this._v("Object)")]),this._v(" "),e("td",[this._v("{ errors: string[], valid: boolean, failedRules: { [x: string]: string } }")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("detach(name: string, scope?: string)")]),this._v(" "),e("td",[e("code",[this._v("void")])]),this._v(" "),e("td",[this._v("Detaches the field that matches the name and the scope of the provided values.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("void")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("reset(matcher?: Object)")]),this._v(" "),e("td",[e("code",[this._v("void")])]),this._v(" "),e("td",[this._v("Resets field flags for all scoped fields. Resets all fields if no scope is provided.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"scoped-reset-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scoped-reset-usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Scoped Reset() Usage")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" matcher "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    scope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'form-1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    vmId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$validator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$validator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matcher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"validate-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validate-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Validate API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"field-descriptor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#field-descriptor","aria-hidden":"true"}},[this._v("#")]),this._v(" Field Descriptor")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// validate all fields.")]),t._v("\nvalidator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// validate a field that has a matching name with the provided selector.")]),t._v("\nvalidator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'field'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// validate a field within a scope.")]),t._v("\nvalidator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scope.field'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// validate all fields within this scope.")]),t._v("\nvalidator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scope.*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// validate all fields without a scope.")]),t._v("\nvalidator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#value","aria-hidden":"true"}},[this._v("#")]),this._v(" Value")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The value argument is optional, if the value is not passed to the "),e("code",[this._v("validate()")]),this._v(" method, it will try to resolve it using the internal value resolution algorithm. When the value is passed, the algorithm will be skipped and that value will be used instead.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"validation-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validation-options","aria-hidden":"true"}},[this._v("#")]),this._v(" Validation Options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Property")]),this._v(" "),e("th",{staticStyle:{"text-align":"center"}},[this._v("Type")]),this._v(" "),e("th",{staticStyle:{"text-align":"center"}},[this._v("Default")]),this._v(" "),e("th",[this._v("Description")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("silent")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("Boolean")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("false")])]),this._v(" "),e("td",[this._v("If true the validate method will return the validation result without modifying the errors or the flags.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"center"}},[e("code",[this._v("false")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"verify"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verify","aria-hidden":"true"}},[this._v("#")]),this._v(" Verify")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("Validator.verify")]),this._v(" method validates a value against the specified rules, allowing you to use the validator programatically in your code without having to register fields using the "),e("code",[this._v("v-validate")]),this._v(" directive, this is useful if you want to validate values rather than input fields, for example in a Vuex action.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Validator "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vee-validate'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" v "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Validator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" valid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" errors "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("verify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'max:3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the valid prop indicates the result of validation.")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("valid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The `errors` is an array of error strings.")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("errors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ["The {field} field may not be greater than 3 characters."]')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("Note that the messages returned will have {field} as the field name so you can replace it easily if you need to.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"verify-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verify-options","aria-hidden":"true"}},[this._v("#")]),this._v(" Verify Options")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("verify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Prop")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Default Value")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("string")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("{field}")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("A string representing the field name used in error messages.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bails")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("boolean")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("true")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("If true, stops validation on the first failing rule.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("values")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("object")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("{}")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("An object mapping the values of other fields required for cross-field rules.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"cross-field-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cross-field-rules","aria-hidden":"true"}},[this._v("#")]),this._v(" Cross-Field Rules")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Target dependant rules can be also used, you would need to pass the "),e("code",[this._v("values")]),this._v(" object in the third parameter containing the other values keyed by target name.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("verify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pass'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'confirmed:conf'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  values"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// target fields.")]),t._v("\n    conf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p@$$'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="validator.md";e.default=n.exports}}]);