import DestyleMktoForm from './destyleMarketo';
import AnimateThankyou from './animateThankyou';

const mktoForm = () => {
  MktoForms2.loadForm('//app-abd.marketo.com', '031-WIX-618', 3339, function (form) {
    var formEl = form.getFormElem()[0];

    // remove element styles from root and children (may want to disable this while debugging)
    for (
      var elsWithStyles = document.querySelectorAll(
          '#' + formEl.id + ', #' + formEl.id + ' [style]'
        ),
        i = 0,
        imax = elsWithStyles.length;
      i < imax;
      i++
    ) {
      elsWithStyles[i].removeAttribute('style');
    }

    // disable all Marketo-sourced stylesheets
    for (var styleSheets = document.styleSheets, i = 0, imax = styleSheets.length; i < imax; i++) {
      var ssLoc = document.createElement('A');
      ssLoc.href = styleSheets[i].href;

      if (
        ssLoc.hostname.search(/\.marketo\.com$/) !== -1 || //  external STYLEs
        (styleSheets[i].ownerNode || styleSheets[i].owningElement).parentNode == formEl
      ) {
        //  inline STYLEs within FORM tag
        styleSheets[i].disabled = true;
      }
    }

    DestyleMktoForm(form);

    // On success
    form.onSuccess(function (values, followUpUrl) {
      AnimateThankyou();
      return false;
    });
  });
};

export default mktoForm;
