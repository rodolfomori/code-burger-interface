{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "eslint-plugin-import-helpers",
        "react-hooks",
        "prettier"
    ],
    "rules": {
        "prettier/prettier":"error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-unused-vars": "warn",
        "import-helpers/order-imports": [
            "warn",
            {
                "newlinesBetween": "always", // new line between groups
                "groups": [
                    "/^react/",
                    "module",
                    "/^@shared/",
                    [
                        "parent",
                        "sibling",
                        "index"
                    ]
                ],
                "alphabetize": {
                    "order": "asc",
                    "ignoreCase": true
                }
            }
        ]
    }
}