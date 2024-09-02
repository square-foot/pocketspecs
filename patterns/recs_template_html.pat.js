
const templatefile = `${__hooks}/templates/${_arg1_}${_arg4_}.html`
const rendObj = {
    dat: _arg2_,
    opt: _arg5_
};


_arg3_ = $template.loadFiles(
    templatefile
).render(rendObj)

if(rendObj.opt.renderhtml){
   _arg3_ = _arg3_.replaceAll('&lt;','<');
   _arg3_ = _arg3_.replaceAll('&gt;','>');
   _arg3_ = _arg3_.replaceAll('&amp;','&');
   _arg3_ = _arg3_.replaceAll('<script','');
   
}
