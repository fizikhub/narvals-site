const WEBMCP_DESCRIPTION_LIMIT = 500;
const WEBMCP_NAME_PATTERN = /^[A-Za-z][A-Za-z0-9]{0,29}$/;

/**
 * Register a progressive-enhancement WebMCP tool without making the site depend
 * on an experimental browser API. Unsupported browsers simply keep the normal
 * human interface.
 */
export const registerReadOnlyTool = async ({ name, description, inputSchema, execute }) => {
  const modelContext = document.modelContext;
  if (!modelContext?.registerTool) return false;

  if (!WEBMCP_NAME_PATTERN.test(name)) throw new TypeError(`Invalid WebMCP tool name: ${name}`);
  if (!description || description.length > WEBMCP_DESCRIPTION_LIMIT) {
    throw new TypeError(`Invalid WebMCP description for ${name}`);
  }

  try {
    await modelContext.registerTool({
      name,
      description,
      inputSchema,
      execute,
      annotations: {
        readOnlyHint: true,
        untrustedContentHint: false
      }
    });
    return true;
  } catch (error) {
    // The API is an origin trial and can change. A registration failure must not
    // break the visible calculator for people or conventional crawlers.
    console.debug(`WebMCP tool registration skipped: ${name}`, error);
    return false;
  }
};
