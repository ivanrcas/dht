// TODO: A way to add Icons that don't already exist?
// - Register them and add
// - Include SVG Source/Inline?
// - By URL, or own component?

// What KINDS of toolbar buttons do we have...
// - One's that dispatch commands
// - One's that set tool's active
// - More custom, like CINE
//    - Built in for one's like this, or custom components?

// Visible?
// Disabled?
// Based on contexts or misc. criteria?
//  -- ACTIVE_ROUTE::VIEWER
//  -- ACTIVE_VIEWPORT::CORNERSTONE
// setToolActive commands should receive the button event that triggered
// so we can do the "bind to this button" magic

const TOOLBAR_BUTTON_TYPES = {
  COMMAND: 'command',
  SET_TOOL_ACTIVE: 'setToolActive',
  BUILT_IN: 'builtIn',
};

const TOOLBAR_BUTTON_BEHAVIORS = {
  CINE: 'CINE',
  DOWNLOAD_SCREEN_SHOT: 'DOWNLOAD_SCREEN_SHOT',
};

/* TODO: Export enums through a extension manager. */
const enums = {
  TOOLBAR_BUTTON_TYPES,
  TOOLBAR_BUTTON_BEHAVIORS,
};

const definitions = [

   //Espacio
    {
    id: '',
    label: ' ',
    icon: 'measure-non-target',
    //
    // type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    // commandName: 'setToolActive',
    // commandOptions: { toolName: 'Wwwc' },
  },

  {
    id: 'StackScroll',
    label: 'Stack Scroll',
    icon: 'bars',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'StackScroll' },
  },

   //Espacio
    {
    id: '',
    label: ' ',
    icon: 'measure-non-target',
    //
    // type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    // commandName: 'setToolActive',
    // commandOptions: { toolName: 'Wwwc' },
  },

  {
    id: 'Wwwc',
    label: 'Contraste',
    icon: 'level',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'Wwwc' },
  },

  {
    id: 'Zoom',
    label: 'Zoom',
    icon: 'search-plus',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'Zoom' },
  },


  {
    id: 'Pan',
    label: 'Pan',
    icon: 'arrows',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'Pan' },
  },

  {
    id: 'Reset',
    label: 'Reset',
    icon: 'reset',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'resetViewport',
  },

     //Espacio
    {
    id: '',
    label: ' ',
    icon: 'measure-non-target',
    //
    // type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    // commandName: 'setToolActive',
    // commandOptions: { toolName: 'Wwwc' },
  },

  {
    id: 'Length',
    label: 'Length',
    icon: 'measure-temp',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'Length' },
  },
  // {
  //   id: 'ArrowAnnotate',
  //   label: 'Annotate',
  //   icon: 'measure-non-target',
  //   //
  //   type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
  //   commandName: 'setToolActive',
  //   commandOptions: { toolName: 'ArrowAnnotate' },
  // },
  {
    id: 'Angle',
    label: 'Angle',
    icon: 'angle-left',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'Angle' },
  },

  // {
  //   id: 'Cine',
  //   label: 'CINE',
  //   icon: 'youtube',
  //   //
  //   type: TOOLBAR_BUTTON_TYPES.BUILT_IN,
  //   options: {
  //     behavior: TOOLBAR_BUTTON_BEHAVIORS.CINE,
  //   },
  // },
  // {
  //   id: 'EllipticalRoi',
  //   label: 'Ellipse',
  //   icon: 'circle-o',
  //   //
  //   type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
  //   commandName: 'setToolActive',
  //   commandOptions: { toolName: 'EllipticalRoi' 
  //   },
  // },
  {
    id: 'Clear',
    label: 'Clear',
    icon: 'trash',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'clearAnnotations',
  },

       //Espacio
    {
    id: '',
    label: ' ',
    icon: 'measure-non-target',
    //
    // type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    // commandName: 'setToolActive',
    // commandOptions: { toolName: 'Wwwc' },
  },

        //Espacio
    {
    id: '',
    label: '?? By Nexus 2021',
    icon: 'ohif-logo',
    //
    // type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    // commandName: 'setToolActive',
    // commandOptions: { toolName: 'Wwwc' },
  }, 


  // {
  //   id: 'More',
  //   label: 'More',
  //   icon: 'ellipse-circle',
  //   buttons: [
  //     {
  //       id: 'Magnify',
  //       label: 'Magnify',
  //       icon: 'circle',
  //       //
  //       type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
  //       commandName: 'setToolActive',
  //       commandOptions: { toolName: 'Magnify' },
  //     },
  //     {
  //       id: 'WwwcRegion',
  //       label: 'ROI Window',
  //       icon: 'stop',
  //       //
  //       type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
  //       commandName: 'setToolActive',
  //       commandOptions: { toolName: 'WwwcRegion' },
  //     },
  //     {
  //       id: 'DragProbe',
  //       label: 'Probe',
  //       icon: 'dot-circle',
  //       //
  //       type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
  //       commandName: 'setToolActive',
  //       commandOptions: { toolName: 'DragProbe' },
  //     },
  //     {
  //       id: 'EllipticalRoi',
  //       label: 'Ellipse',
  //       icon: 'circle-o',
  //       //
  //       type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
  //       commandName: 'setToolActive',
  //       commandOptions: { toolName: 'EllipticalRoi' },
  //     },
  //     {
  //       id: 'RectangleRoi',
  //       label: 'Rectangle',
  //       icon: 'square-o',
  //       //
  //       type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
  //       commandName: 'setToolActive',
  //       commandOptions: { toolName: 'RectangleRoi' },
  //     },
  //     {
  //       id: 'Invert',
  //       label: 'Invert',
  //       icon: 'adjust',
  //       //
  //       type: TOOLBAR_BUTTON_TYPES.COMMAND,
  //       commandName: 'invertViewport',
  //     },
  //     {
  //       id: 'RotateRight',
  //       label: 'Rotate Right',
  //       icon: 'rotate-right',
  //       //
  //       type: TOOLBAR_BUTTON_TYPES.COMMAND,
  //       commandName: 'rotateViewportCW',
  //     },
  //     {
  //       id: 'FlipH',
  //       label: 'Flip H',
  //       icon: 'ellipse-h',
  //       //
  //       type: TOOLBAR_BUTTON_TYPES.COMMAND,
  //       commandName: 'flipViewportHorizontal',
  //     },
  //     {
  //       id: 'FlipV',
  //       label: 'Flip V',
  //       icon: 'ellipse-v',
  //       //
  //       type: TOOLBAR_BUTTON_TYPES.COMMAND,
  //       commandName: 'flipViewportVertical',
  //     },
  //     {
  //       id: 'Clear',
  //       label: 'Clear',
  //       icon: 'trash',
  //       //
  //       type: TOOLBAR_BUTTON_TYPES.COMMAND,
  //       commandName: 'clearAnnotations',
  //     },
  //     {
  //       id: 'Bidirectional',
  //       label: 'Bidirectional',
  //       icon: 'measure-target',
  //       //
  //       type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
  //       commandName: 'setToolActive',
  //       commandOptions: { toolName: 'Bidirectional' },
  //     },
  //     {
  //       id: 'Eraser',
  //       label: 'Eraser',
  //       icon: 'eraser',
  //       //
  //       type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
  //       commandName: 'setToolActive',
  //       commandOptions: { toolName: 'Eraser' },
  //     },
  //     {
  //       id: 'Download',
  //       label: 'Download',
  //       icon: 'create-screen-capture',
  //       //
  //       type: TOOLBAR_BUTTON_TYPES.BUILT_IN,
  //       options: {
  //         behavior: TOOLBAR_BUTTON_BEHAVIORS.DOWNLOAD_SCREEN_SHOT,
  //         togglable: true,
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: 'Exit2DMPR',
  //   label: 'Exit 2D MPR',
  //   icon: 'times',
  //   //
  //   type: TOOLBAR_BUTTON_TYPES.COMMAND,
  //   commandName: 'setCornerstoneLayout',
  //   context: 'ACTIVE_VIEWPORT::VTK',
  // }
];

export default {
  definitions,
  defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE',
};
