try {
    const record = $app.dao().findRecordById(_arg1_ , _arg2_ );

     $app.dao().deleteRecord(record);
    _arg3_ = true;
  } catch(e){
    _arg3_ = false;
  }
