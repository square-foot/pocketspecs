try{
    const collection = $app.dao().findCollectionByNameOrId(_arg1_)
    
    _arg3_ = new Record(collection)

    const form = new RecordUpsertForm($app, _arg3_)
    form.loadData(_arg2_)

// validate and submit (internally it calls $app.dao().saveRecord(record) in a transaction)
    form.submit();
    _arg4_ = true;
} catch (e) {
    _arg4_  = false; 
}