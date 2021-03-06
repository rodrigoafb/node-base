const { BaseCommand, baseEvents } = require('architecture-code-structure');
const Logger = require('@naturacosmeticos/clio-nodejs-logger');
const AppSettings = require('./src/app-settings');
const expressAdapter = require('./src/express/handler-to-function-adapter');
const expressAppBuilder = require('./src/express/app-builder');
const ExpressAuthenticatedHandler = require('./src/express/authenticated-handler');
const expressCorsMiddleware = require('./src/express/cors-middleware');
const ExpressHandler = require('./src/express/handler');
const expressLoggingMiddleware = require('./src/express/logging-middleware');
const ExpressUserAuthenticatedHandler = require('./src/express/user-authenticated-handler');
const lambdaAdapter = require('./src/message-queue/lambda-handler-adapter');
const LambdaHandler = require('./src/message-queue/lambda-handler');
const mochaHelpers = require('./src/tests/mocha-helpers');
const Module = require('./src/module');
const NodeInspector = require('./src/development/node-inspector');
const Security = require('./src/security');
const testsHelpers = require('./src/tests/helpers');
const TypeOrmConfigFactory = require('./src/orm/typeorm/typeorm-config-factory');
const typeOrmLogger = require('./src/orm/typeorm/logger');
const ArrayUtils = require('./src/utils/array');
const GraphQLAppBuilder = require('./src/graphql/app-builder');

module.exports = {
  App: {
    baseEvents,
    Command: BaseCommand,
    Logger,
    Security,
    Settings: AppSettings,
  },
  Express: {
    adapter: expressAdapter,
    appBuilder: expressAppBuilder,
    AuthenticatedHandler: ExpressAuthenticatedHandler,
    corsMiddleware: expressCorsMiddleware,
    Handler: ExpressHandler,
    loggingMiddleware: expressLoggingMiddleware,
    UserAuthenticatedHandler: ExpressUserAuthenticatedHandler,
  },
  External: {
    TypeOrmConfigFactory,
    typeOrmLogger,
  },
  GraphQL: {
    appBuilder: GraphQLAppBuilder,
  },
  MessageQueue: {
    lambdaAdapter,
    LambdaHandler,
  },
  Tests: {
    helpers: testsHelpers,
    mochaHelpers,
  },
  Util: {
    ArrayUtils,
    Module,
    NodeInspector,
  },
};
