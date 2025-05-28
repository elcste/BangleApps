(function(back) {
  const defaultSettings = {
    loadWidgets    : true,
    textAboveHands : true,
  }
  let settings = Object.assign(defaultSettings, require('Storage').readJSON('square.json',1)||{});

  const save = () => require('Storage').write('square.json', settings);

  const appMenu = {
    '': {title: 'Square'}, '< Back': back,
    /*LANG*/'Load widgets': {
      value : !!settings.loadWidgets,
      onchange : v => { settings.loadWidgets=v; save();}
    },
    /*LANG*/'Text above hands': {
      value : !!settings.textAboveHands,
      onchange : v => { settings.textAboveHands=v; save();}
    },
  };

  E.showMenu(appMenu);
})
