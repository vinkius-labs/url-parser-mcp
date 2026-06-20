import { f } from '../../f.js';
import { UrlResponsePresenter } from '../../views/index.js';
import { parseUrl, extractQuery, injectQuery } from '../../engine/logic.js';

export const parseUrlTool = f.action('parse_url')
    .describe('Deconstructs a URL into its core components: protocol, host, pathname, query parameters, and hash.')
    .instructions('Use this tool to parse URLs into easily accessible AST-like components using native URL primitives.')
    .withString('url', 'The full URL string to parse.')
    .returns(UrlResponsePresenter)
    .handle(async (i) => parseUrl(i.url));

export const extractQueryTool = f.action('extract_query')
    .describe('Safely extracts a specific query string parameter value from a URL without regex errors.')
    .instructions('Use this tool to securely extract a search param from a URL safely.')
    .withString('url', 'The full URL string.')
    .withString('paramKey', 'The specific query parameter key to extract (e.g. "utm_source").')
    .returns(UrlResponsePresenter)
    .handle(async (i) => extractQuery(i.url, i.paramKey));

export const injectQueryTool = f.action('inject_query')
    .describe('Injects or updates query string parameters in a URL safely, guaranteeing correct ? and & concatenation.')
    .instructions('Use this tool to securely append or replace query string variables inside a URL. Provide the new params as a JSON string.')
    .withString('url', 'The base URL string.')
    .withString('paramsJsonStr', 'A JSON string object containing key-value pairs to inject (e.g. `{"utm_campaign": "blackfriday", "ref": "twitter"}`).')
    .returns(UrlResponsePresenter)
    .handle(async (i) => injectQuery(i.url, i.paramsJsonStr));
