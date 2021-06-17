"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGraphQLClient = void 0;
var awesome_graphql_client_1 = require("awesome-graphql-client");
var node_fetch_1 = __importDefault(require("node-fetch"));
var cachedClient; // no supported Type yet
var createGraphQLClient = function () {
    if (cachedClient) {
        return cachedClient;
    }
    var client = new awesome_graphql_client_1.AwesomeGraphQLClient({
        endpoint: process.env.GRAPHQL_ENDPOINT,
        fetch: node_fetch_1.default
    });
    cachedClient = client;
    return cachedClient;
};
exports.createGraphQLClient = createGraphQLClient;
