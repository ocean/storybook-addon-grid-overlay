import { addons, types } from 'storybook/manager-api';
import { ADDON_ID, TOOL_ID } from './constants';
import { Tool } from './Tool';

// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Grid Overlay',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story)$/)),
    render: Tool
  });
});
