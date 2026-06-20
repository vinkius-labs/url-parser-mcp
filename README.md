# URL Parser MCP Server

A structural Model Context Protocol (MCP) server that enables autonomous agents to precisely deconstruct, analyze, and manipulate complex Uniform Resource Locators (URLs) and query parameters without the risk of hallucination.

[![Deploy on Vinkius Cloud](https://img.shields.io/badge/Deploy%20on-Vinkius%20Cloud-blue?style=for-the-badge)](https://vinkius.com/mcp/url-parser)

## Why AI Struggles with URL Parsing

URLs are strict hierarchical structures, but LLMs process them as flat sequences of text tokens. When an agent attempts to extract deeply nested query parameters, resolve relative paths against a base domain, or properly URL-encode specific segments, it frequently corrupts the structure—breaking links or creating malformed API requests.

### The Solution: Structural Deconstruction
The **URL Parser MCP** provides agents with a deterministic URI parsing engine. It breaks down any URL into its exact semantic components (protocol, hostname, port, pathname, search params, and hash) and returns a structured JSON object. This allows the AI to programmatically manipulate query strings and paths with zero risk of syntax errors.

---

## Agentic Tools

* `parse_url`
  * **Function**: Deconstructs a raw URL string into a structured, easily manipulated JSON object.
  * **Output**: Exact separation of `searchParams`, `hostname`, `protocol`, etc.
  * **Use Case**: Web scraping agents analyzing pagination links, or security agents auditing destination domains.

* `build_url`
  * **Function**: Safely constructs a complete URL from component parts, ensuring mathematically perfect URL encoding.

## Deploy on Vinkius Cloud

Add robust URL manipulation to your AI stack instantly without local deployment overhead.

👉 **[Connect the URL Parser MCP via Vinkius](https://vinkius.com/mcp/url-parser)**

Hosted natively on Vinkius Cloud, ensuring edge-optimized performance and highly available execution.

## Open Source

Built on [@mcpfusion/core](https://www.npmjs.com/package/@mcpfusion/core).

```bash
npm install
npm run dev
```
