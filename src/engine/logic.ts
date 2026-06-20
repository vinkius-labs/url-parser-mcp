export async function parseUrl(urlString: string): Promise<{ success: boolean, result?: any, error?: string }> {
    try {
        const parsed = new URL(urlString);
        const queryParams: Record<string, string> = {};
        parsed.searchParams.forEach((value, key) => {
            queryParams[key] = value;
        });
        
        return { success: true, result: {
            href: parsed.href,
            protocol: parsed.protocol.replace(':', ''),
            host: parsed.host,
            hostname: parsed.hostname,
            port: parsed.port || null,
            pathname: parsed.pathname,
            search: parsed.search,
            hash: parsed.hash,
            queryParams: queryParams
        }};
    } catch (e) {
        return { success: false, error: 'Invalid URL provided.' };
    }
}

export async function extractQuery(urlString: string, paramKey: string): Promise<{ success: boolean, result?: string, error?: string }> {
    try {
        const parsed = new URL(urlString);
        if (parsed.searchParams.has(paramKey)) {
            return { success: true, result: parsed.searchParams.get(paramKey) || '' };
        } else {
            return { success: false, error: `Parameter '${paramKey}' not found in URL.` };
        }
    } catch (e) {
        return { success: false, error: 'Invalid URL provided.' };
    }
}

export async function injectQuery(urlString: string, paramsJsonStr: string): Promise<{ success: boolean, result?: string, error?: string }> {
    try {
        const parsed = new URL(urlString);
        let paramsToInject: Record<string, string>;
        try {
            paramsToInject = JSON.parse(paramsJsonStr);
        } catch {
            return { success: false, error: 'Invalid JSON string provided for parameters.' };
        }
        
        for (const [key, value] of Object.entries(paramsToInject)) {
            parsed.searchParams.set(key, String(value));
        }
        
        return { success: true, result: parsed.href };
    } catch (e) {
        return { success: false, error: 'Invalid URL provided.' };
    }
}
