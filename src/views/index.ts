import { createPresenter, ui } from '@mcpfusion/core';
import { defineModel } from '@mcpfusion/core';

const UrlResponseModel = defineModel('UrlResponse', (m) => {
    m.casts({
        success: m.boolean('Success flag'),
        result: m.string('JSON stringified result'),
        error: m.string('Optional error')
    });
});

export const UrlResponsePresenter = createPresenter('UrlResponse')
  .schema(UrlResponseModel as any)
  .rules(['Display the URL parse result.'])
  .ui((data: any) => {
      if (!data.success) return [ui.markdown(`❌ **Error:** ${data.error}` as string)];
      return [ui.markdown(`✅ **Result:**\n\`\`\`json\n${JSON.stringify(data.result, null, 2)}\n\`\`\`` as string)];
  });
