# URL Parser MCP Server

A structural Model Context Protocol (MCP) server that enables autonomous agents to precisely deconstruct, analyze, and manipulate complex Uniform Resource Locators (URLs) and query parameters without the risk of hallucination.

[![Deploy on Vinkius Edge](https://img.shields.io/badge/Deploy%20on-Vinkius%20Edge-blue?style=for-the-badge)](https://vinkius.com/mcp/deterministic-url-engine)
[![Docker Pulls](https://img.shields.io/docker/pulls/vinkius/url-parser-mcp?style=for-the-badge&logo=docker&color=2496ed)](https://hub.docker.com/r/vinkius/url-parser-mcp)

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

## Run on Vinkius Edge (Free Edge Hosting)

Vinkius provides **free, highly available edge hosting** using secure V8 isolates. Deploying to the Vinkius Edge is the fastest way to make this MCP server accessible to any AI agent anywhere, with sub-millisecond response times and zero maintenance.

1. Clone this repository
2. Run the deployment command:

```bash
npx mcpfusion deploy
```

That's it. Your MCP server is now live, secure, and ready to be connected to your agents.

👉 **[Access the URL Parser MCP on Vinkius](https://vinkius.com/mcp/deterministic-url-engine)**

## Local Development

Constructed using [MCP Fusion](https://www.npmjs.com/package/@mcpfusion/core) for reliable, strictly typed execution.

```bash
npm install
npm run dev
```
