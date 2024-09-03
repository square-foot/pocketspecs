try{
    const collection = $app.dao().findCollectionByNameOrId(_arg1_)
    
    _arg3_ = new Record(collection)

    const form = new RecordUpsertForm($app, _arg3_)
    form.loadData(_arg2_)

    form.submit();
    _arg4_ = true;
} catch (e) {
    _arg4_  = false; 
}