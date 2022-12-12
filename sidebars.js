module.exports = {
  someSidebar: {
    "Getting Started": [
      "welcome",
      "getting-started/generated-app",
      "getting-started/first-app",
      "getting-started/view-generated-code",
      "how-to/run-dev-env",
      "how-to/add-custom-code",
      "getting-started/deploy",
      "getting-started/authentication",
      "getting-started/sync-with-github",
      "faqs/faqs",
      "getting-started/plugins",
      "getting-started/projects-resources-services",
      "getting-started/cli",
    ],
    "Generated API": [
      "getting-started/generated-app-api",
      "api/generated-api-sorting",
      "api/generated-api-filtering",
      "api/generated-api-pagination",
      "api/meta-query-graphql",
    ],
    "Customize Your Application": [
      "custom-code/managing-custom-files",
      "custom-code/add-business-logic",
      "custom-code/add-action-to-controller",
      "custom-code/add-graphql-query",
      "custom-code/seed-db",
      "custom-code/add-custom-dto",
    ],

    "How To": [
      "how-to/how-to-create-app",
      "how-to/how-to-create-entity",
      "how-to/how-to-create-entity-field",
      "how-to/how-to-set-access-permissions",
      "how-to/how-to-commit-changes",
      "getting-started/relations",
      "how-to/base-directories",
      "how-to/api-admin-ui-settings",
      "how-to/create-message-broker",
    ],
    "Plugins Developer Guide": [
     {
       type: "category",
       label: "Overview",
       items: [
               "plugins/Overview",
            ],
           },
      {
        type: "category",
        label: "Architecture",
        items: [
                "plugins/PluginArchitecture",      
                "plugins/PluginEventsBeforeAfter",
                "plugins/ContextSkipDefault",
                "plugins/EventHierarchy",
                 ],
                },
      {
        type: "category",
        label: "Developing Plugins",
        items: [
               "plugins/CreateNewPlugin",
               "plugins/PublishPlugin",
               "plugins/ExamplePlugin",
                           ],
                          },
      {
        type: "category",
        label: "Plugin Events - Reference",
        items: [ 
            "plugins/plugin-events/CreateServer",
            "plugins/plugin-events/CreateServerDockerCompose",
            "plugins/plugin-events/CreateServerDockerComposeDb",
            "plugins/plugin-events/CreateServerDotEnv",
            "plugins/plugin-events/CreateServerAuth",
            "plugins/plugin-events/CreatePackageJson",
            "plugins/plugin-events/CreateEntityService",
            "plugins/plugin-events/CreateEntityServiceBase",
            "plugins/plugin-events/CreateEntityController",
            "plugins/plugin-events/CreateEntityControllerBase",
            "plugins/plugin-events/CreateEntityResolver",
            "plugins/plugin-events/CreateEntityResolverBase",
            "plugins/plugin-events/CreateMessageBrokerService",
            "plugins/plugin-events/CreateMessageBrokerServiceBase",
            "plugins/plugin-events/CreateMessageBrokerNestjsModule",
            "plugins/plugin-events/CreateMessageBrokerClientOptionsFactory",
            "plugins/plugin-events/CreateMessageBrokerTopicsEnum",
            "plugins/plugin-events/CreatePrismaSchema",
          ],
        },
      ],
    Tutorials: [
      {
        type: "category",
        label: "Angular Todos",
        items: [
          "tutorials/angular-todos/angular-todos-step-000",
          "tutorials/angular-todos/angular-todos-step-001",
          "tutorials/angular-todos/angular-todos-step-002",
          "tutorials/angular-todos/angular-todos-step-003",
          "tutorials/angular-todos/angular-todos-step-004",
          "tutorials/angular-todos/angular-todos-step-005",
          "tutorials/angular-todos/angular-todos-step-006",
        ],
      },
      {
        type: "category",
        label: "React Todos",
        items: [
          "tutorials/react-todos/react-todos-step-000",
          "tutorials/react-todos/react-todos-step-001",
          "tutorials/react-todos/react-todos-step-002",
          "tutorials/react-todos/react-todos-step-003",
          "tutorials/react-todos/react-todos-step-004",
          "tutorials/react-todos/react-todos-step-005",
          "tutorials/react-todos/react-todos-step-006",
        ],
      },
    ],
    "Running Amplication Platform": [
      "running-amplication-platform/connect-server-to-github",
      "running-amplication-platform/configure-github-auth",
    ],
    About: [
      "about/licensing",
      "about/product-roadmap",
      "getting-started/phone-home",
    ],
    Troubleshooting: [
      {
        type: "category",
        label: "Code Generation",
        items: [
          "errors/invalid-code-generation-version",
          "errors/missing-code-generation-version",
        ],
      },
      {
        type: "category",
        label: "Authorization",
        items: ["errors/could-not-authorize-user"],
      },
      {
        type: "category",
        label: "GitHub",
        items: ["errors/merge-conflict", "errors/github-different-app-id"],
      },
      {
        type: "category",
        label: "Set-Up",
        items: ["errors/installation-fails", "errors/installation-slow"],
      },
      {
        type: "category",
        label: "DB",
        items: ["errors/prisma-denied-access-on-postgres"],
      },
    ],
    Community: ["contributing", "community/handling-a-new-issue"],
  },
};
