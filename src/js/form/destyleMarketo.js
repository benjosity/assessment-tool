const DestyleMktoForm = (mktoForm, moreStyles) => {
  var formEl = mktoForm.getFormElem()[0],
    arrayFrom = getSelection.call.bind([].slice);

  // remove element styles from <form> and children
  var styledEls = arrayFrom(formEl.querySelectorAll('[style]')).concat(formEl);
  styledEls.forEach(function (el) {
    el.removeAttribute('style');
  });

  // disable remote stylesheets and local <style>s
  var styleSheets = arrayFrom(document.styleSheets);
  styleSheets.forEach(function (ss) {
    if (
      [mktoForms2BaseStyle, mktoForms2ThemeStyle].indexOf(ss.ownerNode) != -1 ||
      formEl.contains(ss.ownerNode)
    ) {
      ss.disabled = true;
    }
  });

  if (!moreStyles) {
    formEl.setAttribute('data-styles-ready', 'true');
  }
};

export default DestyleMktoForm;
